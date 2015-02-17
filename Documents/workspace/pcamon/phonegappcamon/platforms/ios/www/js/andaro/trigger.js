/**
 * @author Christof Müller
 */

$(function () {

    /***************************************************************************
     * ** Document LOAD
     **************************************************************************/


    $(document).ready(function() {
        // are we running in native app or in a browser?
        window.isphone = false;
        localStorage.setItem("isPhone",false);
        localStorage.setItem("deviceToken",constants.TXT_UNKNOWN_DEVICETOKEN);

        if(document.URL.indexOf("http://") === -1
            && document.URL.indexOf("https://") === -1) {
            window.isphone = true;
            localStorage.setItem("isPhone",true);
        }

        if( window.isphone ) {

            console.log("Device Ready");

            document.addEventListener("deviceready", onDeviceReady, false);
            onDeviceReady();


        } else {
            console.log("Running Desktop");
            onDeviceReady();
        }
    });



    var v_error;


    $(window).load(function () {
        // When the page has loaded
        $("body").fadeIn(1000);
    });

    // FILTERABLE USER LIST ON PORTAL
    $.mobile.document
        // "filter-menu-menu" is the ID generated for the listview when it is created
        // by the custom selectmenu plugin. Upon creation of the listview widget we
        // want to prepend an input field to the list to be used for a filter.
        .on( "listviewcreate", "#filter-menu-menu", function( e ) {
            var input,
                listbox = $( "#filter-menu-listbox" ),
                form = listbox.jqmData( "filter-form" ),
                listview = $( e.target );
            // We store the generated form in a variable attached to the popup so we
            // avoid creating a second form/input field when the listview is
            // destroyed/rebuilt during a refresh.
            if ( !form ) {
                input = $( '<input data-type="search">\</input>' );
                form = $( "<form></form>" ).append( input );
                input.textinput();
                $( "#filter-menu-listbox" )
                    .prepend( form )
                    .jqmData( "filter-form", form );
            }
            // Instantiate a filterable widget on the newly created listview and
            // indicate that the generated input is to be used for the filtering.
            listview.filterable({ input: input });
        })
        // The custom select list may show up as either a popup or a dialog,
        // depending how much vertical room there is on the screen. If it shows up
        // as a dialog, then the form containing the filter input field must be
        // transferred to the dialog so that the user can continue to use it for
        // filtering list items.
        //
        // After the dialog is closed, the form containing the filter input is
        // transferred back into the popup.
        .on( "pagebeforeshow pagehide", "#filter-menu-dialog", function( e ) {
            var form = $( "#filter-menu-listbox" ).jqmData( "filter-form" ),
                placeInDialog = ( e.type === "pagebeforeshow" ),
                destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#filter-menu-listbox" );
            form
                .find( "input" )
                // Turn off the "inset" option when the filter input is inside a dialog
                // and turn it back on when it is placed back inside the popup, because
                // it looks better that way.
                .textinput( "option", "inset", !placeInDialog )
                .end()
                .prependTo( destination );
        });


    // <!-- Rating -->

    function onDeviceReady() {
        //alert ("PLatform: " + device.platform);



        config = [];

        var configfile = location.hostname === 'localhost' || location.hostname === '127.0.0.1' ? 'config/config_local.json' : 'http://www.andaro.ch/apps/pcamon/dist/config/config_remote.json';

        $.ajax({
            type: 'GET',
            url:    configfile,
            dataType: 'json',
            success: function (data) {
                config = data;

                // initialize corodova - push




                login(
                    function(data) {
                        if (data === undefined) {
                            window.location = config.loginServer + config.loginDir + "login.php";
                            return;
                        }
                        var result = checkData (data);

                        if  (result.code === constants.OK)
                        {
                            //app.initialize();
                            initPushwoosh();
                            alert(localStorage.getItem("isPhone"));
                            console.log("isPhone: " + localStorage.getItem("isPhone"));
                            console.log("deviceToken: " + localStorage.getItem("deviceToken"));
                            auth(function (data) {


                                var result = checkData (data);

                                if  (result.code === constants.OK)
                                {
                                    pcamon.loaddata(true);
                                    $('#fileupload2').fileupload();
                                    loadAudio();

                                }
                                else{

                                    window.location.href = config.loginServer + config.loginDir  + "login.php";
                                    return false;

                                }




                            })
                        }
                        else{
                            //showErrorPopup(result);
                            window.location.href = config.loginServer + config.loginDir  + "login.php";
                            return;

                        }






                    }
                )

            }
            ,
            error: function (err) {
                alert("Schwerer Fehler. Kann Konfiguration nicht lesen. " + JSON.stringify(err));
            },
            data: {},
            async: true
        });





        // TINY.box.show({html:$("#setFileDisplayName").html(),   width:300,height:300})

/*
        $.ajax({
            type: 'GET',
            url: configfile,
            dataType: 'json',
            async: false,
            success: function (data) {
                config = data;

                login(function(){

                    auth(function(dataArr){

                        if ( typeof dataArr.code != undefined )
                        {


                            if (dataArr.code !== constants.OK) {
                                showErrorPopup(dataArr);
                                window.location.href = config.loginServer + config.loginDir;

                            }
                            else {
                                pcamon.loaddata(true);

                                loadAudio();

                            }
                        } else
                        {
                            window.location.href = config.loginServer + config.loginDir;

                        }

                    })
                });
            }
            ,
            error: function (err) {
                alert("Schwerer Fehler. Kann Konfiguration nicht lesen.");
                document.getElementByName("body").style.visibility="hidden";
                throw new Error("Ausführung beendet.");
            }
        });

*/
    };


    ///////////////////////////////////////////////
    // Portal Page
    ///////////////////////////////////////////////

    // Open Calendar
    $("#portalCalendar").bind("click", function () {

        $.mobile.changePage("#calendar", {
            transition: "slideup"
        });

    });

    // Open Contact
    $("#portalVertrag").bind("click", function () {

        $.mobile.changePage("#vertrag", {
            transition: "slideup"
        });

    });

    // Open Audio
    $("#portalAudios").bind("click", function () {

        $.mobile.changePage("#audio", {
            transition: "slideup"
        });

    });

    // Open Survey
    $("#portalSurvey").bind("click", function () {

        $.mobile.changePage("#documents", {
            transition: "slideup"
        });

    });

    // Open Survey
    $("#portalDocuments").bind("click", function () {

        $.mobile.changePage("#documents", {
            transition: "slideup"
        });

    });

    // Open Settings
    $("#portalSettings").bind("click", function () {

        $.mobile.changePage("#settingsPage", {
            transition: "slideup"
        });

    });

    // Open Files
    $("#portalDocs").bind("click", function () {

        $.mobile.changePage("#files", {
            transition: "slideup"
        });

    });

    // Open Coach Files
    $("#authPortalFiles").bind("click", "div", function () {

        $.mobile.changePage("#filesCoach", {
            transition: "slideup"
        });

    });


    // LOGOUT
    $("#logout").bind("click", function () {
        logout();
        window.location.href = config.loginServer + config.loginDir;

    });

    // Home Button
    $(".portalButton").bind("click", function () {

        $.mobile.changePage("#portal", {
            transition: "slideup"
        });

    });

    // User Button
    $("#portaluser").bind("click", function () {

        $.mobile.changePage("#userdialog", {
            transition: "slideup"
        });

    });

    // Back Button
    $(".backButton").bind("click", function () {

        window.history.back()

    });

    $(document).bind('pageshow', function (event, data) {
        console.log("pageshow --> previous page: " + data.prevPage.attr('id'));

    });



    $(document).bind('pagehide', function (event, data) {
        console.log("pagehide --> next page: " + data.nextPage.attr('id'));

        $(".saveNewSubTargetDescription").bind("click", function () {

            $('.dummyClass').addClass("descButtonHide");

        });

        $('.subTargetDescription').keydown(function () {
            $('.dummyClass').removeClass("descButtonHide");
        });


        ///////////////////////////////////////////////////////
        // NEW SURVEY DIALOG
        ///////////////////////////////////////////////////////

        if (data.nextPage.attr('id') === 'newSurveyDialog') {


            getUserList(buildSurveyUserList);
            getEventData(buildEventDatesList);


        }


        ///////////////////////////////////////////////////////
        //  SURVEY PAGE
        ///////////////////////////////////////////////////////

        if (data.nextPage.attr('id') === 'survey') {
            $("#surveyContent").empty();

            getEventDataWithExistingSurvey( buildSurveyEventDatesList ); //getSurveyData();

            if ($("#surveydates").children(":selected").val() !== "") {
                getSurveyData();
            }

        }

        $( "#surveydates" ).change(function() {
            getSurveyData();
        });

        ///////////////////////////////////////////////////////
        // CALENDAR PAGE
        ///////////////////////////////////////////////////////

        if (data.nextPage.attr('id') === 'calendar') {

            buildCalendar();


        }

        // Anamnese
        if (data.nextPage.attr('id') === 'anamnese') {
            console.log("Open anamnese");
            getAnamneseData();


        }

        // Anker
        if (data.nextPage.attr('id') === 'anker') {
            console.log("Open anker");

            getAnkerData();



        }


        ///////////////////////////////////////////////////////
        // NEW EVENT DIALOG
        ///////////////////////////////////////////////////////

        // Show new Event dialog
        if (data.nextPage.attr('id') === 'newEventDialog') {

            var currentEventId = getIntegerParameterByName('id');

            //getUserList(buildEventUserList);
            // empty fields
            $("#eventId").val('');

            $("#eventTitle").val('');
            $("#eventDateSelected").val('');
            $("#eventTimeSelected").val('');
            $("#eventDescription").val('');
            $('#cbKarriereanker').prop('checked', false);
            $('#cbAnamnese').prop('checked', false);
            $('#cbSurvey').prop('checked', false);
            $('#cbGeneralInformation').prop('checked', false);
            $('#cbOthers').prop('checked', false);

            // Fetch data if its an update

            if (currentEventId != null) {

                getEventDataById(currentEventId);
            }


        }



    });



    ///////////////////////////////////////////////////////
    // NEW EVENT DIALOG
    ///////////////////////////////////////////////////////


    // Open New Event Dialog

    $("#openNewEventDialog").bind("click", function () {

        $( "#newEventDialog" ).popup();
        $( "#newEventDialog" ).popup( "open" );

    });


    // Save New Event

    $("#saveNewEvent").bind("click", function (event) {

        putEventData();
        sendPush(constants.TXT_EVENT_CREATED);

        $('#newEventDialog').dialog('close');

    });



    $("#saveuser").bind("click", function (event) {

        saveUserData();
    });

    // Delete Event

    $("#deleteNewEvent").bind("click", function (event) {

        deleteEventDataById();

        $('#newEventDialog').dialog('close');
    });

    // Cancel
    $("#cancelNewEvent").bind("click", function () {

        $('#newEventDialog').dialog('close');
    });

// ANKER
    $( "#ankerBestFit" ).bind("change", function() {
        putAnkerData();
    });

    //////////////////////////////////////////////////////////////////////////////
    // DIALOG Neuer Fragebogen
    //////////////////////////////////////////////////////////////////////////////


    $("#saveNewSurvey").bind("click", function (event) {

        if ($("#eventDates").val() > -1) {
            createSurvey($("#eventDates").val());  // pass event id
            $('#newSurveyDialog').dialog('close');
        }
        else {
            showErrorPopup("Bitte Termin auswählen");
        }


    });

    // Cancel
    $("#cancelNewSurvey").bind("click", function () {

        $('#newSurveyDialog').dialog('close');
    });

    // Print Survey
    $("#printSurvey").bind("click", function () {

        printSurvey($("#surveydates").val());
    });


    //////////////////////////////////////////////////////////////////////////////
    // PAGE Contact
    //////////////////////////////////////////////////////////////////////////////


    $("#sendMessage").bind("click", function () {

        sendMail(function (data) {
            $( "#popupMail" ).popup(   );
            $( "#popupMail" ).popup( "open" );
        });


    });


    //  FILE UPLOAD
    // Bezeichnung Dialog
    $("#saveFileDisplayName").bind("click", function () {

        $('#setFileDisplayName').dialog('close');
    });

    $("#closeFileDisplayName").bind("click", function () {



        $('#setFileDisplayName').dialog('close');


    });


    //////////////////////////////////////////////////////////////////////////////
    // PAGE Survey
    //////////////////////////////////////////////////////////////////////////////


    // Saving of survey in outputSurveyList - uielements.js 166

    /*

     $("input[name="+id+"]").bind("click",   function () {

     putSurveyData(id );


     });
     */


    //  Anamnese UPLOAD
    //
    $("#saveAnamnese").bind("click", function () {

        createAnamnese();
    });

    // Anamnese Freigabe
    $("#anamneseReleaseDate").bind("click", function () {


        var err = $("#releaseAnamnese").html();

        TINY.box.show({html:err,width:300,height:300});
    });

    $("div #releaseAnamnese").bind("click", "#releaseAnamneseYes", function () {

        $("#releaseDate").html("Freigegeben am " + timeConverter(Math.round(new Date()/1000)));

        var err = $("#savedPopup").html();

        TINY.box.show({html:err,width:300,height:300});

    });


    // PUSH NOTIFICATION
    var app = {
        // Application Constructor
        initialize: function( ) {

            if (localStorage.getItem("isPhone") === true)
              this.bindEvents();

        },
        // Bind Event Listeners
        //
        // Bind any events that are required on startup. Common events are:
        // 'load', 'deviceready', 'offline', and 'online'.
        bindEvents: function() {
            document.addEventListener('deviceready', this.onDeviceReady, false);

            var pushNotification = window.plugins.pushNotification;
            pushNotification.registerDevice(function(status) {

                    var deviceToken = status['deviceToken'];
if(localStorage.getItem("deviceToken") === constants.TXT_UNKNOWN_DEVICETOKEN)
{
    alert ("app - set local storage to " + deviceToken);
    sendDeviceToken(deviceToken);
    localStorage.setItem("deviceToken", deviceToken);
}

                    console.warn('registerDevice: ' + deviceToken);
                },
                function(status) {
                    console.warn('failed to register : ' + JSON.stringify(status));
                    navigator.notification.alert(JSON.stringify(['failed to register ', status]));
                });
        },
        // deviceready Event Handler
        //
        // The scope of 'this' is the event. In order to call the 'receivedEvent'
        // function, we must explicity call 'app.receivedEvent(...);'
        onDeviceReady: function() {
            app.receivedEvent('deviceready');

        },
        // Update DOM on a Received Event
        receivedEvent: function(id) {

            console.log('Received Event: ' + id);
        }
    };


});
function initPushwoosh() {
   // localStorage.setItem("deviceToken", constants.TXT_UNKNOWN_DEVICETOKEN);
    var pushNotification = window.plugins.pushNotification;

    //set push notification callback before we initialize the plugin
    document.addEventListener('push-notification', function(event) {
        //get the notification payload
        var notification = event.notification;

        //display alert to the user for example
        alert(notification.aps.alert);

        //clear the app badge
        pushNotification.setApplicationIconBadgeNumber(0);
    });


    //initialize the plugin
    pushNotification.onDeviceReady({pw_appid:"539E9-AB8AE"});

    //register for pushes
    pushNotification.registerDevice(function(status) {
            var deviceToken = status['deviceToken'];

            if(localStorage.getItem("deviceToken") === constants.TXT_UNKNOWN_DEVICETOKEN)
            {
                alert ("initPushwoosh set local storage to " + deviceToken);
                sendDeviceToken(deviceToken);
                localStorage.setItem("deviceToken", deviceToken);
            }
            console.warn('registerDevice: ' + deviceToken);
        },
        function(status) {
            console.warn('failed to register : ' + JSON.stringify(status));
            navigator.notification.alert(JSON.stringify(['failed to register ', status]));
        });

    pushNotification.setApplicationIconBadgeNumber(0);

    pushNotification.getTags(function(tags) {
            console.warn('tags for the device: ' + JSON.stringify(tags));
        },
        function(error) {
            console.warn('get tags error: ' + JSON.stringify(error));
        });

    pushNotification.getPushToken(function(token) {

        console.warn('push token device: ' + token);
    });

    pushNotification.getPushwooshHWID(function(token) {
        console.warn('Pushwoosh HWID: ' + token);
    });

    //start geo tracking.
    pushNotification.startLocationTracking(function() {
        console.warn('Location Tracking Started');
    });
}

