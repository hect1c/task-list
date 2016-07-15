/**
* Tasks
* @namespace task_list.tasks.directives
*/
(function () {
  'use strict';

  angular
    .module('task_list.tasks.directives')
    .directive('tasks', tasks);

  /**
  * @namespace Tasks
  */
  function tasks() {
    /**
    * @name directive
    * @desc The directive to be returned
    * @memberOf task_list.tasks.directives.Tasks
    */
    var directive = {
      controller: 'TasksController',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
        tasks: '='
      },
      templateUrl: '/static/templates/tasks/tasks.html'
    };

    return directive;
  }
})();
