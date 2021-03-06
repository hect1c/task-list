/**
* IndexController
* @namespace task_list.layout.controllers
*/
(function () {
  'use strict';

  angular
    .module('task_list.layout.controllers')
    .controller('IndexController', IndexController);

  IndexController.$inject = ['$scope', '$location','$controller', 'Auth', 'Tasks', 'Snackbar'];

  /**
  * @namespace IndexController
  */
  function IndexController($scope, $location, $controller, Auth, Tasks, Snackbar) {
    var vm = this;

    vm.tasks = [];

    activate();

    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf task_list.layout.controllers.IndexController
    */
    function activate() {

      /**
       * Redirect to login page if not authenticated
       * @param  {Boolean} !Auth.isAuthenticated
       */
      if( !Auth.isAuthenticated() ){
        $location.url('/login');
      }

      Tasks.all().then(tasksSuccessFn, tasksErrorFn);

      $scope.$on('task.created', function (event, task) {
        vm.tasks.unshift(task);
      });

      $scope.$on('task.created.error', function () {
        vm.tasks.shift();
      });

      $scope.$on('task.deleted', function (event, index) {
        vm.tasks.splice(index, 1);
      });

      /**
       * listeners to revert any edits or updates
       * No longer necessary since just hid buttons
       * based on Auth account
       */

      // $scope.$on('task.reverted', function (event, data) {
      //   vm.tasks[data.index] = data.original;
      // });
      //
      // $scope.$on('task.updated', function (event, data) {
      //   vm.tasks[data.index] = data.task;
      // });

      /**
      * @name tasksSuccessFn
      * @desc Update tasks array on view
      */
      function tasksSuccessFn(data, status, headers, config) {
        vm.tasks = data.data;
      }

      /**
      * @name tasksErrorFn
      * @desc Show snackbar with error
      */
      function tasksErrorFn(data, status, headers, config) {
        Snackbar.error(data.error);
      }
    }
  }
})();
