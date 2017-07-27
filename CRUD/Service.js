//<reference path = "C:\Users\Richard Iyama\Documents\Visual Studio 2017\Projects\BluePrint\BluePrint\Scripts\angular.js" />

(function () {
    'use strict';

var EmployeeService = angular.module('EmployeeService', []);

EmployeeService.factory('EmpApi', function ($http) {

    var urlBase = "http://localhost:49431/api";
    var EmpApi = {};

    EmpApi.getEmployees = function () {

        return $http.get(urlBase + '/Employee');
    };

    return EmpApi;
}
    
);

})();