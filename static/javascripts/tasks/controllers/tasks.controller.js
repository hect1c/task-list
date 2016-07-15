/**
* TasksController
* @namespace task_list.tasks.controllers
*/
(function () {
  'use strict';

  angular
    .module('task_list.tasks.controllers')
    .controller('TasksController', TasksController);

  TasksController.$inject = ['$rootScope', '$scope', 'Auth', 'Tasks', 'Snackbar'];

  /**
  * @namespace TasksController
  */
  function TasksController($rootScope, $scope, Auth, Tasks, Snackbar) {
    var vm = this;

    vm.items = [];
    vm.create = create;

    activate();

    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf task_list.tasks.controllers.TasksController
    */
    function activate() {
      $scope.$watchCollection(function () { return $scope.tasks; }, render);
    }

    /**
    * @name render
    * @desc Renders Tasks into items of approximately equal height
    * @param {Array} current The current value of `vm.tasks`
    * @param {Array} original The value of `vm.tasks` before it was updated
    * @memberOf task_list.tasks.controllers.TasksController
    */
    function render(current, original) {
      if (current !== original) {
        vm.items = [];
        vm.items.push(current);
      }
    }

    /**
    * @name create
    * @desc Create a new Task
    * @memberOf task_list.tasks.controllers.TaskController
    */
    function create() {
      $rootScope.$broadcast('task.created', {
        name: vm.name,
        author: {
          username: 'hartley.jeanaimee1@gmail.com'
        }
      });

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
        $scope.$broadcast('task.created.error');
        Snackbar.error(data.error);
      }
    }
  }
})();
