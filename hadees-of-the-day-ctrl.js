myApp.controller('hadeesDayCtrl',['$scope', '$filter', '$http', '$log', 'areaSelection_Service', 'commonService', 'localStorageService', function($scope, $filter, $http, $log, areaSelection_Service, commonService, localStorageService){
	$scope.$parent.headerView = true;
	$scope.currentDate = 0;
	$scope.getHadees = function(url){
	    $http.get(url)
        .success(function(data){
            $scope.currentDate = 0;
            $scope.said = data.hadeesDay[$scope.currentDate].said;
            $scope.hadees = data.hadeesDay[$scope.currentDate].hadees;
            $scope.introducer = data.hadeesDay[$scope.currentDate].introducer;
            $scope.book = data.hadeesDay[$scope.currentDate].book;
        })
        .error(function(err){
            alert("Error");
        })
	}
	if( (platform == 'Android') || (platform == 'iOS') || (platform == 'WinCE') || (platform == 'Win32NT') ){
	        if( networkStatus == 'onLine'){
                var url = 'https://api.myjson.com/bins/24aoq';
	        }else{
	            var url = './json/hadees-of-the-day.json';
            }
            $scope.currentDate = (current_Date-1);
            $scope.getHadees(url);
    }
 }]);