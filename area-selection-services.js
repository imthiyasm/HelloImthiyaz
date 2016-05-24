/* Service sharing area selection data for loginForm & signUp Controllers */
myApp.factory('areaSelection_Service', function(){
    //SignUp Area Selection
	var options = [
		{
			name	: 	'Select Your Area',
			value 	:	'Select Your Area'
		},
		{
			name	: 	'Kovur/Sikkarayapuram',
			value 	:	'Kovur/Sikkarayapuram'
		},
		{
			name	: 	'Mangadu',
			value 	:	'Mangadu'
		},
		{
			name	: 	'Kundrathur',
			value 	:	'Kundrathur'
		}
	];
    return {
        getAreaOptions : function(){
            return options;
        }
    }
});