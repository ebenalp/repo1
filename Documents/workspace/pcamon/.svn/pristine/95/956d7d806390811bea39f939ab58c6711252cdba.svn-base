var createAnamnese = function createAnamnese() {
    var found = 'N';
    var idx2;
    var idx3;
    var einkaufJson;
    var v_error = 'N';

    // Move new Item to incomplete list

    // Create JSON from List

    var postData = createJsonPutAnamnese();

    // put stringified json into a variable for posting
    var postArray = {
        json : postData
    };



    // try to write to DB
    $.ajax({
        type : 'POST',

        url : config.backendServer + config.serverDir + "php/redbeanphp/andaro/anamnese_put.php",
        dataType : 'json',


        async : true,

        data : postArray,
        cache : false,

        success : function(data) {


            var result = checkData (data);

            if  (result.code === constants.OK)
            {



                var err = $("#savedPopup").html();

                TINY.box.show({html:err,width:300,height:300});
               // buildAnamneseList(result.data["data"]);
                //cb();
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



var getAnamneseData = function    getAnamneseData( ) {

   var getAnamneseJson = createJsonGetAnamnese();

    // put stringified json into a variable for posting
    var postArray = {
        json : getAnamneseJson
    };

    $.ajax({
        type : 'POST',
        //url : "php/getsurveydata.php",
        url : config.backendServer + config.serverDir + "php/redbeanphp/andaro/anamnese_get.php",

        //dataType : 'json',
        // contentType : 'application/json',
        data : postArray,
        async : true,
        cache : false,
        success : function(data) {

            var result = checkData (data);

            if  (result.code === constants.OK)
            {



                buildAnamneseList(result.data["data"]);
                //cb();
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

function createJsonPutAnamnese() {
    var json = {};
    json.metadata = [];


    json.metadata[0] =
    {

        "elements": 1,
        "object": "anamnese",
        "method": "put"
    };

    json.data = [];


    json.data[0] = {
        "id": $("#anamneseid").val(),
        "a1": $("#a1").val(),
        "a2": $("#a2").val(),
        "a1": $("#a1").val(),
        "a4": $("#a4").val(),
        "a3": $("#a3").val(),
        "a5": $("#a5").is( ":checked" ),
        "a6": $("#a6").is( ":checked" ),
        "a7": $("#a7").val(),
        "a8": $("#a8").val(),
        "a9": $("#a9").val(),
        "a10": $("#a10").val(),
        "a11": $("#a11").val(),
        "a12": $("#a12").val(),
        "a13": $("#a13").val(),
        "a14": $("#a14").val(),
        "a15": $("#a15").val(),
        "a16": $("#a16").val(),
        "a17": $("#a17").val(),
        "a18": $("#a18").val(),
        "a19": $("#a19").val(),
        "a20": $("#a20").val(),
        "a21": $("#a21").val(),
        "a22": $("#a22").val(),
        "a23": $("#a23").val(),
        "a24": $("#a24").val(),
        "a25": $("#a25").val(),
        "a26": $("#a26").val(),
        "a27": $("#a27").val(),
        "a28": $("#a28").val(),
        "a29": $("#a29").val(),
        "a30": $("#a30").val(),
        "a31": $("#a31").val(),
        "a32": $("#a32").val(),
        "a34": $("#a34").val(),
        "a33": $("#a33").val(),
        "a35": $("#a35").val(),
        "a36": $("#a36").val(),
        "a37": $("#a37").val(),
        "a38": $("#a38").val(),
        "a39": $("#a39").val(),
        "a40": $("#a40").val(),
        "a41": $("#a41").val(),
        "a42": $("#a42").val(),
        "a43": $("#a43").val(),
        "a44": $("#a44").val(),
        "a45": $("#a45").val(),
        "a46": $("#a46").val(),
        "a47": $("#a47").val(),
        "a48": $("#a48").val(),
        "a49": $("#a49").val(),
        "a50": $("#a50").val(),
        "a51": $("#a51").val(),
        "a52": $("#a52").val(),
        "a53": $("#a53").val(),
        "a54": $("#a54").val(),
        "a55": $("#a55").val(),
        "a56": $("#a56").val(),
        "a57": $("#a57").val(),
        "a58": $("#a58").val(),
        "a59": $("#a59").val(),
        "a60": $("#a60").val(),
        "a61": $("#a61").val(),
        "a62": $("#a62").val(),
        "a63": $("#a63").val(),
        "a64": $("#a64").val(),
        "a65": $("#a65").val(),
        "a66": $("#a66").val(),
        "a67": $("#a67").val(),
        "a68": $("#a68").val(),
        "a69": $("#a69").val(),
        "a70": $("#a70").val(),
        "a71": $("#a71").val(),
        "a72": $("#a72").val(),
        "a74": $("#a74").val(),
        "a73": $("#a73").val(),
        "a75": $("#a75").val(),
        "a76": $("#a76").val(),
        "a77": $("#a77").val(),
        "a78": $("#a78").val(),
        "a79": $("#a79").val(),
        "a80": $("#a80").val(),
        "a81": $("#a81").val(),
        "a82": $("#a82").val(),
        "a83": $("#a83").val(),
        "a84": $("#a84").is( ":checked" ),
        "a85": $("#a85").is( ":checked" )
    }
    return JSON.stringify(json);

}

function createJsonGetAnamnese()
{
    var json = {};
    json.metadata = [];


    json.metadata[0] =
    {

        "elements": 1,
        "object": "anamnese",
        "method": "get"
    };

    json.data = [];


    json.data[0] = {};
    return JSON.stringify(json);
}