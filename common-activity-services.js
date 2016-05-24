/* common service data */
myApp.factory('commonService', function(){
   var onlineState = navigator.onLine;
    return {        
        getOnlineState : function(){
            return onlineState;
        }
    }
});