angular.module('accounts').config([
  '$locationProvider',
  '$routeProvider',
  '$httpProvider',
  function config($locationProvider, $routeProvider, $httpProvider){
    $locationProvider.hashPrefix('!');

    $routeProvider.
    when('/staff', {
      templateUrl: '/js/staff/staff.html',
      controller: 'StaffCtrl'
    }).
    when('/account', {
      template: '',
      controller: ''
    }).
    otherwise('/staff');

    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  }
]);
