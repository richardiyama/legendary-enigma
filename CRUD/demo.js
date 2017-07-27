
//<reference path = "C:\Users\Richard Iyama\Documents\Visual Studio 2017\Projects\BluePrint\BluePrint\Scripts\angular.js" />

//<reference path = "C: \Users\Richard Iyama\Documents\Visual Studio 2017\Projects\BluePrint\BluePrint\Scripts\angular - route.js" />



var myApp = angular.module("myApp", ['ngRoute']);
myApp.config(['$routeProvider', "$locationProvider",
    function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider.
            when('/Add', {
                templateUrl: 'Views/add.html',
                controller: 'AddController'
            }).
            when('/Edit/:id', {
            templateUrl: 'Views/edit.html',
            controller: 'EditController'
            }).
             when('/Delete/:id', {
             templateUrl: 'Views/delete.html',
             controller: 'DeleteController'
            }).
             when('/Home', {
             templateUrl: 'Views/home.html',
             controller: 'HomeController'
            }).
            otherwise({               
            redirectTo: '/Home'
           });


        
    }]);

myApp.controller("AddController", ['$scope', '$http','$location', function ($scope,$http,$location) {

    $scope.addEmp = function () {
        var data = {
            Name: $scope.name,
            Salary: $scope.salary,
            Age: $scope.age
        }

        $http.post('http://localhost:49431/api/Employee', data).then(function (response) {

            console.log(response.data);
        })

        $location.path('/Home');
    }


}]);

myApp.controller("EditController", ['$scope', '$http', '$routeParams','$location', function ($scope, $http, $routeParams,$location) {
    var id = $routeParams.id;
    $http.get('http://localhost:49431/api/Employee/' + $routeParams.id).then(function (response) {

        $scope.employee = response.data;
    })

    $scope.updateEmp = function () {
        var data = {
            ID: $routeParams.id,
            Name: $scope.employee.name,
            Age: $scope.employee.age,
            Salary: $scope.employee.salary
            
        }

        $http.put('http://localhost:49431/api/Employee/' + $routeParams.id,data).then(function (data,status) {

            console.log(status);
        })
        $location.path('/Home');
    }


}]);

myApp.controller("DeleteController", ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    var id = $routeParams.id;
    $http.get('http://localhost:49431/api/Employee/' + $routeParams.id).then(function (response) {
        $scope.employee = response.data;

    })

    $scope.removeEmployee = function () {
        $http.delete('http://localhost:49431/api/Employee/' + $routeParams.id).then(function (data) {
            console.log(data);
        })
    }
}]);
myApp.controller("HomeController", ['$scope', '$http', function ($scope, $http) {
    
    $http.get('http://localhost:49431/api/Employee').then(function (response) {
        $scope.employees = response.data;
    })
}]);

    




           




