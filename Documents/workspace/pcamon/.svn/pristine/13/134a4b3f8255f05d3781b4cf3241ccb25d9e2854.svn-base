function getEventDataById(currentEventId) {

    var eventIdJson = createJsonGetEventById(currentEventId);

    // put stringified json into a variable for posting
    var postArray = {
        json : eventIdJson
    };

    $.ajax({
        type : 'POST',
        url : "php/redbeanphp/andaro/event_get.php",
        dataType : 'json',
        // contentType : 'application/json',
        data : postArray,
        async : false,
        cache : false,
        success : function(data) {

            var result = checkData (data);

            if  (result.code === constants.OK)
            {
                buildNewEventDialog(result.data["data"]);
            }
            else{
                showErrorPopup(result);
                cb(result.data);
            }



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
                alert('Internal Server Error.' + x.responseText);
            } else if (e == 'parsererror') {
                alert('Error.\nParsing JSON Request failed.');
            } else if (e == 'timeout') {
                alert('Request Time out.');
            } else {
                alert('Unknow Error.\n' + x.responseText);
            }

        }
    });

    return true;
}

function deleteEventDataById() {

    var eventIdJson = createJsonDeleteEventById();

    // put stringified json into a variable for posting
    var postArray = {
        json : eventIdJson
    };

    $.ajax({
        type : 'POST',
        url : "php/redbeanphp/andaro/event_del.php",
        dataType : 'json',
        // contentType : 'application/json',
        data : postArray,
        async : false,
        cache : false,
        success : function(data) {



            var result = checkData (data);

            if  (result.code === constants.OK)
            {

                pcamon.putEventList(result.data["data"]);
                buildCalendar();
                $('#newEventDialog').dialog('close');
            }
            else{
                showErrorPopup(result);
                cb(result.data["data"]);
            }



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

    return true;
}

function putEventData() {
    var found = 'N';
    var outData = '';
    var idx2;
    var idx3;
    var einkaufJson;
    var v_error = 'N';

    // Move new Item to incomplete list

    // Create JSON from List

    var postData = createJsonPutEvent();

    // put stringified json into a variable for posting
    var postArray = {
        json : postData
    };



    // try to write to DB
    $.ajax({
        type : 'POST',
        url : config.backendServer + config.serverDir + "php/redbeanphp/andaro/event_put.php", // "php/andarophpdb/parser/persist.php",
        //dataType : 'json',
        //

        // async : false,
        // contentType : 'application/json',
        data : postArray,
        cache : false,

        success : function(data) {

            var result = checkData (data);

            if  (result.code === constants.OK)
            {
                pcamon.putEventList(result.data["data"]);
                buildCalendar();


                $('#newEventDialog').dialog('close');
            }
            else{
                showErrorPopup(result.usermessage);

            }

            // alert ("synch success fnc, error: " + error);







        },
        error : function(x, e, thrownError) {
            v_error = 'Y';
            localStorage.setItem('err', 'Y');
            if (x.status == 0) {
                // alert('You are offline!!\n Please Check Your Network.');
                // Offline,set error and take local data
                v_error = 'Y';
                localStorage.setItem('err', 'Y');
            } else if (x.status == 404) {
                // alert('Requested URL not found.');
                v_error = 'Y';
                localStorage.setItem('err', 'Y');
            } else if (x.status == 500) {
                alert('Internal Server Error.' + x.responseText);
            } else if (e == 'parsererror') {
                alert('Error.\nParsing JSON Request failed.');
            } else if (e == 'timeout') {
                alert('Request Time out.');
            } else {
                alert('Unknow Error.\n' + x.responseText);
            }
            // getData();
            // buildLists();

        }
    });

    return true;
}

function getEventData(cb) {

    var eventJson = createJsonGetEvent();


    // put stringified json into a variable for posting
    var postArray = {
        json : eventJson
    };

    $.ajax({
        type : 'POST',
        url : config.backendServer + config.serverDir + "php/redbeanphp/andaro/events_get.php",// "php/andarophpdb/parser/persist.php" , //"php/geteventdata.php",
        //dataType : 'json',
        //contentType : 'application/json',
        data : postArray,
        async : true,
        cache : false,
        success : function(data) {

            var result = checkData (data);

            if  (result.code === constants.OK)
            {
                cb(result);
            }
            else{
                showErrorPopup(result);
                cb(result);
            }






        },
        error : function(x, e) {
            // Take local data

            if (x.status == 0) {
                // alert('You are offline!!\n Please Check Your Network.');
                v_error = 'Y';
                localStorage.setItem('err', 'Y');
                alert('Unknow Error.\n' + x.responseText);
            } else if (x.status == 404) {
                alert('Requested URL not found.');
            } else if (x.status == 500) {
                alert('Internal Server Error.' + x.responseText);

            } else if (e == 'parsererror') {
                alert('Error.\nParsing JSON Request failed.');
            } else if (e == 'timeout') {
                alert('Request Time out.');
            } else {
                alert('Unknow Error.\n' + x.responseText);
            }

        }
    });



}

function getEventDataWithExistingSurvey(cb) {

    var eventJson = createJsonGetEventWithExistingSurvey();


    // put stringified json into a variable for posting
    var postArray = {
        json : eventJson
    };

    $.ajax({
        type : 'POST',
        url : config.backendServer + config.serverDir +  "php/redbeanphp/andaro/eventswithsurvey_get.php" , //"php/geteventdata.php",
        //dataType : 'json',
        //contentType : 'application/json',
        data : postArray,
        async : false,
        cache : false,
        success : function(data) {


            var result = checkData (data);

            if  (result.code === constants.OK)
            {
                cb(result.data["data"]);
            }
            else{
                showErrorPopup(result);

            }




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
                alert('Internal Server Error.' + x.responseText);
            } else if (e == 'parsererror') {
                alert('Error.\nParsing JSON Request failed.');
            } else if (e == 'timeout') {
                alert('Request Time out.');
            } else {
                alert('Unknow Error.\n' + x.responseText);
            }

        }
    });

    return true;

}



function createJsonPutEvent()
{

    var json = {};
    json.metadata = [];
    var contractid =  localStorage.getItem('contractId');

    var username = localStorage.getItem('username');

    var title       = $("#eventTitle").val();
    var description = $("#eventDescription").val();
    var url         = '#newEventDialog?id=';//$("#eventUrl").val()+$("#eventId").val();
    var eventid     = $("#eventId").val();
    var date        = $("#eventDateSelected").val() ;
    var time        = $("#eventTimeSelected").val() ;
    var eventtype    = $("#eventType").val();



    json.metadata[0] =
    {
        "username"   : localStorage.getItem('username'),
        "elements"   : 1,
        "object"     : "event",
        "method"     : "put"
    };

    json.data = [];


    json.data[0] = {
        "eventid" : eventid,
        "elements" : 1,
        "title" : title,
        "description" : description,
        "date" : date,
        "time" : time,
        "datetime" : date + " " + time,
        "url" : url,
        "survey" : $("#cbSurvey").is( ":checked" ),
        "karriereanker": $("#cbKarriereanker").is( ":checked" ),
        "anamnese": $("#cbAnamnese").is( ":checked" ),
        "generalinformation": $("#cbGeneralInformation").is( ":checked" ),
        "others": $("#cbOthers").is( ":checked" ),
        "eventtype" : eventtype,
        "error" : ""
    };


    json.filter = [];


    return JSON.stringify(json);

}






function createJsonDeleteEventById() {


    var json = {};




    json.metadata = [];

    json.metadata[0] = {
        object     : "event",
        method     : "del",
        eventid    : $("#eventId").val(),
        error : null
    };



    return JSON.stringify(json);


}

function createJsonGetEventById(currentEventId) {

    var json = {};




    json.metadata = [];

    json.metadata[0] = {
        object     : "event",
        method     : "get",
        eventid    : currentEventId,
        error : null
    };



    return JSON.stringify(json);

}

function createEventsJson(itemId) {
    var myarray = [];

    var info = {
        "id" : itemId
    };
    myarray.push(info);
    return JSON.stringify(myarray);

}

function createJsonGetEvent(itemId) {
    var json = {};

    var username   = localStorage.getItem('username');
    var contractid = localStorage.getItem('contractId');


    json.metadata = [];

    json.metadata[0] = {

        object     : "event",
        method     : "get",
        error : null
    };

    json.data    = [];
    json.filter = [];

    return JSON.stringify(json);

}
