(function(){
   
    var app = angular.module('app', []);
    
   var HelloWorldCon =  function ($scope){
        
        $scope.helloMessage = "Hello Angular JS";
    };
    
    app.controller("HelloWorldCon", HelloWorldCon);
    
})();