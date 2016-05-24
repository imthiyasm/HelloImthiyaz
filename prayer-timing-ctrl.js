myApp.controller('prayerTimingCtrl',['$scope', '$filter', '$http', '$log', 'areaSelection_Service', 'commonService', 'localStorageService', function($scope, $filter, $http, $log, areaSelection_Service, commonService, localStorageService){
	$scope.$parent.headerView = true;
	$scope.prayer = {};
	$http.get('json/prayer-timing.json')
	.success(function(data){		
		$scope.prayer = data;		
	})
	.error(function(err){
		alert("Failure");
	})
}]);