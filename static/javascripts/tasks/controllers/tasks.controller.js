/**
* TasksController
* @namespace task_list.tasks.controllers
*/
(function () {
  'use strict';

  angular
    .module('task_list.tasks.controllers')
    .controller('TasksController', TasksController);

  TasksController.$inject = ['$rootScope', '$scope', '$routeParams', 'Auth', 'Tasks', 'Snackbar'];

  /**
  * @namespace TasksController
  */
  function TasksController($rootScope, $scope, $routeParams, Auth, Tasks, Snackbar) {
    var vm = this;

    vm.items = [];
    vm.statusFilter = statusFilter;

    activate();

    /**
     * @name statusFilter
     * @desc Filters based on selected Mode
     */
    function statusFilter(tasks) {
      $scope.mode = $routeParams.mode;

      return function( task ){
        var status = ($scope.mode === 'active') ?
          false : ($scope.mode === 'completed') ? true : '';

        //show all
        if( status === '' ){
          $scope.mode = '';
          return task;
        }

        return task.status === status;
      }
    }

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
  }
})();
