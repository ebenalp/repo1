/**
 * @author Christof Müller
 */

function getHash(s) {
	return s.split("").reduce(function(a, b) {
		a = ((a << 5) - a) + b.charCodeAt(0);
		return a & a
	}, 0);
}

function setDefaults() {
	localStorage.setItem('storage', 'File');
	if (localStorage.getItem('err') == "")
		localStorage.setItem('err', 'N');
	var sortCriteria = localStorage.getItem('sortCriteria');
	if (sortCriteria == null) {
		localStorage.setItem('sortCriteria', 'eintrag');
	}
	var sortOrder = localStorage.getItem('sortOrder');
	if (sortOrder == null) {
		localStorage.setItem('sortOrder', 'asc');
	}
	var sortOrderCreation = localStorage.getItem('sortOrderCreation');
	if (sortOrderCreation == null) {
		localStorage.setItem('sortOrderCreation', 'asc');
	}
}

function nvl(value1, value2) {
	if (value1 == null)
		return value2;
	return value1;
}

function delete_user(row) {
	row.closest('tr').remove();
	putRatingData();
}

function setCurrentEventId(id) {
 $("#currentEventId").val(id);
}

function getIntegerParameterByName(name) {
 
	var locurl = location.href;
	
    var match = RegExp(name+'=[0-9]*').exec(locurl) ;
    if (match != null)
    return match.toString().substring(name.length+1);
    else
    return null;
}



function esc_quot(text)
{
    return text.replace(/\"/g, "\\\"");
}

function unloadJS(scriptName) {
    var head = document.getElementsByTagName('head').item(0);
    var js = document.getElementById(scriptName);
    js.parentNode.removeChild(js);
}

function unloadAllJS() {
    var jsArray = new Array();
    jsArray = document.getElementsByTagName('script');
    for (i = 0; i < jsArray.length; i++){
        if (jsArray[i].id){
            unloadJS(jsArray[i].id)
        }else{
            jsArray[i].parentNode.removeChild(jsArray[i]);
        }
    }
}

function timeConverter(UNIX_timestamp){
	var a = new Date(UNIX_timestamp*1000);
	var months = ['Januar','Februar','Maerz','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];
	var year = a.getFullYear();
	var month = months[a.getMonth()];
	var date = a.getDate();
	var hour = a.getHours();
	var min = a.getMinutes();

	var time = date + '. ' + month + ' ' + year + '  ' + hour + ':' + min +'  ' ;
	return time;
}

$.stylesheets = (function () {
	var stylesheets,
		add,
		clear;

	add = function (cssfile) {
		$('head').append('<link href="' + cssfile + '" rel="stylesheet" />');
		return stylesheets;
	};

	clear = function () {
		$('head link[rel=stylesheet]').remove();
		return stylesheets;
	};

	return stylesheets = {
		add: add,
		clear: clear
	};
} ());

function dateFormatter(obby) {
	var date = obby.date;

	$("#eventDateSelected").val(this.callFormat('%d.%m.%Y', date));

}
function timeFormatter(obby) {
	var date = obby.date;

	$("#eventTimeSelected").val(this.callFormat('%k:%M', date));

}

function printStackTrace() {
	var trace = printStackTrace();

	return trace.join('\n\n');
}


function setResult(code,user) {
	var result         = {};

	result.code        = code;

	try {
		result.techmessage = 'Stacktrace tbd.'; //printStackTrace();
	} catch (e)
	{

		result.techmessage = "Error reading Stack: " + e;
	}
		result.usermessage = user;


    return result;
}

function showErrorPopup (result)
{
	$("#usermsg").empty();
	$("#usermsg").html( result );

	var err = $("#errorPopup").html();

	TINY.box.show({boxid:'error',html:err,width:300,height:300});


}
function checkData(jsond)
{
	// Invalid Json: -1
	// Not logged

	var result = {};





	try {

		if (typeof jsond === 'string')
		   var data = JSON.parse(jsond);
		else
		   var data = jsond;

		if (typeof data.status === "undefined") {
			result = setResult(constants.INVALID_RESPONSE,constants.INVALID_RESPONSE_CONTACT_ADMIN);

		}
		else {
			if (data.status === "NOLOGIN")
				result = setResult(constants.NOT_LOGGED_IN, constants.NOT_LOGGED_IN_MSG);
			else if (data.status != constants.OK)
			{
				result = setResult(data.status, data.message);
			}
			else
				result = setResult(constants.OK, '');

		}
        result.data = data;

	} catch (e)
	{
		result = setResult(constants.INVALID_JSON,constants.INVALID_RESPONSE_CONTACT_ADMIN);

	}

	  return result;
}