(function () {
  'use strict';

  angular
    .module('task_list.tasks', [
      'task_list.tasks.controllers',
      'task_list.tasks.directives',
      'task_list.tasks.services',
    ]);

  angular
    .module('task_list.tasks.controllers', []);

  angular
    .module('task_list.tasks.directives', ['ngDialog']);

  angular
    .module('task_list.tasks.services', []);
})();
