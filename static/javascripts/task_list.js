(function () {
  'use strict';

  angular
    .module('task_list', [
      'task_list.config',
      'task_list.routes',
      'task_list.auth',
      'task_list.utils',
      'task_list.layout',
      'task_list.tasks',
    ]);


  angular
        .module('task_list.config', []);

  angular
    .module('task_list.routes', ['ngRoute']);

  angular
    .module('task_list')
    .run(run);

  run.$inject = ['$http'];

  /**
  * @name run
  * @desc Update xsrf $http headers to align with Django's defaults
  */
  function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
  }
})();
