'use strict';
/**
 * Created by CH-YFY on 2015/9/9.
 */

var controllers=angular.module('app.controllers',[]);

controllers.controller('demoHelloController',['$scope',
    function($scope){
        $scope.hello='this is hello word from angular';
        var values = [
            {name: 'misko', gender: 'male'},
            {name: 'yuan', gender: 'male'}
        ];
        var log = [];
        angular.forEach(values, function(value, key) {
            console.log('this:'+this);
            console.log('###'+key+':'+value);
            this.push(key + ': ' + value);
        }, log);
        console.log('log:'+log);
        //expect(log).toEqual(['name: misko', 'gender: male']);
    }]);
