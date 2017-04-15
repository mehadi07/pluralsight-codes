'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute', 'ngSanitize'])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.when('/newEvent', {
            templateUrl: 'templates/NewEvent.html',
            controller: 'EditEventController'
        });
        $routeProvider.when('/events', {
            templateUrl: 'templates/EventList.html',
            controller: 'EventListController'
        });
        $routeProvider.when('/event/:eventId', {
            templateUrl: 'templates/EventDetails.html',
            controller: 'EventController',
            /* resolve is used to wait for data from server 
                and updated EventController.js using 
                $scope.event = $route.current.locals.event; */


            resolve: {
                event: function ($route, eventData) {
                    return eventData.getEvent($route.current.pathParams.eventId).$promise;
                }
            }
        });

        $routeProvider.when('/sampleDirective', {
            templateUrl: 'templates/SampleDirective.html',
            controller: 'SampleDirectiveController'
        });
        $routeProvider.otherwise({
            redirectTo: '/events'
        });

        /* removes # from url
         added base tag on index.html which is a prefix and determine where to start.*/
        $locationProvider.html5Mode(true);
    }]);
