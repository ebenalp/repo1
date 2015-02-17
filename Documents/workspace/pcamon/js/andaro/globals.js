pcamonGlobals = (function() {
    var isPhone = false;
    var deviceToken =  constants.TXT_UNKNOWN_DEVICETOKEN;


    function setIsPhone(val)
    {
        isPhone = val;
    }

    function setDeviceToken(val)
    {
        deviceToken = val;
    }
    return {
        setDeviceToken : setDeviceToken,
        setIsPhone  :setIsPhone,
        deviceToken :deviceToken,
        isPhone     : isPhone
    };
})();