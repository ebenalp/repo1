/**
 * @author Christof Müller
 */

/******************************************
 *** createJson
 *** create list entries from given data
 *******************************************/

 
function createJsonGetUser() 
{

	var json = {};

	var username   = localStorage.getItem('username');
	var contractid = localStorage.getItem('contractId');

	 
	json.metadata = [];

	json.metadata[0] = {
		username   : localStorage.getItem('username'),
		contractid : contractid,
		object     : "party",
		method     : "get",
		error : null
	};

	json.data    = [];
	json.filter = [];
 
    
    json.filter[0] = {
		"attribute"  : "contractid",
		"value"      : contractid

	};
    json.filter[1] = {
		"attribute"  : "role",
		"value"      : $("#userRole").val()

	};
 

	return JSON.stringify(json);

}
 
function createJsonPutUser() 
{

	var json = {};
	json.metadata = [];
    var contractid =  localStorage.getItem('contractId');
	json.metadata[0] = 
	{
		"username"   : localStorage.getItem('username'),
		"elements"   : 1,
        "object"     : "party",
        "method"     : "put"
	};

	json.data = [];
		
	 
	 	json.data[0] = {
		    "id"         : $("#userKey").val(),
		    "role"       : $("#userRole").val(),
   			"userid"     : $("#userid").val(),
			"lastname"   : $("#lastname").val(),
			"surname"    : $("#surname").val(),
			"phone"      : $("#phone").val(),
			"email"      : $("#email").val(),
			"contractid" : contractid,
			"type"       : "N"
		};

 

	return JSON.stringify(json);

}






function createJsonPutSubTargets() {
	var myarray = [];
	var eintraege = [];
	var myJSON = "";

	var username = localStorage.getItem('username');

	var listItems = $('#subtargetList div');

	var info = {
		"username" : username,
		"elements" : nvl(listItems.length, 0),
		"targetid" : $("#zielid").val(),
		"error" : ""
	};

	myarray.push(info);

	// Incomplete List
	listItems.each(function(idx, li) {
		var item = {

			"name" : $(li).find("#subTargetName").text(),
			"description" : $(li).find("#subTargetDescription").text(),
			"id" : $(li).find("#subTargetId").val(),
			"targetId" : $("#unterzielid").val()
		};
		if (item.name.length > 0 && item.id.length > 0 && item.targetId.length > 0)
			eintraege.push(item);

	});

	myarray.push(eintraege);
	return JSON.stringify(myarray);

}


function createJsonPutTargets() {
	var myarray = [];
	var eintraege = [];
	var myJSON = "";

	var username = localStorage.getItem('username');

	var listItems = $('#targetList li');

	var info = {
		"username" : username,
		"elements" : nvl(listItems.length, 0),
		"error" : ""
	};

	myarray.push(info);

	// Incomplete List
	listItems.each(function(idx, li) {
		var item = {

			"name" : $(li).find("span:first").text(),

			"id" : $(li).attr('id')

		};

		eintraege.push(item);

	});

	myarray.push(eintraege);
	return JSON.stringify(myarray);

}

function createJsonTarget() {
	var myarray = [];
	var eintraege = [];
	var myJSON = "";

	var username = localStorage.getItem('username');
	;

	var info = {
		"username" : username,

		"error" : ""
	};

	myarray.push(info);

	return JSON.stringify(myarray);

}

function createJsonSubTarget(targetid) {
	var myarray = [];
	var eintraege = [];
	var myJSON = "";

	var username = localStorage.getItem('username');
	;

	var info = {
		"username" : username,
		"targetid" : targetid,
		"error" : ""
	};

	myarray.push(info);

	return JSON.stringify(myarray);

}

function createJsonPutRating() {
	var myarray = [];
	var eintraege = [];
	var myJSON = "";

	var username = localStorage.getItem('username');
	var subtargetid = $("#currentSubTargetId").val();

	var info = {
		"username" : username,
		"subtargetid" : subtargetid,
		"elements" : nvl($RatingList.length, 0),
		"error" : ""
	};

	myarray.push(info);

	// Incomplete List
	var rating;
	var ratingdate;
	$RatingList.find('tr').each(function(idx, div) {

		ratingdate = $(div).find("td:nth-child(1)").html();
		rating = $(div).find("td:nth-child(2)").html();

		var item = {
			"sortorder" : idx,
			"rating" : rating,
			"ratingdate" : ratingdate
		};
		eintraege.push(item);

	});

	myarray.push(eintraege);
	return JSON.stringify(myarray);

}

function createJsonGetRating() {
	var myarray = [];
	var eintraege = [];
	var myJSON = "";

	var subtargetid = $("#currentSubTargetId").val();
	var username = localStorage.getItem('username');
	;

	var info = {
		"username" : username,
		"subtargetid" : subtargetid,
		"error" : ""
	};

	myarray.push(info);

	return JSON.stringify(myarray);

}

function createJsonGetChart(targetIdType, targetid) {
	var myarray = [];
	var eintraege = [];
	var myJSON = "";

	var username = localStorage.getItem('username');
	;

	var info = {
		"username" : username,
		"targetIdType" : targetIdType,
		"targetid" : targetid,
		"error" : ""
	};

	myarray.push(info);

	return JSON.stringify(myarray);

}

function setChartData(chartDataString) {
	$("#chartdiv").empty();

	$.jqplot._noToImageButton = true;

	var arrdall = eval(chartDataString);

	arrd = arrdall[0];
	$labels = arrdall[1];
	var options = {
		title : "Verlauf",

		axesDefaults : {
			tickRenderer : $.jqplot.CanvasAxisTickRenderer

		},
		legend : {
			show : true,
			location : 'nw'

		},

		seriesDefaults : {
			trendline : {
				show : true,
				type : "exp"
			},
			rendererOptions : {

				smooth : true
			}
		},
		axes : {
			yaxis : {
				renderer : $.jqplot.LogAxisRenderer,
				label : "Wertung"
			},
			xaxis : {
				renderer : $.jqplot.DateAxisRenderer,
				tickOptions : {
					formatString : '%d.%b.%Y'
				},
				label : "Datum",
				tickOptions : {
					angle : -90,
					fontSize : '10pt'
				}
			}
		},
		series : $labels

	};

	var plot2 = $.jqplot('chartdiv', arrd, options);

}


