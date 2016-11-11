angular.module('mediaApp').controller('RegisterController', ['$http', '$location', function($http, $location){
  var vm = this;

  vm.username = '';
  vm.password = '';

  vm.register = function(){
    var sendData = {};

    sendData.username = vm.username;
    sendData.password = vm.password;

    $http.post('/register', sendData).then(handleSuccess, handleFailure);
  };

  function handleSuccess(response){
    console.log('Registration Success', response);
  };

  function handleFailure(response){
    console.log('Failure Registering', response);
  };

  vm.cancel = function(){
    $location.path('/');
  };
}]);
