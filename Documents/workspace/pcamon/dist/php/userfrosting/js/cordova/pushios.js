function registerPushwooshIOS() {

    var pushNotification = window.plugins.pushNotification;

    //push notifications handler
    document.addEventListener('push-notification', function(event) {
        //event.notification is a JSON push notification payload
        var notification = event.notification;

        //we might want to display and alert with push notification title
        alert(notification.aps.alert);

        //sample code to view full push payload in the alert (test mode)
        //alert(JSON.stringify(notification));

        //reset badges on icon as user has accepted push notification
        pushNotification.setApplicationIconBadgeNumber(0);
    });

    //register for push notifications
    pushNotification.registerDevice({alert:true, badge:true, sound:true, pw_appid:"539E9-AB8AE", appname:"ch.andaro.apps.pcamon"},
        function(status) {
            //this is a push token
            var deviceToken = status['deviceToken'];
            console.warn('registerDevice: ' + deviceToken);
            localStorage.setItem("deviceToken", deviceToken);
            rungroup.globals.deviceToken = deviceToken;

            //we are ready to use the plugin methods
            onPushwooshiOSInitialized(deviceToken);
        },
        function(status) {
            console.warn('failed to register : ' + JSON.stringify(status));
            alert(JSON.stringify(['failed to register ', status]));
        }
    );

    //reset badges on application start
    pushNotification.setApplicationIconBadgeNumber(0);
}

// the token has been registered, we can use Pushwoosh plugin methods
function onPushwooshiOSInitialized(pushToken)
{
    var pushNotification = window.plugins.pushNotification;
    //retrieve the tags for the device
    pushNotification.getTags(function(tags) {
            console.warn('tags for the device: ' + JSON.stringify(tags));
        },
        function(error) {
            console.warn('get tags error: ' + JSON.stringify(error));
        }
    );

    //start geo tracking. PWTrackSignificantLocationChanges - Uses GPS in foreground, Cell Triangulation in background.
    pushNotification.startLocationTracking('PWTrackSignificantLocationChanges',
        function() {
            console.warn('Location Tracking Started');
        }
    );
}
