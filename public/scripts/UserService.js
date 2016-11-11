angular.module('mediaApp').factory('UserService', ['$http', function($http, UserService){
  var vm = this;

  vm.userData = {};

  function login(data){
    return $http.post('/login', data).then(function(response){
      vm.userData.user = response.data;
      console.log('User Data', vm.userData.user);
    }, function(err){
      console.log('Error in UserService', err);

    });
  };

  return {
    login: login
  };
}]);
