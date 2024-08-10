var app = angular.module("portfolio", []);

app.config(function () {});

app.run(function () {});

app.controller("CommonController", function ($rootScope, $scope, $http) {
  $scope.message = "Hello World";

  $rootScope.testRepeat = [
    { name: "TestOne", num: "1" },
    { name: "TestTwo", num: "2" },
    { name: "TestThree", num: "3" },
  ];

  $http.get("/lib/json/list.json").then(function (response) {
    $scope.testJson = response.data;
  });
});
