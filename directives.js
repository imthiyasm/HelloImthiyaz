/* Only digits directive*/
myApp.directive('onlyDigits', function(){
  return {
    restrict : 'A',
    require : 'ngModel',
    link : function(scope, elem, attrs, signUpForm){
      function inputValue(val){
        if(val){
          var digits = val.replace(/[^0-9]/g,'');
          if(digits !== val){
            signUpForm.$setViewValue(digits);
            signUpForm.$render();
          }
          return parseInt(digits,10);
        }
        return undefined;
      }
      signUpForm.$parsers.push(inputValue);
    }
  }
});

/* only Alpha directive*/
myApp.directive('onlyAlpha', function(){
  return {
    restrict :  'A',
    require : 'ngModel',
    link : function(scope, elem, attrs, signUpForm){
      function inputValue(val){
        if(val){
          var str = val.replace(/[^a-zA-Z]/g, '');
          if(str != val){
            signUpForm.$setViewValue(str);
            signUpForm.$render();
          }
          return str;
        }
        return undefined;
      }
      signUpForm.$parsers.push(inputValue)
    }
  }
});

/* header directive */
myApp.directive('myheader', function(){
  return {
	restrict : 'E',
	templateUrl : 'partials/header.html'
  }
});