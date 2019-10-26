
	//ALL GLOBAL CONSTANTS
	var GLOBAL_LAYOUTS = ["ALIGNED_TIMESLOT","NOTALIGNED_TIMESLOT"];
	var GLOBAL_ARRANGEMENTS = [
		[
			{"numOfInputs":6,"visualAffordance":true},
			{"numOfInputs":6,"visualAffordance":false},
			{"numOfInputs":3,"visualAffordance":true},
			{"numOfInputs":3,"visualAffordance":false},
		],
		[
			{"numOfInputs":6,"visualAffordance":false},
			{"numOfInputs":6,"visualAffordance":true},
			{"numOfInputs":3,"visualAffordance":false},
			{"numOfInputs":3,"visualAffordance":true},
		],
		[
			{"numOfInputs":3,"visualAffordance":true},
			{"numOfInputs":3,"visualAffordance":false},
			{"numOfInputs":6,"visualAffordance":true},
			{"numOfInputs":6,"visualAffordance":false},
		],
		[
			{"numOfInputs":3,"visualAffordance":false},
			{"numOfInputs":3,"visualAffordance":true},
			{"numOfInputs":6,"visualAffordance":false},
			{"numOfInputs":6,"visualAffordance":true},
		],
	];
	
	
	var GLOBAL_TRIALS =[
		{"date":"2019-12-11","facility":"Conference Room","capacity":10, "slot":"11:00"},
		{"date":"2019-12-11","facility":"Conference Room","capacity":10, "slot":"16:00"},
		{"date":"2019-12-11","facility":"Conference Room","capacity":10, "slot":"21:00"},		
	]; 

	var GLOBAL_COMPLETION_CODES ={
			"1_1":"GERMANY",
			"1_2":"FRANCE",
			"1_3":"ITALY",
			"2_1":"DENMARK",
			"2_2":"BELGIUM",
			"2_3":"SWITZERLAND",
			"3_1":"ICELAND",
			"3_2":"NORWAY",
			"3_3":"SWEDEN",
			"4_1":"AUSTRIA",
			"4_2":"NETHERLANDS",
			"4_3":"FINLAND",
		};
	
	var GLOBAL_TIMESLOTS= ["07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"];
	
	var GLOBAL_FACILITIES= ["Conference Room","Meeting Room"];
	var GLOBAL_CAPACITY= [5,10,15];
	var GLOBAL_ROOMS = {
		"Conference Room_5":["Conference Room 1","Conference Room 2","Conference Room 3","Conference Room 4","Conference Room 5"],
		"Conference Room_10":["Conference Room 6","Conference Room 7","Conference Room 8","Conference Room 9","Conference Room 10"],
		"Conference Room_15":["Conference Room 11","Conference Room 12","Conference Room 13","Conference Room 14","Conference Room 15"],
		"Meeting Room_5":["Meeting Room 1","Meeting Room 2","Meeting Room 3","Meeting Room 4","Meeting Room 5"],
		"Meeting Room_10":["Meeting Room 6","Meeting Room 7","Meeting Room 8","Meeting Room 9","Meeting Room 10"],
		"Meeting Room_15":["Meeting Room 11","Meeting Room 12","Meeting Room 13","Meeting Room 14","Meeting Room 15"],
	};

	var GLOBAL_STARTDATE = "2019-12-08";
	var GLOBAL_ENDDATE = "2019-12-14";

	var GLOBAL_BOOKED_EVENTS =[
		[
			["07:00","10:00","11:00","14:00","15:00","20:00"], 
			["08:00","09:00","13:00","15:00","19:00"],
			["13:00","14:00","17:00"],
			["15:00","16:00","17:00"],
			["12:00","13:00","14:00"],
		],
		[
			["15:00","16:00","17:00"], 
			["13:00","14:00","17:00"],
			["12:00","13:00","14:00"],
			["08:00","09:00","13:00","15:00","19:00"],
			["07:00","10:00","11:00","14:00","15:00","20:00"], 
		],
		[
			["08:00","09:00","13:00","15:00","19:00"],
			["07:00","10:00","11:00","14:00","15:00","20:00"], 
			["15:00","16:00","17:00"], 
			["13:00","14:00","17:00"],
			["12:00","13:00","14:00"],
		],
		[
			["12:00","13:00","14:00"],
			["15:00","16:00","17:00"], 
			["13:00","14:00","17:00"],
			["08:00","09:00","13:00","15:00","19:00"],
			["07:00","10:00","11:00","14:00","15:00","20:00"], 
		],
		[
			["13:00","14:00","17:00"],
			["08:00","09:00","13:00","15:00","19:00"],
			["07:00","10:00","11:00","14:00","15:00","20:00"], 
			["15:00","16:00","17:00"], 
			["12:00","13:00","14:00"],
		],
		[
			["12:00","13:00","14:00"],
			["08:00","09:00","13:00","15:00","19:00"],
			["13:00","14:00","17:00"],
			["15:00","16:00","17:00"], 
			["07:00","10:00","11:00","14:00","15:00","20:00"], 
		],
		[
			["13:00","14:00","17:00"],
			["07:00","10:00","11:00","14:00","15:00","20:00"], 
			["15:00","16:00","17:00"], 
			["08:00","09:00","13:00","15:00","19:00"],
			["12:00","13:00","14:00"],
		]
	];











