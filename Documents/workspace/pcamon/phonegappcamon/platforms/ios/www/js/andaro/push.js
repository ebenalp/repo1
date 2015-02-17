function sendPush(message) {

    var mailJson = createPushJson(message);

    var postArray = {
        json : mailJson
    };

    $.ajax({
        type : 'POST',
        url : "php/redbeanphp/andaro/push.php",
        dataType : 'json',
        // contentType : 'application/json',
        data : postArray,
        async : false,
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
            callback("Nachricht kann nicht gesendet werden. " + x);

        }
    });

    return true;
}


function sendDeviceToken(token) {

    var mailJson = createPushJson(message);

    var postArray = {
        json : mailJson
    };

    $.ajax({
        type : 'POST',
        url : "php/redbeanphp/andaro/devicetoken.php",
        dataType : 'json',
        // contentType : 'application/json',
        data : postArray,
        async : false,
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
            callback("Nachricht kann nicht gesendet werden. " + x);

        }
    });

    return true;
}



function createPushJson(message)
{


    var json = {};
    json.metadata = [];
    json.data = [];








    json.metadata[0] =
    {

        "object"     : "push",
        "method"     : "put"
    };




    json.data[0] = {
        "msg" : message


    };





    return JSON.stringify(json);


}
