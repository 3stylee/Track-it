import { tool } from "@langchain/core/tools"
import { db } from "../../firebase"
import { z } from "zod"
import { collection, getDocs, limit, orderBy, OrderByDirection, query, where, WhereFilterOp } from "firebase/firestore"

interface getDataParams {
	col: string
	queryParams: string[][]
	lim: number
	order: string[]
}

const getDataSchema = z.object({
	col: z.string(),
	queryParams: z.array(z.array(z.string())),
	lim: z.number(),
	order: z.array(z.string()),
})

const getData = tool(
	async ({ col, queryParams, lim = 5, order }: getDataParams): Promise<string> => {
		let q = query(collection(db, col))
		for (const [field, op, value] of queryParams) {
			q = query(q, where(field, op as WhereFilterOp, value))
		}
		q = query(q, orderBy(order[0], order[1] as OrderByDirection))
		q = query(q, limit(lim))

		const data = (await getDocs(q)).docs.map((doc) => doc.data())
		return JSON.stringify(data)
	},
	{
		name: "get_data",
		description: "Execute a query to retrieve information from firestore",
		schema: getDataSchema,
	}
)

const getDistanceSchema = z.object({
	meters: z.number(),
})

const getDistance = tool(
	async ({ meters }: { meters: number }): Promise<string> => {
		const distance = meters / 1000
		return distance.toFixed(2)
	},
	{
		name: "get_distance",
		description: "Convert meters to kilometers/ miles",
		schema: getDistanceSchema,
	}
)

const getPaceSchema = z.object({
	meters: z.number(),
	seconds: z.number(),
})

const getPace = tool(
	async ({ meters, seconds }: { meters: number; seconds: number }): Promise<string> => {
		const km = await getDistance.invoke({ meters: meters })
		const pace = seconds / 60 / km
		return pace.toFixed(2)
	},
	{
		name: "get_pace",
		description: "Calculate pace in minutes per kilometer/ mile",
		schema: getPaceSchema,
	}
)

const tools = [getData, getDistance, getPace]
export default tools
