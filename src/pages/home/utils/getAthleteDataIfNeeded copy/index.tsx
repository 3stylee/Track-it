import { INITIAL_DATA_MESSAGE } from "../../../../constants"

export const getAthleteDataIfNeeded = (text: string, loadAthleteData: any, athleteID: number) => {
	if (text === INITIAL_DATA_MESSAGE) {
		loadAthleteData(athleteID)
	}
}
