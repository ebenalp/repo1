
function saveUserData() {



    var postData = createJsonPutUser();

    // put stringified json into a variable for posting
    var postArray = {
        json : postData
    };



    // try to write to DB
    $.ajax({
        type : 'POST',
        url : config.backendServer + config.serverDir + "php/redbeanphp/andaro/user_put.php", // "php/andarophpdb/parser/persist.php",
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
                pcamon.putUserData(result.data["data"]);
                $("#popupUser").popup();
                $("#popupUser").popup("open");
            }
            else{
                showErrorPopup(result);
                cb(result.data["data"]);
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

function getUserData(cb) {

    var eventJson = createJsonGetUser();


    // put stringified json into a variable for posting
    var postArray = {
        json : eventJson
    };

    $.ajax({
        type : 'POST',
        url : config.backendServer + config.serverDir + "php/redbeanphp/andaro/user_get.php",// "php/andarophpdb/parser/persist.php" , //"php/geteventdata.php",
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

function createJsonPutUser()
{

    var json = {};
    json.metadata = [];





    json.metadata[0] =
    {


        "object"     : "user",
        "method"     : "put"
    };

    json.data = [];


    json.data[0] = {
        "surname"  : $("#surname").val(),
        "lastname" : $("#lastname").val(),
        "phone"    : $("#phone").val(),
        "birthday" : $("#birthday").val(),
        "date" :     new Date()
    };


    json.filter = [];


    return JSON.stringify(json);

}

