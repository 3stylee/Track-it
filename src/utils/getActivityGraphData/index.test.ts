import { getActivityGraphData } from "./index"

describe("getActivityGraphData", () => {
	it("should return an object with the correct properties", () => {
		const mockActivityStream = {
			distance: {
				original_size: 200,
				data: [1, 2, 3, 4, 5],
				resolution: "high",
				series_type: "distance",
			},
			heartrate: {
				original_size: 200,
				data: [60, 70, 80, 90, 100],
				resolution: "high",
				series_type: "heartrate",
			},
			altitude: {
				original_size: 200,
				data: [100, 200, 300, 400, 500],
				resolution: "high",
				series_type: "altitude",
			},
			time: {
				original_size: 200,
				data: [100, 200, 300, 400, 500],
				resolution: "high",
				series_type: "time",
			},
		}
		const mockActivity = {
			id: 10802511154,
			name: "6 x 600 off 2 mins",
			distance: 4692.6,
			moving_time: 991,
			elapsed_time: 1242,
			polyline:
				"alaaI`goFUg@OQQKUCWHQTKZE`@@b@NfAv@|DJ\\NTNNRBFCFANKJUH]@c@Ae@Ie@}@qEK[MYOOQGQ@QLOVI\\A`@Bb@F`@z@vDNbABBHDd@ANCNQH[NeAC]k@aCYq@Oy@MWOQSGQFSRMZG^?N?PBb@b@lBZpBJZLVRPRFRARON[L_@B_@Cc@o@cD_@{AM[OSQKSAQFQRK\\Er@Dr@Z|AVzA\\xAFHD?r@KHCPULe@DW?a@q@cE[aAMSQQSGI@I@ONOXI`@Cb@@d@L`Ar@pDJVNRRHR@PILQPi@Ba@Ac@McAq@uDQg@QQUGU?SJOTK\\C`@@b@L`A~@bFZZL?^KPOLYLy@?k@m@oD]kAMWQSSGUDQPOXGb@Af@Bf@LfAp@zCJZLVPNRDRCPODMDKHa@Be@Ce@aAqFI]MWQOUCUFSPOXI`@Ab@Bb@jAvGFFl@BPAHCRSJ_@@e@Am@s@cEIOMe@MWQSUEUFQRK\\Gb@@d@PhAv@`ELZPRRFRETQP[Ha@@O@QAc@OcAy@aEMYQOWCUFSNOZI^C`@@`@j@~Bh@`DLHD?j@GPMN[N_A?c@y@}DKSIa@KYQQSESDSPMZI`@Ad@Bb@D`@z@~DHXLVNLRDTERQLYHa@@Q?u@OcAy@wDM[QUUIU@UNQZKd@Cf@Bh@Hd@t@jD",
			average_speed: 4.735,
			max_speed: 7.2,
			has_heartrate: true,
			average_heartrate: 153.8,
			max_heartrate: 173,
			start_date: "2024-02-20T18:31:00Z",
			description: "finally back on the track doing shorter stuff",
			total_elevation_gain: 7,
			splits_metric: [],
			splits_standard: [],
			laps: [],
			date: "2024-02-20T18:31:00Z",
			type: "Run",
			predictedType: "Session",
		}

		const theme = "light"

		const result = getActivityGraphData(
			mockActivityStream,
			mockActivity,
			theme,
			{ unitString: "km", meters: 1000 },
			false
		)

		expect(result).toHaveProperty("time")
		expect(result).toHaveProperty("paceStreamData")
		expect(result).toHaveProperty("paceOptions")
		expect(result).toHaveProperty("heartRateStreamData")
		expect(result).toHaveProperty("heartRateOptions")
		expect(result).toHaveProperty("altitudeStreamData")
		expect(result).toHaveProperty("altitudeOptions")
	})
})
