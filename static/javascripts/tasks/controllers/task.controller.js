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

    $scope.options = [
      {value: false, text: 'Not Done'},
      {value: true, text: 'Done'}
    ];

    // $scope.destroy = destroy;

    vm.update = update;
    vm.destroy = destroy;

    /**
    * @name destroy
    * @desc Destroy this task
    * @memberOf task_list.tasks.controllers.TaskController
    */
    function destroy(data) {
      $rootScope.$broadcast('task.deleted', data.index);

      Tasks.destroy(data.task).then(taskSuccessFn, taskErrorFn);

      /**
      * @name taskSuccessFn
      * @desc Display success snackbar
      */
      function taskSuccessFn(data, status, headers, config) {
        Snackbar.show('Your task has been deleted.');
      }

      /**
      * @name taskErrorFn
      * @desc Display error snackbar
      */
      function taskErrorFn(data, status, headers, config) {
        Snackbar.error(data.error);
      }
    }

    /**
    * @name update
    * @desc Update this task
    * @memberOf task_list.tasks.controllers.TaskController
    */
    function update(task) {
      Tasks.update(task).then(updateTaskSuccessFn, updateTaskErrorFn);

      /**
       * @name taskSuccessFn
       * @desc Show success snackbar
       */
       function updateTaskSuccessFn(data, status, headers, config) {
         Snackbar.show('Your task has been updated.');
       }

       /**
       * @name taskErrorFn
       * @desc Show error snackbar
       */
       function updateTaskErrorFn(data, status, headers, config) {
         Snackbar.error(data.error);
       }
    }
  }
})();
