var app = angular.module('accounts', [
  'ngRoute'
]);

app.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});

app.controller('navCtrl', function($scope, $rootScope, $http, $window) {
  // $scope.navlist = {
  //   'account setting': '123',
  //   'staff management': '123567'
  // };
  $scope.navlist = {
    "账户管理": "account",
    "事物管理": "staff"
  };

  $scope.logout = function() {
    $http({
      url: '/service/user_server/logout',
      method: 'POST'
    }).then(function success(res) {
      if(res.data.success) {
        $window.alert('登出成功！');
        location.href = '/index/';
      };
    });
  };

});
