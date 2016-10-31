angular.module('mediaApp').controller('LoginController', ['$http', '$location', function($http, $location){
  var vm = this;

  vm.username = '';
  vm.password = '';

  vm login = function(){
    var sendData = {};

    sendData.username = vm.username;
    sendData.password = vm.password;

    $http.post('/login', sendData).then(function(response){
        vm.userData.user = response.data;
        console.log(vm.userData.user);
    }, function(err){
      console.log('Error in userservice', err);
    })
  }
}]);
