function auth(cb)
{

    var loginJson = createAuthJson();

    var postArray = {
        json : loginJson
    };
    alert(JSON.stringify(postArray));
    $.ajax({
        type : 'POST',
        url :  config.backendServer + config.serverDir + "php/redbeanphp/andaro/auth.php",
        //dataType : 'json',
        data : postArray,
        async : false,

        cache : false,

        success : function(dataJson) {

            var result = checkData (dataJson);

            if  (result.code === constants.OK)
            {
                $("#authPortalFiles").html(tmpl("_authPortalFiles", result.data));
                $("#authPutSurvey").html(tmpl("_authPutSurvey", result.data));
                $("#authPortalSettings").html(tmpl("_authPortalSettings", result.data ));
                cb( dataJson );

            }
            else{
                showErrorPopup(result);
                cb(dataJson);

            }



        },
        error : function(x, e, thrownError) {
            console.log({"error":thrownError});
            cb({"error":thrownError});

        }
    });



}

function getUserList(cb)
{
    $.ajax({
        type : 'POST',
        url :  config.backendServer + config.serverDir +  "php/userfrosting/api/load_users.php",
        dataType : 'json',
        async : false,

        cache : false,

        success : function(data) {
           // userfrosting returns an object array - doesn't need to be converted

            cb (data);

        },
        error : function(x, e, thrownError) {
            cb (data);
            alert(e.message);
            console.log(e.message);
        }
    });

}
function login( cb ) {





    $.ajax({
        type : 'POST',
        url :  config.backendServer + config.serverDir + "php/redbeanphp/andaro/login.php",
        //dataType : 'json',
        // contentType : 'application/json',
        //data: postArray,
        async : false,
        cache : false,
        success : function(data) {

            var result = checkData (data);

            if  (result.code === constants.OK)
            {
                $("#loggedInUser").html(result.data.user);
                cb(data);
            }
            else{
                console.log(constants.NOT_LOGGED_IN_MSG + " Umleitung zu " + config.loginServer + config.loginDir+ "login.php");

               // var test = config.loginServer + config.loginDir + "login.php";
                window.location.href = config.loginServer + config.loginDir  + "login.php";

            }






        },
        error : function(x, e) {
            // Take local data


            if (x.status == 0) {
                // alert('You are offline!!\n Please Check Your Network.');
                v_error = 'Y';

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
            showErrorPopup(x.statusText);
            window.location = config.loginServer + config.loginDir;

        }
    });


}

function logout() {



    $.ajax({
        type : 'POST',
        url :  config.backendServer + config.serverDir + "php/userfrosting/account/logout.php",
        //dataType : 'json',
        // contentType : 'application/json',

        async : false,
        cache : false,
        success : function(data) {

            var result = checkData (data);

            if  (!result.code === constants.OK)
            {
                window.location.href = config.loginServer + config.loginDir  + "login.php";
            }




        },
        error : function(x, e) {
            // Take local data


            if (x.status == 0) {
                // alert('You are offline!!\n Please Check Your Network.');
                v_error = 'Y';

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
            showErrorPopup(x.statusText);
            window.location.href = config.loginServer + config.loginDir  + "login.php";

        }
    });

    return true;
}



function createAuthJson(message)
{


    var json = {};
    json.metadata = [];
    json.data = [];








    json.metadata[0] =
    {

        "object"     : "login",
        "method"     : "put"
    };




    json.data[0] = {
        "config" : config,
        "devicetoken" : localStorage.getItem("deviceToken")


    };





    return JSON.stringify(json);


}
