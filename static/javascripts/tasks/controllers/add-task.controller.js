/**
* AddTaskController
* @namespace task_list.tasks.controllers
*/
(function () {
  'use strict';

  angular
    .module('task_list.tasks.controllers')
    .controller('AddTaskController', AddTaskController);

  AddTaskController.$inject = ['$rootScope', '$scope', 'Auth', 'Snackbar', 'Tasks'];

  /**
  * @namespace AddTaskController
  */
  function AddTaskController($rootScope, $scope, Auth, Snackbar, Tasks) {
    var vm = this;

    vm.submit = submit;

    /**
    * @name submit
    * @desc Create a new Task
    * @memberOf task_list.tasks.controllers.AddTaskController
    */
    function submit() {
      $rootScope.$broadcast('task.created', {
        name: vm.name,
        description: vm.description,
        status: vm.status,
        author: {
          username: 'hartley.jeanaimee1@gmail.com' //@todo fix issue with Auth
          // username: Auth.getAuthenticatedAccount().username
        }
      });

      $scope.closeThisDialog();

      Tasks.create(vm.name, vm.description, vm.status).then(addTaskSuccessFn, addTaskErrorFn);

      /**
      * @name addTaskSuccessFn
      * @desc Show snackbar with success message
      */
      function addTaskSuccessFn(data, status, headers, config) {
        Snackbar.show('Success! Task created.');
      }

      /**
      * @name addTaskErrorFn
      * @desc Propogate error event and show snackbar with error message
      */
      function addTaskErrorFn(data, status, headers, config) {
        $rootScope.$broadcast('task.created.error');
        Snackbar.error(data.error);
      }
    }
  }
})();
