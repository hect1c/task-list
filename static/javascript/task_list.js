(function () {
  'use strict';

  angular
    .module('task_list', [
      'task_list.routes',
      'task_list.auth',
      'task_list.config'
    ]);

  angular
    .module('task_list.routes', ['ngRoute']);

  angular
    .module('task_list.config', []);
})();
