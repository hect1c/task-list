// /**
// * Tasks
// * @namespace task_list.tasks.services
// */
// (function () {
//   'use strict';
//
//   angular
//     .module('task_list.tasks.services')
//     .factory('Tasks', Tasks);
//
//   Tasks.$inject = ['$http'];
//
//   /**
//   * @namespace Tasks
//   * @returns {Factory}
//   */
//   function Tasks($http) {
//     var Tasks = {
//       all: all,
//       create: create,
//       update: update,
//       // delete: delete,
//       get: get
//     };
//
//     return Tasks;
//
//     ////////////////////
//
//     /**
//     * @name update
//     * @desc Update a new Task
//     * @param {string} name The name of the new Task
//     * @returns {Promise}
//     * @memberOf task_list.tasks.services.Tasks
//     */
//     function update(name) {
//       return $http.put('/api/v1/tasks/' + task.id + '/');
//     }
//
//     /**
//     * @name destroy
//     * @desc Destroys the given profile
//     * @param {Object} profile The profile to be destroyed
//     * @returns {Promise}
//     * @memberOf thinkster.profiles.services.Profile
//     */
//     function destroy(profile) {
//       return $http.delete('/api/v1/tasks/' + task.id + '/');
//     }
//
//     /**
//      * @name get
//      * @desc Get the Tasks of a given user
//      * @param {string} username The username to get Tasks for
//      * @returns {Promise}
//      * @memberOf task_list.tasks.services.Tasks
//      */
//     function get(username) {
//       return $http.get('/api/v1/accounts/' + username + '/tasks/');
//     }
//   }
// })();
