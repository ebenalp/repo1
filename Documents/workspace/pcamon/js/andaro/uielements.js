/**
 * @author Christof Müller
 */

/*******************************************************************************
 * ** outputList ** create list entries from given data
 ******************************************************************************/


function buildNewEventDialog(data) {



	if (data.length > 0) {
		$('#cbKarriereanker').prop('checked', false);
		$('#cbSurvey').prop('checked', false);
		$('#cbAnamnese').prop('checked', false);
		$('#cbGeneralInformation').prop('checked', false);
		$('#cbOthers').prop('checked', false);

		$("#eventId").val('');
		$("#eventTitle").val('');
		$("#eventDateSelected").val('');
		$("#eventTimeSelected").val('');
		$("#eventDescription").val('');



			var listdata = data[0];
			if (listdata  !=  undefined) {


					$("#eventType").val(listdata.type);
					$("#eventId").val(listdata.id);
					$("#eventTitle").val(listdata.title);
					$("#eventDateSelected").val(listdata.date);
					$("#eventTimeSelected").val(listdata.time);
					$("#eventDescription").val(listdata.description);
				    if (listdata.karriereanker == 1)
				       $( "#cbKarriereanker" ).click();
				    if (listdata.survey == 1)
					   $( "#cbSurvey" ).click();
				    if (listdata.anamnese == 1)
					   $( "#cbAnamnese" ).click();
				    if (listdata.generalinformation == 1)
				  	   $( "#cbGeneralInformation" ).click();
				    if (listdata.others == 1)
					   $( "#cbOthers" ).click();
			}
		}


}

function buildSubTargetLists() {
	var localData = localStorage.getItem('localSubTargetData');
	var data = eval(localData);
	if (data.length > 0) {
		var metadata = data[0];
		$('#subtargetList').empty();
		if (metadata.elements != "0") {

			var listdata = data[1];
			if (listdata.length > 0) {
				//localStorage.setItem('VERSION', metadata.version);

				for (i in listdata) {

					outputSubTargetList(listdata[i]["name"], listdata[i]["id"], listdata[i]["ratings"], listdata[i]["description"]);

				}
				// $('#subtargetList').listview('refresh');
			}
		}

	}
}

/*
function buildUserList(userData) {
	 

	if (userData.length > 0) {

 		     $("#userKey").val(userData[0]['id']);
		     $("#userRole").val(userData[0]['role']);
   			 $("#userid").val(userData[0]['userid']);
			 $("#lastname").val(userData[0]['lastname']);
			 $("#surname").val(userData[0]['surname']);
			 $("#phone").val(userData[0]['phone']);
			 $("#email").val(userData[0]['email']);			 
			 $("#userType").val("N");

	}
}

function clearUserData() {
	 

	 

 		     $("#userKey").val('');
		     $("#userRole").val('');
   			 $("#userid").val('');
			 $("#lastname").val('');
			 $("#surname").val('');
			 $("#phone").val('');
			 $("#email").val('');			 
			 $("#userType").val("N");

	
}
*/
function buildSurveyList(data) {

	if (data.length > 0) {

		$("#surveyContent").empty();

		var listdata = data;
		if (listdata.length > 0) {

			for (i in listdata) {

				outputSurveyList(listdata[i]["id"], listdata[i]["question"], listdata[i]["rating"]);

			}
			// Refresh List
			$("#surveyContent").closest("div[data-role=page]").trigger("create");

		}

	}
}

