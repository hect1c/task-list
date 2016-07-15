/**
* Task
* @namespace task_list.tasks.directives
*/
(function () {
  'use strict';

  angular
    .module('task_list.tasks.directives')
    .directive('task', task);

  /**
  * @namespace Task
  */
  function task() {
    /**
    * @name directive
    * @desc The directive to be returned
    * @memberOf task_list.tasks.directives.Task
    */
    var directive = {
      restrict: 'E',
      scope: {
        task: '='
      },
      templateUrl: '/static/templates/tasks/task.html'
    };

    return directive;
  }
})();
