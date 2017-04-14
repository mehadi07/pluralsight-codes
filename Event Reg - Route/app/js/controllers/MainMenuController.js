'use strict';

eventsApp.controller('MainMenuController',
    function MainMenuController($scope, $location) {

        console.log('absUrl: ', $location.absUrl());
        console.log('Protocol: ', $location.protocol());
        console.log('Port: ', $location.port());
        console.log('Host: ', $location.host());
        console.log('Path: ', $location.path());
        console.log('Search: ', $location.search());
        console.log('Hash: ', $location.hash());
        console.log('Url: ', $location.url());

        $scope.createEvent = function () {

                //to remove history or replace ur 
               // $location.replace();
                $location.url('/newEvent');
            };
            $scope.events = function () {
                $location.url('/events');
            };

    });
