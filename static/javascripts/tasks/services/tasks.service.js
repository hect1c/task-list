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
      update: update,
      destroy: destroy,
      get: get,
      get_task: get_task
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
    function create(name, description, status, created_by, updated_by) {
      return $http.post('/api/v1/tasks/', {
        name: name,
        description: description,
        status: status,
        created_by: created_by,
        updated_by: updated_by
      });
    }

    /**
    * @name update
    * @desc Update a new Task
    * @param {string} name The name of the new Task
    * @returns {Promise}
    * @memberOf task_list.tasks.services.Tasks
    */
    function update(task) {
      return $http.put('/api/v1/tasks/' + task.id + '/', task);
    }

    /**
    * @name destroy
    * @desc Destroys the given profile
    * @param {Object} profile The profile to be destroyed
    * @returns {Promise}
    * @memberOf thinkster.profiles.services.Profile
    */
    function destroy(task) {
      return $http.delete('/api/v1/tasks/' + task.id + '/');
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

    function get_task(task) {
      return $http.get('/api/v1/tasks/' + task.id + '/tasks/');
    }
  }
})();
