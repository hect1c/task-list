// /**
// * EditTaskController
// * @namespace task_list.tasks.controllers
// */
// (function () {
//   'use strict';
//
//   angular
//     .module('task_list.tasks.controllers')
//     .controller('EditTaskController', EditTaskController);
//
//   EditTaskController.$inject = ['$rootScope', '$scope', 'Auth', 'Snackbar', 'Tasks'];
//
//   /**
//   * @namespace EditTaskController
//   */
//   function EditTaskController($rootScope, $scope, Auth, Snackbar, Tasks) {
//     var vm = this;
//     vm.update = update;
//
//     /**
//     * @name update
//     * @desc Create a new Task
//     * @memberOf task_list.tasks.controllers.EditTaskController
//     */
//     function update(task) {
//       console.log(task);
//       $rootScope.$broadcast('task.updated', {
//         name: vm.name
//       });
//
//       $scope.closeThisDialog();
//
//       Tasks.update(vm.name).then(createTaskSuccessFn, createTaskErrorFn);
//
//       /**
//       * @name createTaskSuccessFn
//       * @desc Show snackbar with success message
//       */
//       function createTaskSuccessFn(data, status, headers, config) {
//         Snackbar.show('Success! Task updated.');
//       }
//
//       /**
//       * @name createTaskErrorFn
//       * @desc Propogate error event and show snackbar with error message
//       */
//       function createTaskErrorFn(data, status, headers, config) {
//         $rootScope.$broadcast('task.updated.error');
//         Snackbar.error(data.error);
//       }
//     }
//   }
// })();
