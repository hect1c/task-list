/**
* IndexController
* @namespace task_list.layout.controllers
*/
(function () {
  'use strict';

  angular
    .module('task_list.layout.controllers')
    .controller('IndexController', IndexController);

  IndexController.$inject = ['$scope', '$location', 'Auth', 'Tasks', 'Snackbar'];

  /**
  * @namespace IndexController
  */
  function IndexController($scope, $location, Auth, Tasks, Snackbar) {
    var vm = this;

    vm.tasks = [];

    activate();

    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf task_list.layout.controllers.IndexController
    */
    function activate() {
      /**
       * Redirect to login page if not authenticated
       * @param  {Boolean} !Auth.isAuthenticated
       */
      // if( !Auth.isAuthenticated() ){
      //   $location.url('/login');
      // }

      Tasks.all().then(tasksSuccessFn, tasksErrorFn);

      $scope.$on('task.created', function (event, task) {
        vm.tasks.unshift(task);
      });

      $scope.$on('task.created.error', function () {
        vm.tasks.shift();
      });

      // $scope.$on('task.updated', function (event, task) {
        // console.log(task);
        // var originalTasks = vm.tasks.slice(0);

        // console.log(originalTasks);
				// return $http.put('/api/todos/' + todo.id, todo)
				// 	.then(function success() {
				// 		return store.todos;
				// 	}, function error() {
				// 		angular.copy(originalTodos, store.todos);
				// 		return originalTodos;
				// 	});
      // });

      $scope.$on('task.updated.error', function() {
        // console.log()
      })

      /**
      * @name tasksSuccessFn
      * @desc Update tasks array on view
      */
      function tasksSuccessFn(data, status, headers, config) {
        vm.tasks = data.data;
      }

      /**
      * @name tasksErrorFn
      * @desc Show snackbar with error
      */
      function tasksErrorFn(data, status, headers, config) {
        Snackbar.error(data.error);
      }
    }
  }
})();
