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

    $scope.editedTask = null;
    $scope.reverted = false;

    vm.done = done;
    vm.update = update;
    vm.destroy = destroy;
    vm.edit = edit;
    vm.authenticatedUser = Auth.getAuthenticatedAccount();

    function edit(task){
      $scope.editedTask = task;
			$scope.originalTask = angular.extend({}, task);
    }

    function done(data) {
      //only mark uncompleted tasks as done
      if( !data.status ) {
        //create scope to bypass edits
        $scope.allowEdit = true;

        //set task to true
        $scope.task.status = true;
        // //set update author
        $scope.task.updated_by = {
            username: Auth.getAuthenticatedAccount().username
        }
      }
    }

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
     * @name revertEdits
     * @desc Revert edits or updates back to original
     */
    function revertEdits(index) {
      $rootScope.$broadcast('task.reverted', { index: index, original: $scope.originalTask });

			$scope.editedTask = null;
			$scope.originalTask = null;
			$scope.reverted = true;
    }

    /**
    * @name update
    * @desc Update this task
    * @memberOf task_list.tasks.controllers.TaskController
    */
    function update(data) {
      //allow edit on Status
      if( typeof $scope.allowEdit != "undefined" ) {
        // revertEdits(data.index);  Don't need revert at the moment
        data.task.flag = $scope.allowEdit;
      }

      if ($scope.reverted) {
				// Task edits were reverted-- don't save.
				$scope.reverted = null;
				return Snackbar.show('You can only edit your own Task');
			}

      $rootScope.$broadcast('task.updated', { index: data.index, task: data.task });

      //update task
      Tasks.update(data.task).then(updateTaskSuccessFn, updateTaskErrorFn);

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
         Snackbar.error(data.data.detail);
       }
    }
  }
})();
