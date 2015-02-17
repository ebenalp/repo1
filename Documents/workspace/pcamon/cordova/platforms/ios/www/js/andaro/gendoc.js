/**
 * @author Christof Müller
 */

/*******************************************************************************
 * ** synchronize data. write data to local storage ** and if possible to
 * database
 ******************************************************************************/
function genSurveyDoc() {
	/*
	$.ajax({
		type : "POST",
		//url   : "php/tcpdf/doc/survey.php",
		url : "php/getsurveydata.php",
		async : false,
		cache : false,
		dataType : 'json',
	    //contentType : 'application/json',
		//data  : JSON.stringify(localStorage.getItem('localSurveyData')),
		data : "[{'contractid':'1'}]",
		//data  : localStorage.getItem('localSurveyData'),
		
		success : function(data) {
			console.log(data);
			return true;
		},
		complete : function() {
		},
		error : function(xhr, textStatus, errorThrown) {
			console.log('ajax loading error...'+errorThrown+textStatus);
			return false;
		}
	});
*/
window.location = "php/tcpdf/doc/survey.php";
	var getSurveyJson =  createJsonGetSurvey();
var getSurveyJson = JSON.stringify(localStorage.getItem('localSurveyData'));
	// put stringified json into a variable for posting
	var postArray = {
		json : getSurveyJson
	};
	$.ajax({
		type : 'POST',
		//url : "php/getsurveydata.php",
		url   : "php/tcpdf/doc/survey.php",
		//dataType : 'json',
		// contentType : 'application/json',
		//data : postArray,
		// async : false,
		cache : false,
		success : function(data) {
		 		

		},
		error : function(x, e) {
			// Take local data

			if (x.status == 0) {
				// alert('You are offline!!\n Please Check Your Network.');
				v_error = 'Y';
				localStorage.setItem('err', 'Y');
			} else if (x.status == 404) {
				alert('Requested URL not found.');
			} else if (x.status == 500) {
				alert('Internel Server Error.' + x.responseText);
			} else if (e == 'parsererror') {
				alert('Error.\nParsing JSON Request failed.');
			} else if (e == 'timeout') {
				alert('Request Time out.');
			} else {
				alert('Unknow Error.\n' + x.responseText);
			}

		}
	});

 
	//window.open("php/tcpdf/doc/survey.php"); 
}
