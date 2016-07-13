/**
* LoginController
* @namespace task_list.auth.controllers
*/
(function () {
  'use strict';

  angular
    .module('task_list.auth.controllers')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$location', '$scope', 'Auth'];

  /**
  * @namespace LoginController
  */
  function LoginController($location, $scope, Auth) {
    var vm = this;

    vm.login = login;

    activate();

    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf task_list.auth.controllers.LoginController
    */
    function activate() {
      // If the user is auth, they should not be here.
      if (Auth.isAuthenticated()) {
        $location.url('/');
      }
    }

    /**
    * @name login
    * @desc Log the user in
    * @memberOf task_list.auth.controllers.LoginController
    */
    function login() {
      Auth.login(vm.email, vm.password);
    }
  }
})();
