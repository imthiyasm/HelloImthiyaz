/* Login Form Controller */
myApp.controller('loginCtrl',['$scope', '$filter', '$http', '$log', '$location', 'areaSelection_Service', 'commonService', 'localStorageService', function($scope, $filter, $http, $log, $location, areaSelection_Service, commonService, localStorageService){
	$scope.loginDetails = {
		'mobileNo' : '',
		'area' : ''
	};
	$scope.$parent.headerView = false;
	
	if(localStorageService.isSupported) {
		if( (localStorageService.get('uMobileNo') != '') && (localStorageService.get('uArea') != '') ){
			$scope.loginDetails.mobileNo = localStorageService.get('uMobileNo');
			$scope.count = null;
			angular.forEach(areaSelection_Service.getAreaOptions(), function(value, key){				
				if(value.name == localStorageService.get('uArea')){
					$scope.obj = {};
					$scope.obj = areaSelection_Service.getAreaOptions();					
					$scope.loginDetails.area = $scope.obj[key].name;
					return false;
				}
			});			
		}else{
			alert("local storage not supported");
		}
	}
	
	$scope.options = areaSelection_Service.getAreaOptions();    
	$scope.loginFields = {};
	$scope.loginSubmit = function(obj){
		$scope.loginFields = angular.copy(obj);
		if(commonService.getOnlineState){
			if( $scope.loginFields.area['name'] != 'Select Your Area' ){
				$http.post('./js/php/insert-select-data.php', {'userName':'', 'mobileNo':$scope.loginFields.mobileNo, 'area' : $scope.loginFields.area['name'], 'form':'login'})
				.success(function(data){
					if(data[0] == 'New User'){
						alert("Sorry, this Mobile Number is Not Registered. Please Register with us");
					}else{
						alert("Mobile number already exists");
						$location.path('/HadeesDay');
					}
				})
				.error(function(err){
					$log.error('Error= '+err);
				})
			}
		}else{			
			if(localStorageService.isSupported) {
				if( (localStorageService.get('uMobileNo') ==  $scope.loginFields.mobileNo) && (localStorageService.get('uArea') ==  $scope.loginFields.area['name']) ){
					$location.path('/HadeesDay');
				}else if(localStorageService.get('uMobileNo') !=  $scope.loginFields.mobileNo){
					alert("Please Enter this Mobile No:-"+localStorageService.get('uMobileNo'));
				}else if(localStorageService.get('uArea') !=  $scope.loginFields.area['name']){
					alert("Please Select this Area:-"+localStorageService.get('uArea'));
				}else if( (localStorageService.get('uMobileNo') == '') && (localStorageService.get('uArea') == '') ){
					alert("It's required internet connection for first time");
				}else{
				}
			}
		}
	}
}]);

/* signUp Form Controller */
myApp.controller('signUpCtrl',['$scope', '$filter', '$http', '$log', 'areaSelection_Service', 'commonService', 'localStorageService', function($scope, $filter, $http, $log, areaSelection_Service, commonService, localStorageService){	
	$scope.$parent.headerView = false;
	if(localStorageService.isSupported) {
		if( (localStorageService.get('uMobileNo') == null) && (localStorageService.get('uArea') == null) ){
			localStorageService.set('uMobileNo' , '');
			localStorageService.set('uArea' , '');
		}
	}
    $scope.options = areaSelection_Service.getAreaOptions();
	$scope.signUpFields = {};
	$scope.signUpSubmit = function(obj){
		if(commonService.getOnlineState){
			$scope.signUpFields = angular.copy(obj);
			if( $scope.signUpFields.area['name'] != 'Select Your Area' ){
				$http.post('./js/php/insert-select-data.php', {'userName':$scope.signUpFields.userName, 'mobileNo':$scope.signUpFields.mobileNo, 'area' : $scope.signUpFields.area['name'], 'form':'signUp'})
				.success(function(data){				
					if(data[0] == 'New User'){
						alert("Successfully account created");
						if(localStorageService.isSupported) {
							localStorageService.set('uMobileNo' , $scope.signUpFields.mobileNo);
							localStorageService.set('uArea' , $scope.signUpFields.area['name']);
						}
					}else{
						//alert("Mobile number already exists");					
					}
				})
				.error(function(err){
					$log.error('Error= '+err);
				})
			}
		}else{
			alert("To SignUp internet connection required");
		}
	}
}]);