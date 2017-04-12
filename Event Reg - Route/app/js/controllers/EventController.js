'use strict';


eventsApp.controller('EventController',

    function EventController($scope, eventData, $log, $anchorScroll) {
        $scope.sortorder = 'name';
        $scope.snippet = '<span style="red">Demo Project</span>';
        $scope.boolValue = true;
        $scope.mystyle = {
            color: ''
        };
        $scope.buttonDisabled = true;
        $scope.myclass = "blue";

        $scope.event = eventData.getEvent()
            .$promise
            .then(function (event) {
                $scope.event = event;
                console.log(event);
            })
            .catch(function (response) {
                    $console.log(response);
                }

            );

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
