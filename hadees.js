myApp.controller('hadeesCtrl',['$scope', '$filter', '$http', '$log', '$routeParams', 'areaSelection_Service', 'commonService', 'localStorageService', function($scope, $filter, $http, $log, $routeParams, areaSelection_Service, commonService, localStorageService){
	$scope.$parent.headerView = true;
	$scope.hadeesListHolder = true;
	$scope.hadeesName = $routeParams.hadeesName;
	$scope.hadeesList = [];
	$scope.hadeesObj = {}
    $scope.hadeesContent = [];

	$scope.getHadees = function(url){
	    $http.get(url)
        .success(function(data){
            angular.forEach(data.hadees[$scope.hadeesName], function(key, value) {
                $scope.hadeesObj = key;
                angular.forEach(key, function(m, n) {
                    $scope.hadeesList.push(n);
                });
            });
        })
        .error(function(err){
            alert("Final Error");
        })
	}

	$scope.openHadees = function(index){
        $scope.hadeesListHolder = false;
        $scope.targetHadees = index.substring(index.lastIndexOf('_')+1);
        angular.forEach($scope.hadeesObj[$scope.targetHadees], function(key, value) {
            $scope.hadeesContent.push(key);
        });
	}
	if( (platform == 'Android') || (platform == 'iOS') || (platform == 'WinCE') || (platform == 'Win32NT') ){
	        if( networkStatus == 'onLine'){
	            switch($scope.hadeesName){
	                case 'bukari':
	                    var url = 'https://api.myjson.com/bins/ltba';
	                    break;
	                case 'muslim':
	                    var url = 'https://api.myjson.com/bins/ltba';
	                    break;
	            }
	        }else{
	            var url = './json/'+$scope.hadeesName+'-hadees.json';
            }
            $scope.getHadees(url);
    }
 }]);