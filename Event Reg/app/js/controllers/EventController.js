'use strict';


eventsApp.controller('EventController',

    function EventController($scope, eventData, $log) {
        $scope.sortorder = 'name';
        $scope.snippet = '<span style="red">Demo Project</span>';
        $scope.boolValue = true;
        $scope.mystyle = {
            color: ''
        };
        $scope.buttonDisabled = true;
        $scope.myclass = "blue";

        eventData.getEvent()
            .success(function (event) {
                $scope.event = event;
            })
            .error(function (data, status, headers, config) {
                $log.warn(data, status, headers(), config);
            });

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };


    });