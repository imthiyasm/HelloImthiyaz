var myApp = angular.module('mosque', ['ngRoute', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'LocalStorageModule']);

myApp.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('mosqueApp')
    .setStorageType('localStorage')
	//.setStorageCookie(0, '<path>')
    .setNotify(true, true)
});

myApp.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/Login',{
		templateUrl : 'partials/login.html',
		controller : 'loginCtrl'
	})
    .when('/Register',{
		templateUrl : 'partials/signUp.html',
		controller : 'signUpCtrl'
	})
	.when('/HadeesDay',{
		templateUrl : 'partials/hadees-of-the-day.html',
		controller : 'hadeesDayCtrl'
	})
	.when('/BukariHadees',{
    		templateUrl : 'partials/hadees.html',
    		controller : 'hadeesCtrl',
    		resolve: {
                hadeesName: function ($route) {
                    $route.current.params.hadeesName = 'bukari';
                }
            }
    })
    .when('/MuslimHadees',{
        		templateUrl : 'partials/hadees.html',
        		controller : 'hadeesCtrl',
        		resolve: {
                    hadeesName: function ($route) {
                        $route.current.params.hadeesName = 'muslim';
                    }
                }
    })
	.when('/PrayerTiming',{
		templateUrl : 'partials/prayer-timing.html',
		controller : 'prayerTimingCtrl'
	})
    .otherwise({
        redirectTo : '/BukariHadees'
    });

	//check browser support
    /*if(window.history && window.history.pushState){
        $locationProvider.html5Mode(true); will cause an error $location in HTML5 mode requires a  tag to be present! Unless you set baseUrl tag after head tag like so: <head> <base href="/">

        // to know more about setting base URL visit: https://docs.angularjs.org/error/$location/nobase

        // if you don't wish to set base URL then use this
        $locationProvider.html5Mode({
             enabled: true,
             requireBase: false
        });
    } */
});