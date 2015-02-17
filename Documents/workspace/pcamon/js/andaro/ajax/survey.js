function createSurvey(eventId) {
    var found = 'N';
    var idx2;
    var idx3;
    var einkaufJson;
    var v_error = 'N';

    // Move new Item to incomplete list

    // Create JSON from List

    var postData = createJsonCreateSurvey(eventId);

    // put stringified json into a variable for posting
    var postArray = {
        json : postData
    };



    // try to write to DB
    $.ajax({
        type : 'POST',
        //url : "php/putsurveydata.php",
        url : config.backendServer + config.serverDir + "php/redbeanphp/andaro/surveycreation_put.php",
        dataType : 'json',
        //

        async : false,
        // contentType : 'application/json',
        data : postArray,
        cache : false,

        success : function(data) {



            var result = checkData (data);

            if  (result.code === constants.OK)
            {
                buildSurveyList(result.data["data"]);
            }
            else{
                showErrorPopup(result);

            }





        },
        error : function(jqXHR, textStatus, errorThrown) {
            alert('AJAX call failed: ' + textStatus + '   ERROR: ' + errorThrown);
        }
    });

    return false;
}


function putSurveyData(eventId) {
    var found = 'N';
    var idx2;
    var idx3;
    var einkaufJson;
    var v_error = 'N';

    // Move new Item to incomplete list

    // Create JSON from List

    var postData = createJsonPutSurvey(eventId);

    // put stringified json into a variable for posting
    var postArray = {
        json : postData
    };



    // try to write to DB
    $.ajax({
        type : 'POST',
        //url : "php/putsurveydata.php",
        url : config.backendServer + config.serverDir + "php/redbeanphp/andaro/survey_put.php",
        dataType : 'json',
        //

        async : true,
        // contentType : 'application/json',
        data : postArray,
        cache : false,

        success : function(data) {

            var result = checkData (data);

            if  (result.code === constants.OK)
            {

            }
            else{
                showErrorPopup(result);

            }


        },
        error : function(jqXHR, textStatus, errorThrown) {
            showErrorPopup(errorThrown);

        }
    });

    return true;
}

function printSurvey(eventId) {



    // Create JSON from List

    var postData = createJsonPrintSurvey(eventId);

    // put stringified json into a variable for posting

    var postArray = {
        json : postData
    };


    // try to write to DB
    $.ajax({
        type : 'POST',
        //url : "php/putsurveydata.php",
        url : config.backendServer + config.serverDir + "php/tcpdf/doc/survey.php",

        //

        async : true,
        // contentType : 'application/json',
        data : postArray,
        cache : false,

        success : function(data) {
           // var datauri = 'data:application/pdf;base64,' + base64.encodeBase64(data);
            window.open("data:application/pdf," + escape(data));
            //var win = window.open("", "Your PDF", "width=1024,height=768,resizable=yes,scrollbars=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no");
            //win.document.location.href = datauri;
            //window.open("data:application/pdf;base64,"+datauri );






        },
        error : function(jqXHR, textStatus, errorThrown) {
            showErrorPopup(errorThrown);

        }
    });

    return true;
}

var getSurveyData = function    getSurveyData( ) {

    var getSurveyJson = createJsonGetSurvey();

    // put stringified json into a variable for posting
    var postArray = {
        json : getSurveyJson
    };

    $.ajax({
        type : 'POST',
        //url : "php/getsurveydata.php",
        url : config.backendServer + config.serverDir + "php/redbeanphp/andaro/survey_get.php",

        //dataType : 'json',
        // contentType : 'application/json',
        data : postArray,
        async : true,
        cache : false,
        success : function(data) {


            var result = checkData (data);

            if  (result.code === constants.OK)
            {

                buildSurveyList(result.data["data"]);
            }
            else{
                showErrorPopup(result);
                cb(result.data["data"]);
            }

            //}

        },
        error : function(jqXHR, textStatus, errorThrown) {
            showErrorPopup(errorThrown);

        }
    });

    return false;
}



function createJsonPrintSurvey(eventId) {
    var json = {};





    json.metadata = [];

    json.metadata[0] = {

        elements : 1,

        object     : "survey",
        method     : "print"
    };

    json.data = [];
    json.data[0] = {
        "eventid" : eventId

    };

    json.filter = [];


    return JSON.stringify(json);

}



function createJsonGetSurvey() {

    var json = {};

    var username   = localStorage.getItem('username');
    var contractid = localStorage.getItem('contractId');


    json.metadata = [];

    json.metadata[0] = {
        username   : localStorage.getItem('username'),
        contractid : localStorage.getItem('contractId'),
        eventid    : $("#surveydates").val(),
        object     : "survey",
        method     : "get",
        error : null
    };

    json.data    = [];
    json.filter = [];


    json.filter[0] = {
        "attribute"  : "contractid",
        "value"      : localStorage.getItem('contractId')

    };

    json.filter[1] = {
        "attribute"  : "eventid",
        "value"      :  $("#surveydates").val() //eventId //value of select list is the event id

    };


    return JSON.stringify(json);

}



function createJsonGetEventWithExistingSurvey(itemId) {
    var json = {};

    var username   = localStorage.getItem('username');
    var contractid = localStorage.getItem('contractId');


    json.metadata = [];

    json.metadata[0] = {
        username   : localStorage.getItem('username'),
        contractid : localStorage.getItem('contractId'),
        object     : "eventsurvey",
        method     : "get",
        eventid    :  $("#surveydates").val(),
        error : null
    };

    json.data    = [];
    json.filter = [];


    json.filter[0] = {
        "attribute"  : "contractid",
        "value"      : localStorage.getItem('contractId')

    };



    return JSON.stringify(json);

}

function createJsonCreateSurvey(eventId) {
    var json = {};





    json.metadata = [];

    json.metadata[0] = {

        elements : 1,

        object     : "survey",
        method     : "create"
    };

    json.data = [];
    json.data[0] = {
        "eventid" : eventId

    };

    json.filter = [];


    return JSON.stringify(json);

}

function createJsonPutSurvey() {
    var json = {};


    var listItems = $('#surveyContent').find("input:checked");

    json.metadata = [];

    json.metadata[0] = {

        elements : nvl(listItems.length, 0),

        eventId:      $("#surveydates").val(),
        object     : "survey",
        method     : "put"
    };

    json.data = [];

    // Incomplete List
    listItems.each(function(idx, li) {

        json.data[idx] = {
            id : $(li).attr("name"),
            "rating" : $(li).val()
        };

    });

    return JSON.stringify(json);

}

function createJsonPutSurvey_SAVE() {
    var myarray = [];
    var eintraege = [];
    var myJSON = "";



    var listItems = $('#surveyContent').find("input:checked");

    var info = {

        "elements" : nvl(listItems.length, 0),

        "error" : ""
    };

    myarray.push(info);

    // Incomplete List
    listItems.each(function(idx, li) {
        var $asdf = $(li);
        var item = {

            "id" : $(li).attr("name"),
            "rating" : $(li).val()
        };

        eintraege.push(item);

    });

    myarray.push(eintraege);
    return JSON.stringify(myarray);

}
