/**
* NewTaskController
* @namespace task_list.tasks.controllers
*/
(function () {
  'use strict';

  angular
    .module('task_list.tasks.controllers')
    .controller('NewTaskController', NewTaskController);

  NewTaskController.$inject = ['$rootScope', '$scope', 'Auth', 'Snackbar', 'Tasks'];

  /**
  * @namespace NewTaskController
  */
  function NewTaskController($rootScope, $scope, Auth, Snackbar, Tasks) {
    var vm = this;

    vm.submit = submit;

    /**
    * @name submit
    * @desc Create a new Task
    * @memberOf task_list.tasks.controllers.NewTaskController
    */
    function submit() {
      $rootScope.$broadcast('task.created', {
        name: vm.name,
        author: {
          username: Auth.getAuthenticatedAccount().username
        }
      });

      $scope.closeThisDialog();

      Tasks.create(vm.name).then(createTaskSuccessFn, createTaskErrorFn);


      /**
      * @name createTaskSuccessFn
      * @desc Show snackbar with success message
      */
      function createTaskSuccessFn(data, status, headers, config) {
        Snackbar.show('Success! Task created.');
      }


      /**
      * @name createTaskErrorFn
      * @desc Propogate error event and show snackbar with error message
      */
      function createTaskErrorFn(data, status, headers, config) {
        $rootScope.$broadcast('task.created.error');
        Snackbar.error(data.error);
      }
    }
  }
})();
