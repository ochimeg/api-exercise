var myApp = angular.module('MyApp',['ngResource']);

// error handler
myApp.factory("$exceptionHandler", function() {
	return function (exception, cause) {
		alert(exception.message);
	}
})

// 
myApp.factory("resourceFac", function($resource) {
  return $resource("http://private-f63da-api32.apiary-mock.com/notes");
});

// controller
myApp.controller("MyController",function($scope, resourceFac) {
 	$scope.click = function () {
	 	resourceFac.query(function(data) {
	    	$scope.lists = data;
	  	});
	};
});
