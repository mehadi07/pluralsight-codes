'use strict';


eventsApp.controller('EventController',

    function EventController($scope, eventData, $log, $anchorScroll,$route, $routeParams) {
        $scope.sortorder = 'name';
        $scope.snippet = '<span style="red">Demo Project</span>';
        $scope.boolValue = true;
        $scope.mystyle = {
            color: ''
        };
        $scope.buttonDisabled = true;
        $scope.myclass = "blue";

        $scope.event = $route.current.locals.event;

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
        $scope.scrollToSession = function () {
            $anchorScroll();
        }


    });