function outputSurveyList(id, question, rating) {
	var check = 'checked="checked"';
	var checked0 = '';
	var checked1 = '';
	var checked2 = '';
	var checked3 = '';
	var checked4 = '';
	var checked5 = '';

	if (rating == "0")
		var checked0 = check;
	if (rating == "1")
		var checked1 = check;
	if (rating == "2")
		var checked2 = check;
	if (rating == "3")
		var checked3 = check;
	if (rating == "4")
		var checked4 = check;
	if (rating == "5")
		var checked5 = check;
	var option0 = '<input class="surveyClick" type="radio" name="' + id + '" id="' + id + '_0" value="0" ' + checked0 + '/> <label for="' + id + '_0">0</label>';
	var option1 = '<input class="surveyClick" type="radio" name="' + id + '" id="' + id + '_1" value="1" ' + checked1 + '/> <label for="' + id + '_1">1</label>';
	var option2 = '<input class="surveyClick" type="radio" name="' + id + '" id="' + id + '_2" value="2" ' + checked2 + '/> <label for="' + id + '_2">2</label>';
	var option3 = '<input class="surveyClick" type="radio" name="' + id + '" id="' + id + '_3" value="3" ' + checked3 + '/> <label for="' + id + '_3">3</label>';
	var option4 = '<input class="surveyClick" type="radio" name="' + id + '" id="' + id + '_4" value="4" ' + checked4 + '/> <label for="' + id + '_4">4</label>';
	var option5 = '<input class="surveyClick" type="radio" name="' + id + '" id="' + id + '_5" value="5" ' + checked5 + '/> <label for="' + id + '_5">5</label>';

	$('#surveyContent').append('<div class="divider">' + '<h3>' + question + '</h3>' + ' <div   data-role="fieldcontain"  >' + '     <fieldset  data-mini="true" data-role="controlgroup" data-type="horizontal"  > ' + option0 + option1 + option2 + option3 + option4 + option5 + '		    </fieldset>' + '		</div>' + '		</div>');

	$("input[name="+id+"]").bind("click",   function () {

		putSurveyData(id );


	});
}


// USERS
buildUserLists = function buildUserLists()
{
	buildSurveyUserList();
	buildEventUserList( );
	buildPortalChangeUserList( );
	buildDocumentUserList()

}


buildPortalChangeUserList = function buildPortalChangeUserList()
{
	$("#filter-menu").empty();
	var data = pcamon._userList();


	$.each(data, function(i, item) {
		{

		$("#filter-menu").append($("<option>").val(item.user_id).text(item.user_name));
		}
	});

	//$("#filter-menu").selectmenu("refresh", true);

}

buildEventUserList = function buildEventUserList()
{
	$("#eventUsers").empty();

	var data = pcamon._userList();

	$.each(data, function(i, item) {
		{


			$("#eventUsers").append($("<option>").val(item.user_id).text(item.user_name));


		}
	});

	//$("#eventUsers").selectmenu("refresh", true);

}

buildSurveyUserList = function buildSurveyUserList()
{
	$("#surveyUsers").empty();
	var data = pcamon._userList();


	$.each(data, function(i, item) {
		{


			$("#surveyUsers").append($("<option>").val(item.user_id).text(item.user_name));


		}
	});

	//$("#surveyUsers").selectmenu("refresh", true);


}

buildDocumentUserList = function buildDocumentUserList()
{
	$("#documentUsers").empty();
	var data = pcamon._userList();


	$.each(data, function(i, item) {
		{


			$("#documentUsers").append($("<option>").val(item.user_id).text(item.user_name));


		}
	});

	//$("#surveyUsers").selectmenu("refresh", true);


}

// USER

buildUserDialog = function buildUserDialog(data)
{

    $("#surname").val(data[0].surname);
	$("#lastname").val(data[0].lastname);
	$("#birthday").val(data[0].birthday);
	$("#phone").val(data[0].phone);

}

// EVENTS


