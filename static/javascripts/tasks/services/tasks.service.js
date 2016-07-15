/**
* Tasks
* @namespace task_list.tasks.services
*/
(function () {
  'use strict';

  angular
    .module('task_list.tasks.services')
    .factory('Tasks', Tasks);

  Tasks.$inject = ['$http'];

  /**
  * @namespace Tasks
  * @returns {Factory}
  */
  function Tasks($http) {
    var Tasks = {
      all: all,
      create: create,
      // edit: edit,
      // delete: delete,
      // edit: edit,
      // delete: delete,
      get: get
    };

    return Tasks;

    ////////////////////

    /**
    * @name all
    * @desc Get all Tasks
    * @returns {Promise}
    * @memberOf task_list.tasks.services.Tasks
    */
    function all() {
      return $http.get('/api/v1/tasks/');
    }

    /**
    * @name create
    * @desc Create a new Task
    * @param {string} name The name of the new Task
    * @returns {Promise}
    * @memberOf task_list.tasks.services.Tasks
    */
    function create(name, author) {
      return $http.post('/api/v1/tasks/', {
        name: name,
        author: author
      });
    }

    /**
     * @name get
     * @desc Get the Tasks of a given user
     * @param {string} username The username to get Tasks for
     * @returns {Promise}
     * @memberOf task_list.tasks.services.Tasks
     */
    function get(username) {
      return $http.get('/api/v1/accounts/' + username + '/tasks/');
    }
  }
})();
