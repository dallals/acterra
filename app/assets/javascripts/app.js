var app = angular.module(
  'acterra',
  [
    'ngRoute',
    'ngResource',
    'ngMessages',
    'ngAnimate',
    'templates',
    'angularUtils.directives.dirPagination',
    'ui.bootstrap'
  ]
);

app.config([
          "$routeProvider",
  function($routeProvider) {
    $routeProvider
    .when("/", {
      controller: "indexController",
      templateUrl: "main.html"
    })
    .when('/org/:id',{
      controller: "orgController",
      templateUrl: 'org.html'
    })
    .otherwise({
      redirectTo:'/'
    });
  }
]);