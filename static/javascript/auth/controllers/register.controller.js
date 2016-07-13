/**
* Register controller
* @namespace task_list.auth.controllers
*/
(function () {
  'use strict';

  angular
    .module('task_list.auth.controllers')
    .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$location', '$scope', 'Auth'];

  /**
  * @namespace RegisterController
  */
  function RegisterController($location, $scope, Auth) {
    var vm = this;

    vm.register = register;

    /**
    * @name register
    * @desc Register a new user
    * @memberOf task_list.auth.controllers.RegisterController
    */
    function register() {
      Auth.register(vm.email, vm.password, vm.username);
    }
  }

  activate();

  /**
   * @name activate
   * @desc Actions to be performed when this controller is instantiated
   * @memberOf task_list.auth.controllers.RegisterController
   */
  function activate() {
    // If the user is authenticated, they should not be here.
    if (Auth.isAuthenticated()) {
      $location.url('/');
    }
  }
})();