buildCalendar = function buildCalendar()
{

	var events = pcamon._eventList();
	var eventsInline = [];
	var t ={};
	for (var i = 0; i< events.length; i++)
	{
		t ={};
		t.date        =  events[i].timestamp + '000';
		t.type        =  events[i].type;
		t.title       =  events[i].title;
		t.description =  events[i].description;
		t.url         =  events[i].url;

		eventsInline.push(t);
	}
	$("#eventCalendarLocale").remove();
	$("#eventCalendarLocaleFrame").append('<div id="eventCalendarLocale" style="min-height:500px;" ></div>');

	// Build Calendar Page
	$("#eventCalendarLocale").eventCalendar({
		jsonData :  eventsInline,
		monthNames : ["Januar", "Februar", "M&auml;rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
		dayNames : ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
		dayNamesShort : ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
		txt_noEvents : "Keine Termine in dieser Periode",
		//jsonDateFormat : 'human',
		//dateFormat: 'D.MM.YYYY HH:m ',
		//dateFormat: 'dddd MM-D-YYYY',
		txt_SpecificEvents_prev : "",
		txt_SpecificEvents_after : "Termine:",
		txt_next : "fr&uuml;her",
		txt_prev : "sp&auml;ter",
		txt_NextEvents : "N&auml;chster Termin:",
		txt_GoToEventUrl : "Kommende Termine",
		eventsScrollable : false,
		showDescription : true,
		cacheJson : false,
		eventsLimit : 200
	});

	// Update Portal Page
	$("#portalCalendar").empty();
	$("#portalCalendar").html("<a class='list-group-item' href=''#'><i class='fa fa-calendar fa-2x'></i>&nbsp; Termine</a><table id='portalEventsTable'>");

	for (i = 0; i < events.length && i <= (config.numberPortalEvents || 4) - 1; i++) {
		$("#portalCalendar").append("<tr><td><h3><a href="+ events[i].url +">" + events[i].title + "</a></h3></td>" + "<td width='10px'></td>" + "<td><h3>" + events[i].date + "</h3></td></tr>");
	}
	$("#portalCalendar").append("</table>");

}


buildEventLists = function buildEventLists()
{

	buildEventDatesList();
	buildSurveyEventDatesList();
	buildCalendar();

}

buildEventDatesList = function buildEventDatesList()
{
	$("#eventDates").selectmenu();
    $("#eventDates").empty();

	var data = pcamon._eventList();

    for (var j = 0; j < data.length;j++)
    {


		var found = false;
		$("#surveydates option").each(function(i)
		{
			var asfd = $(this).val();
			var asfasdf = data[j].id;
	 		if ($(this).val() == data[j].id )
			{
				// Do nothing, already in list
				found = true;

		 	}

		});
		if (found == false)
           $("#eventDates").append($("<option>").val(data[j].id).text(data[j].date  + " (" + data[j].type + ")" ));


    }

    // Show message if no event was found without a survey
    if(!$("#eventDates").val())
	{
		$("#eventDates").append($("<option>").val(-1).text("Keine Termine gefunden" ));

	}
    $("#eventDates").selectmenu("refresh",true);

}

buildSurveyEventDatesList = function buildSurveyEventDatesList(data)
{



	//$("#eventDates").empty();

	if (data  != undefined) {
		$("#surveydates").empty();
		if (data.length === 0) {
			$("#surveydates").append($("<option>").val(null).text("Noch kein Fragebogen angelegt"));
			$("#surveydates").selectmenu("refresh");
		}

		for (var i = 0; i < data.length; i++) {

			//  $("#eventDates").append($("<option>").val( data[i].id).text(  data[i].date ));

			$("#surveydates").append($("<option>").val(data[i].id).text(data[i].date + " (" + data[i].type + ")"));

		}
		$("#surveydates").selectmenu("refresh");
	}
   // $("#surveydates").selectmenu("refresh", true);
   // $("#eventDates").selectmenu("refresh", true);
}


function getDocInfo(fileDisplayName,documentUsers)
{

	var defer = $.Deferred();

	$('<div>Do you want to continue?</div>').dialog({
		autoOpen: true,
		close: function () {
			$(this).dialog('destroy');
		},
		position: ['left', 'top'],
		title: 'Continue?',
		buttons: {
			"Yes": function() {
				defer.resolve("yes"); //on Yes click, end deferred state successfully (done)
				$( this ).dialog( "close" );
			},
			"No": function() {
				defer.resolve("no");
				$( this ).dialog( "close" );
			}
		}
	});

	//$.mobile.changePage('#setFileDisplayName', 'pop', true, true);
	  fileDisplayName = $("#fileDisplayName").val();
	  documentUsers = $("#documentUsers").val();
	return defer.promise();
}

// ANAMNESE LIST
buildAnamneseList = function buildAnamneseList(data)
{

	$("#anamneseid").val(data[0].id);
	$("#a1").val(data[0].a1);
	$("#a4").val(data[0].a4);
	$("#a2").val(data[0].a2);
	$("#a3").val(data[0].a3);

	if (data[0].a5 == "1")
		$("#a5").prop('checked', true).checkboxradio("refresh");
	else
		$("#a5").prop('checked', false).checkboxradio("refresh");

	if (data[0].a6 == "1")
		$("#a6").prop('checked', true).checkboxradio("refresh");
	else
		$("#a6").prop('checked', false).checkboxradio("refresh");

	$("#a7").val(data[0].a7);
	$("#a8").val(data[0].a8);
	$("#a9").val(data[0].a9);
	$("#a10").val(data[0].a10);
	$("#a11").val(data[0].a11);
	$("#a12").val(data[0].a12);
	$("#a13").val(data[0].a13);
	$("#a14").val(data[0].a14);
	$("#a15").val(data[0].a15);
	$("#a16").val(data[0].a16);
	$("#a17").val(data[0].a17);
	$("#a18").val(data[0].a18);
	$("#a20").val(data[0].a20);
	$("#a19").val(data[0].a19);
	$("#a21").val(data[0].a21);
	$("#a22").val(data[0].a22);
	$("#a23").val(data[0].a23);
	$("#a24").val(data[0].a24);
	$("#a25").val(data[0].a25);
	$("#a26").val(data[0].a26);
	$("#a27").val(data[0].a27);
	$("#a28").val(data[0].a28);
	$("#a29").val(data[0].a29);
	$("#a30").val(data[0].a30);
	$("#a31").val(data[0].a31);
	$("#a32").val(data[0].a32);
	$("#a33").val(data[0].a33);
	$("#a34").val(data[0].a34);
	$("#a35").val(data[0].a35);
	$("#a36").val(data[0].a36);
	$("#a37").val(data[0].a37);
	$("#a38").val(data[0].a38);
	$("#a39").val(data[0].a39);
	$("#a40").val(data[0].a40);
	$("#a41").val(data[0].a41);
	$("#a42").val(data[0].a42);
	$("#a43").val(data[0].a43);
	$("#a44").val(data[0].a44);
	$("#a45").val(data[0].a45);
	$("#a46").val(data[0].a46);
	$("#a47").val(data[0].a47);
	$("#a48").val(data[0].a48);
	$("#a49").val(data[0].a49);
	$("#a51").val(data[0].a51);
	$("#a50").val(data[0].a50);
	$("#a52").val(data[0].a52);
	$("#a53").val(data[0].a53);
	$("#a54").val(data[0].a54);
	$("#a55").val(data[0].a55);
	$("#a56").val(data[0].a56);
	$("#a57").val(data[0].a57);
	$("#a58").val(data[0].a58);
	$("#a59").val(data[0].a59);
	$("#a60").val(data[0].a60);
	$("#a61").val(data[0].a61);
	$("#a62").val(data[0].a62);
	$("#a63").val(data[0].a63);
	$("#a64").val(data[0].a64);
	$("#a65").val(data[0].a65);
	$("#a66").val(data[0].a66);
	$("#a67").val(data[0].a67);
	$("#a68").val(data[0].a68);
	$("#a69").val(data[0].a69);
	$("#a70").val(data[0].a70);
	$("#a71").val(data[0].a71);
	$("#a72").val(data[0].a72);
	$("#a73").val(data[0].a73);
	$("#a74").val(data[0].a74);
	$("#a76").val(data[0].a76);
	$("#a75").val(data[0].a75);
	$("#a77").val(data[0].a77);
	$("#a79").val(data[0].a79);
	$("#a78").val(data[0].a78);
	$("#a80").val(data[0].a80);
	$("#a81").val(data[0].a81);
	$("#a82").val(data[0].a82);
	$("#a83").val(data[0].a83);
	if (data[0].a84 == "1")
	   $("#a84").prop('checked', true).checkboxradio("refresh");
	else
		$("#a84").prop('checked', false).checkboxradio("refresh");

	if (data[0].a85 == "1")
		$("#a85").prop('checked', true).checkboxradio("refresh");
	else
		$("#a84").prop('checked', false).checkboxradio("refresh");




}

// Anker List
buildAnkerRecordList = function buildAnkerRecordList(ankerdata) {

	var ankerRecords = ankerdata["data"];


	if (ankerRecords.length > 0) {


		$("#ankerContent").empty();



		if (ankerRecords.length > 0) {

			for (i in ankerRecords) {


			  outputAnkerList(ankerRecords[i]["id"], ankerRecords[i]["question"], ankerRecords[i]["rating"], ankerRecords[i]["sortorder"]);

			}
			//$('#ankerContent').append(ankerList);
			// Refresh List
			$("#ankerContent").closest("div[data-role=page]").trigger("create");
		}


		// rebuild bestof List
		rebuildAnkerBestFitList(ankerdata);
		// Rebuild result table
        setAnkerResults(ankerdata);

	}
}


function rebuildAnkerBestFitList(ankerdata)
{
	var ankerBestFitRecord = ankerdata["bestfit"];
	var ankerRecords       = ankerdata["data"];

	// sort listdata by rating for bestFitList
	ankerRecords.sort(function(a, b){
		return b.rating-a.rating
	});
	var selected = "";
	// Set selected values
	var bestFits = JSON.parse(ankerBestFitRecord[0]["topratings"]);

	$('#ankerBestFit').empty();
	var ankerBestFit = '';
	for (i in ankerRecords) {

		if ($.inArray("bestFit"+ankerRecords[i]['sortorder'], bestFits) > -1 ) // minus 1 if value wa not found in array
			selected = "selected";
		else
			selected = "";

		ankerBestFit += "<option  " + selected + " value=\"bestFit"+ankerRecords[i]['sortorder']+"\">Frage "+ankerRecords[i]['sortorder']+" mit Wertung="+ankerRecords[i]['rating']+"</option>";
	}


	$('#ankerBestFit').append(ankerBestFit);


	$('#ankerBestFit').selectmenu("refresh");
}



function setAnkerResults(ankerdata)
{
	var ankerRecords       = ankerdata["data"];
	var ankerBestFitRecord = ankerdata["bestfit"];


	var bestFits = JSON.parse(ankerBestFitRecord[0]["topratings"]);

	// sort listdata by rating for bestFitList
	ankerRecords.sort(function(a, b){
		return a.sortorder - b.sortorder
	});


    var g1=0;
	var g2=0;
	var g3=0;
	var g4=0;
	var g5=0;
    var g6=0;
    var g7=0;
    var g8=0;
	if (bestFits != null)
	{
	for (i=0;i<bestFits.length;i++) {
//var y=bestFits[i].substr("bestFit".length);
//var t=parseInt(bestFits[i].substr("bestFit".length));
		switch (parseInt(bestFits[i].substr("bestFit".length)))
		{
			case 1:
			case 9:
			case 17:
			case 25:
			case 33:
			  g1+=4;
				break;

			case 2:
			case 10:
			case 18:
			case 26:
			case 34:
			  g2+=4;
				break;

			case 3:
			case 11:
			case 19:
			case 27:
			case 35:
			  g3+=4;
				break;

			case 4:
			case 12:
			case 20:
			case 28:
			case 36:
				g4+=4;
				break;
			case 5:
			case 13:
			case 21:
			case 29:
			case 37:
				g5+=4;
				break;

			case 6:
			case 14:
			case 22:
			case 30:
			case 38:
				g6+=4;
				break;

			case 7:
			case 15:
			case 23:
			case 31:
			case 39:
				g7+=4;
				break;
			case 8:
			case 16:
			case 24:
			case 32:
			case 40:
				g8+=4;
				break;


		}
	}}




 	$("#ankerTotal1").html(g1+parseInt($("#ankerCell1").html())+parseInt($("#ankerCell9").html())+parseInt($("#ankerCell17").html())+parseInt($("#ankerCell25").html())+parseInt($("#ankerCell33").html()) );
	$("#ankerTotal2").html(g2+parseInt($("#ankerCell2").html())+parseInt($("#ankerCell10").html())+parseInt($("#ankerCell18").html())+parseInt($("#ankerCell26").html())+parseInt($("#ankerCell34").html()) );
	$("#ankerTotal3").html(g3+parseInt($("#ankerCell3").html())+parseInt($("#ankerCell11").html())+parseInt($("#ankerCell19").html())+parseInt($("#ankerCell27").html())+parseInt($("#ankerCell35").html()) );
	$("#ankerTotal4").html(g4+parseInt($("#ankerCell4").html())+parseInt($("#ankerCell12").html())+parseInt($("#ankerCell20").html())+parseInt($("#ankerCell28").html())+parseInt($("#ankerCell36").html()) );
	$("#ankerTotal5").html(g5+parseInt($("#ankerCell5").html())+parseInt($("#ankerCell13").html())+parseInt($("#ankerCell21").html())+parseInt($("#ankerCell29").html())+parseInt($("#ankerCell37").html()) );
	$("#ankerTotal6").html(g6+parseInt($("#ankerCell6").html())+parseInt($("#ankerCell14").html())+parseInt($("#ankerCell22").html())+parseInt($("#ankerCell30").html())+parseInt($("#ankerCell38").html()) );
	$("#ankerTotal7").html(g7+parseInt($("#ankerCell7").html())+parseInt($("#ankerCell15").html())+parseInt($("#ankerCell23").html())+parseInt($("#ankerCell31").html())+parseInt($("#ankerCell39").html()) );
	$("#ankerTotal8").html(g8+parseInt($("#ankerCell8").html())+parseInt($("#ankerCell16").html())+parseInt($("#ankerCell24").html())+parseInt($("#ankerCell32").html())+parseInt($("#ankerCell40").html()) );






	$('.footable').footable();



}

function outputAnkerList(id, question, rating,sortorder) {
	var line="";
	var check = 'checked="checked"';
	var checked0 = '';
	var checked1 = '';
	var checked2 = '';
	var checked3 = '';
	var checked4 = '';
	var checked5 = '';

	if (rating == "0")
		var checked0 = check;
	if (rating == "1")
		var checked1 = check;
	if (rating == "2")
		var checked2 = check;
	if (rating == "3")
		var checked3 = check;
	if (rating == "4")
		var checked4 = check;
	if (rating == "5")
		var checked5 = check;
	var option0 = '<input class="ankerClick" type="radio" name="' + id + '" id="' + id + '_0" value="0" ' + checked0 + '/> <label for="' + id + '_0">0</label>';
	var option1 = '<input class="ankerClick" type="radio" name="' + id + '" id="' + id + '_1" value="1" ' + checked1 + '/> <label for="' + id + '_1">1</label>';
	var option2 = '<input class="ankerClick" type="radio" name="' + id + '" id="' + id + '_2" value="2" ' + checked2 + '/> <label for="' + id + '_2">2</label>';
	var option3 = '<input class="ankerClick" type="radio" name="' + id + '" id="' + id + '_3" value="3" ' + checked3 + '/> <label for="' + id + '_3">3</label>';
	var option4 = '<input class="ankerClick" type="radio" name="' + id + '" id="' + id + '_4" value="4" ' + checked4 + '/> <label for="' + id + '_4">4</label>';
	var option5 = '<input class="ankerClick" type="radio" name="' + id + '" id="' + id + '_5" value="5" ' + checked5 + '/> <label for="' + id + '_5">5</label>';

	$('#ankerContent').append('<div class="divider">' + '<h3><strong>Frage ' +sortorder+': </strong>' + question + '</h3>' + ' <div   class="ui-field-contain" data-role="fieldcontain"  >' + '     <fieldset  data-mini="true" data-role="controlgroup" data-type="horizontal"  > ' + option0 + option1 + option2 + option3 + option4 + option5 + '		    </fieldset>' + '		</div>' + '		</div>');


	$("input[name="+id+"]").bind("click",   function () {

		putAnkerData(id );

	});

	//return '<div class="divider">' + '<h3><strong>Frage ' +sortorder+': </strong>' + question + '</h3>' + ' <div   class="ui-field-contain" data-role="fieldcontain"  >' + '     <fieldset  data-mini="true" data-role="controlgroup" data-type="horizontal"  > ' + option0 + option1 + option2 + option3 + option4 + option5 + '		    </fieldset>' + '		</div>' + '		</div>';

}
