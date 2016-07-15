/**
* IndexController
* @namespace task_list.layout.controllers
*/
(function () {
  'use strict';

  angular
    .module('task_list.layout.controllers')
    .controller('IndexController', IndexController);

  IndexController.$inject = ['$scope', '$location', 'Auth', 'Tasks', 'Snackbar'];

  /**
  * @namespace IndexController
  */
  function IndexController($scope, $location, Auth, Tasks, Snackbar) {
    var vm = this;
    // console.log(Auth.isAuthenticated());
    // vm.isAuthenticated = Auth.isAuthenticated();
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
      // if( !Auth.isAuthenticated() ){
      //   $location.url('/login');
      // }

      Tasks.all().then(tasksSuccessFn, tasksErrorFn);

      $scope.$on('task.created', function (event, task) {
        vm.tasks.unshift(task);
      });

      $scope.$on('task.created.error', function () {
        vm.tasks.shift();
      });

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
