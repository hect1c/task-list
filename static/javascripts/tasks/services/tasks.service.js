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
    function create(name, description, status, author) {
      return $http.post('/api/v1/tasks/', {
        name: name,
        description: description,
        status: status,
        author: author
      });
    }

    /**
    * @name update
    * @desc Update a new Task
    * @param {string} name The name of the new Task
    * @returns {Promise}
    * @memberOf task_list.tasks.services.Tasks
    */
    function update(tasks) {
      return $http.put('/api/v1/tasks/' + tasks.id + '/', tasks);
    }

    /**
    * @name destroy
    * @desc Destroys the given profile
    * @param {Object} profile The profile to be destroyed
    * @returns {Promise}
    * @memberOf thinkster.profiles.services.Profile
    */
    function destroy(tasks) {
      return $http.delete('/api/v1/tasks/' + tasks.id + '/');
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
