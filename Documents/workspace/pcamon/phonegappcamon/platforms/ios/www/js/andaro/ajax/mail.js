function sendMail(cb) {
    var callback = cb;
    var mailJson = createMailJson();

    var postArray = {
        json : mailJson
    };

    $.ajax({
        type : 'POST',
        url : "php/redbeanphp/andaro/mail_put.php",
        dataType : 'json',
        // contentType : 'application/json',
        data : postArray,
        async : false,
        cache : false,
        success : function(data) {



            var result = checkData (data);

            if  (result.code === constants.OK)
            {
                var maillist ="";
                for (i=0;i<result.data["data"].length;i++)
                {
                    maillist += '<div data-role="collapsible">';
                    maillist +=  '<h3>'+timeConverter(result.data["data"][i].timestamp)+ " an " +result.data["data"][i].recepient + '</h3>';
                    maillist +=  '<p>'+result.data["data"][i].text+ '</p>';

                    maillist +=  '</div>';
                }
                $("#mailList").empty();
                $("#mailList").append(maillist);

                $("#mailList").collapsibleset( "refresh" );
                $("#mailText").val('');
                callback("Nachricht gesendet");
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
            callback("Nachricht kann nicht gesendet werden. " + x);

        }
    });

    return true;
}


function createMailJson()
{


        var json = {};
        json.metadata = [];
        json.data = [];



        var recepient     = $("#mailRecipient").val();
        var text          = $("#mailText").val();




        json.metadata[0] =
        {

            "object"     : "mail",
            "method"     : "put"
        };




        json.data[0] = {
            "recepient" : recepient,
            "text"      : text

        };





        return JSON.stringify(json);


}
