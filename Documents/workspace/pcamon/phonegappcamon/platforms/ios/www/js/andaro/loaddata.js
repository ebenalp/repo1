var pcamon = ( function ()
{
    "use strict";

    var _userList;
    var _eventList;
    var _userData;

    function userList ( refresh, callback  ) {
         // set refresh default
         refresh = refresh || true;

         if (refresh)
         // userfrosting returns an object array - doesn't need to be converted
            getUserList( function(data) {
                                          _userList=data;
                                           callback ( _userList )
            });
         else
             callback ( _userList ) ;

    }

    function eventList ( refresh, callback  ) {
        // set refresh default
        refresh = refresh || true;

        if (refresh)
            getEventData( function(dataArrEvents) {
                                                     _eventList=dataArrEvents.data["data"];
                                                      callback ( _eventList );
            });
        else
            callback ( _eventList ) ;

    }

    function putEventList ( eventList  ) {
        // set refresh default

        _eventList=eventList;



    }

    function userData ( refresh, callback  ) {
        // set refresh default
        refresh = refresh || true;

        if (refresh)
            getUserData( function(dataArrUsers) {
                _userData=dataArrUsers.data["data"];
                callback ( _userData );
            });
        else
            callback ( _userData ) ;

    }

    function putUserData ( userData  ) {
        // set refresh default

        _userData=userData;



    }



    function loaddata (refresh)
    {
        // USERS
        userList(  refresh    // read from DB
            , function(data){  buildUserLists(data);

            });
        // EVENTS
        eventList(  refresh    // read from DB
            , function(data){  buildEventLists(data) ;

            });
        // USER
        userData(  refresh    // read from DB
            , function(data){  buildUserDialog(data) ;

            });
    }


    // Public
    return {

        loaddata:      loaddata,
        putEventList : putEventList,
        putUserData  : putUserData,
        _userList : function (){ return _userList; },
        _eventList : function (){ return _eventList; }


    };

// Singleton,therefore self executor
})();