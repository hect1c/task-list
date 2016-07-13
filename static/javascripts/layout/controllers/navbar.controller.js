/**
* NavbarController
* @namespace task_list.layout.controllers
*/
(function () {
  'use strict';

  angular
    .module('task_list.layout.controllers')
    .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$scope', 'Auth'];

  /**
  * @namespace NavbarController
  */
  function NavbarController($scope, Auth) {
    var vm = this;

    vm.logout = logout;

    /**
    * @name logout
    * @desc Log the user out
    * @memberOf task_list.layout.controllers.NavbarController
    */
    function logout() {
      Auth.logout();
    }
  }
})();
