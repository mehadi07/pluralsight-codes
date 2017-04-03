'use strict';


eventsApp.controller('EventController',

    function EventController($scope) {
        $scope.event = {
            name: 'Angular Event App',
            date: '04/02/2017',
            time: '3.09 am',
            location: {
                address: 'Google Headquaters',
                city: 'Mountain View',
                Province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directive Masterclass',
                    creatorName: 'Bob Smith',
                    Duration: '1 hr',
                    level: 'advance',
                    upVoteCount: 0
           },
                {
                    name: 'Scope for fun and profit',
                    creatorName: 'Jhon Doe',
                    Duration: '45 mins',
                    level: 'advance',
                    upVoteCount: 0


           },
                {
                    name: 'well Behaved Controllers',
                    creatorName: 'Md Mehadi Hasan Mozumder',
                    Duration: '1 hr',
                    level: 'advance',
                    upVoteCount: 0


           }
       ]
        };
    
    $scope.upVoteSession = function (session){
        session.upVoteCount++;
    };
    
    $scope.downVoteSession = function(session){
        session.upVoteCount--;
    };
    
    
    });