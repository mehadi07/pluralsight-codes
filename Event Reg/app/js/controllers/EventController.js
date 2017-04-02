'use strict';


eventsApp.controller('EventController',
                    
    function EventController($scope){
   $scope.event = {
       name: 'Angular Event App',
       date: '04/02/2017',
       time: '3.09 am',
       location: {
           address: 'Google Headquaters',
           city: 'Mountain View',
           Province: 'CA'
       },
       imageUrl: '/img/angularjs-logo.png'
   } 
});