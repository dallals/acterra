var app = angular.module(
  'acterra',
  [
    'ngRoute',
    'ngResource',
    'ngMessages',
    'templates'
  ]
);

app.config([
          "$routeProvider",
  function($routeProvider) {
    $routeProvider.when("/", {
      controller: "indexController",
      templateUrl: "main.html"
    })
    .otherwise({
    	redirectTo:'/'
    });
  }
]);
