(function () {
  'use strict';

  angular
    .module('task_list.auth', [
      'task_list.auth.controllers',
      'task_list.auth.services'
    ]);

  angular
    .module('task_list.auth.controllers', []);

  angular
    .module('task_list.auth.services', ['ngCookies']);
})();
