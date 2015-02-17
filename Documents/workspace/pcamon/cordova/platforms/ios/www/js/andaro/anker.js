function createAnker(eventId) {
    var found = 'N';
    var idx2;
    var idx3;
    var einkaufJson;
    var v_error = 'N';

    // Move new Item to incomplete list

    // Create JSON from List

    var postData = createJsonCreateAnker(eventId);

    // put stringified json into a variable for posting
    var postArray = {
        json : postData
    };



    // try to write to DB
    $.ajax({
        type : 'POST',
        //url : "php/putsurveydata.php",
        url : config.backendServer + config.serverDir + "php/redbeanphp/andaro/ankercreation_put.php",
        dataType : 'json',
        //

        async : false,
        // contentType : 'application/json',
        data : postArray,
        cache : false,

        success : function(data) {

            if (data.length > 0) {

                // alert ("synch success fnc, error: " + error);


                buildAnkerList(data);

                // localStorage.setItem('localData', data);

                //buildSubTargetLists();
            }

        },
        error : function(jqXHR, textStatus, errorThrown) {
            alert('AJAX call failed: ' + textStatus + '   ERROR: ' + errorThrown);
        }
    });

    return false;
}


function putAnkerData() {
    var found = 'N';
    var idx2;
    var idx3;

    var v_error = 'N';

    // Move new Item to incomplete list

    // Create JSON from List

    var postData = createJsonPutAnker();

    // put stringified json into a variable for posting
    var postArray = {
        json : postData
    };



    // try to write to DB
    $.ajax({
        type : 'POST',
        //url : "php/putsurveydata.php",
        url : config.backendServer + config.serverDir + "php/redbeanphp/andaro/anker_put.php",
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

                $("#ankerResultTable").html(tmpl("ankerResultTableTemplate",  result.data["data"]));
                buildAnkerRecordList(result.data);

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

var getAnkerData = function    getAnkerData( ) {

    var getAnkerJson = createJsonGetAnker();

    // put stringified json into a variable for posting
    var postArray = {
        json : getAnkerJson
    };

    $.ajax({
        type : 'POST',
        //url : "php/getsurveydata.php",
        url : config.backendServer + config.serverDir + "php/redbeanphp/andaro/anker_get.php",

        //dataType : 'json',
        // contentType : 'application/json',
        data : postArray,
        async : true,
        cache : false,
        success : function(data) {


            var result = checkData (data);

            if  (result.code === constants.OK)
            {

                $("#ankerResultTable").html(tmpl("ankerResultTableTemplate",  result.data["data"]));
                buildAnkerRecordList(result.data);

            }
            else{
                //showErrorPopup(result);
                showErrorPopup(result.usermessage);

                if (result.code === constants.NOT_LOGGED_IN)
                    window.location.href = config.loginServer + config.loginDir;


            }


        },
        error : function(jqXHR, textStatus, errorThrown) {
            showErrorPopup(errorThrown);


        }
    });

    return false;
}

function createJsonGetAnker()
{
    var json = {};
    json.metadata = [];


    json.metadata[0] =
    {

        "elements": 1,
        "object": "anker",
        "method": "get"
    };

    json.data = [];


    json.data[0] = {};

    return JSON.stringify(json);
}

function createJsonPutAnker() {
    var json = {};


    var listItems = $('#ankerContent').find("input:checked");

    json.metadata = [];

    json.metadata[0] = {

        elements : nvl(listItems.length, 0),

        object     : "anker",
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

    json.bestfit = $("#ankerBestFit").val();

    return JSON.stringify(json);

}
