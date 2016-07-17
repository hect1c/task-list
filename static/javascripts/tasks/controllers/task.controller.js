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

    vm.update = update;

    /**
    * @name update
    * @desc Update this task
    * @memberOf task_list.tasks.controllers.ProfileSettingsController
    */
    function update(task) {
      $rootScope.$broadcast('task.updated', {
        name: task.name,
        description: task.description,
        status: task.status
      });

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
