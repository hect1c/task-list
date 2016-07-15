/**
* TaskController
* @namespace task_list.tasks.controllers
*/
(function () {
  'use strict';

  angular
    .module('task_list.tasks.controllers')
    .controller('TaskController', TaskController);

  TaskController.$inject = ['$rootScope', '$scope', 'Auth', 'Snackbar', 'Tasks'];

  /**
  * @namespace TaskController
  */
  function TaskController($rootScope, $scope, Auth, Snackbar, Tasks) {
    var vm = this;

    // vm.create = create;
    // vm.edit = edit;
    // vm.delte = delete;

    // /**
    // * @name create
    // * @desc Create a new Task
    // * @memberOf task_list.tasks.controllers.TaskController
    // */
    // function create() {
    //   $rootScope.$broadcast('task.created', {
    //     name: vm.name,
    //     author: {
    //       username: Auth.getAuthenticatedAccount().username
    //     }
    //   });
    //
    //   $scope.closeThisDialog();
    //
    //   Tasks.create(vm.name).then(createTaskSuccessFn, createTaskErrorFn);
    //
    //
    //   /**
    //   * @name createTaskSuccessFn
    //   * @desc Show snackbar with success message
    //   */
    //   function createTaskSuccessFn(data, status, headers, config) {
    //     Snackbar.show('Success! Task created.');
    //   }
    //
    //
    //   /**
    //   * @name createTaskErrorFn
    //   * @desc Propogate error event and show snackbar with error message
    //   */
    //   function createTaskErrorFn(data, status, headers, config) {
    //     $scope.$broadcast('task.created.error');
    //     Snackbar.error(data.error);
    //   }
    // }
  }
})();
