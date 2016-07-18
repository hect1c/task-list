/**
* Auth
* @namespace task_list.auth.services
*/
(function () {
  'use strict';

  angular
    .module('task_list.auth.services')
    .factory('Auth', Auth);

  Auth.$inject = ['$cookies', '$http', '$timeout', 'Snackbar'];

  /**
  * @namespace Auth
  * @returns {Factory}
  */
  function Auth($cookies, $http, $timeout, Snackbar) {
    /**
    * @name Auth
    * @desc The Factory to be returned
    */
    var Auth = {
      getAuthenticatedAccount: getAuthenticatedAccount,
      isAuthenticated: isAuthenticated,
      login: login,
      logout: logout,
      register: register,
      setAuthenticatedAccount: setAuthenticatedAccount,
      unauthenticate: unauthenticate
    };

    return Auth;

    ////////////////////
    ///
    ///
    ////////////////////

    /**
    * @name register
    * @desc Try to register a new user
    * @param {string} email The email entered by the user
    * @param {string} password The password entered by the user
    * @param {string} username The username entered by the user
    * @returns {Promise}
    * @memberOf task_list.auth.services.Auth
    */
    function register(email, password, username, first_name, last_name) {
      return $http.post('/api/v1/accounts/', {
        username: username,
        password: password,
        email: email,
        first_name: first_name,
        last_name: last_name,
      }).then(registerSuccessFn, registerErrorFn);

      /**
      * @name registerSuccessFn
      * @desc Log the new user in
      */
      function registerSuccessFn(data, status, headers, config) {
        Auth.login(email, password);
      }

      /**
      * @name registerErrorFn
      * @desc Log "I pity the fool!" to the console
      */
      function registerErrorFn(data, status, headers, config) {
        Snackbar.error(data.data.message);
        console.error('I pity the fool! Fail !');
      }
    }

    /**
     * @name login
     * @desc Try to log in with email `email` and password `password`
     * @param {string} email The email entered by the user
     * @param {string} password The password entered by the user
     * @returns {Promise}
     * @memberOf task_list.auth.services.Auth
     */
    function login(email, password) {
      return $http.post('/api/v1/auth/login/', {
        email: email, password: password
      }).then(loginSuccessFn, loginErrorFn);

      /**
       * @name loginSuccessFn
       * @desc Set the authenticated account and redirect to index
       */
      function loginSuccessFn(data, status, headers, config) {
        Auth.setAuthenticatedAccount(data.data);

        window.location = '/';
      }

      /**
       * @name loginErrorFn
       * @desc Log "FINISH HIM, FATALITY!" to the console
       */
      function loginErrorFn(data, status, headers, config) {
        Snackbar.error(data.data.message);
        console.error('FINISH HIM, FATALITY!');
      }
    }

    /**
     * @name logout
     * @desc Try to log the user out
     * @returns {Promise}
     * @memberOf task_list.auth.services.Auth
     */
    function logout() {
      return $http.post('/api/v1/auth/logout/')
        .then(logoutSuccessFn, logoutErrorFn);

      /**
       * @name logoutSuccessFn
       * @desc Unauthenticate and redirect to index with page reload
       */
      function logoutSuccessFn(data, status, headers, config) {
        Auth.unauthenticate();

        $timeout(function() {
          window.location = '/';
        }, 1000);
      }

      /**
       * @name logoutErrorFn
       * @desc Log "Whose ya daddy! Fail!" to the console
       */
      function logoutErrorFn(data, status, headers, config) {
        Snackbar.error(data.data.message);
        console.error('Whose ya daddy! Fail!');
      }
    }

    /**
     *  AUTH METHODS
     */

    /**
     * @name getAuthenticatedAccount
     * @desc Return the currently authenticated account
     * @returns {object|undefined} Account if authenticated, else `undefined`
     * @memberOf task_list.auth.services.Auth
     */
    function getAuthenticatedAccount() {
      if( !$cookies.get('authenticatedAccount') ) {
        return;
      }

      return JSON.parse($cookies.get('authenticatedAccount'));
    }

    /**
     * @name isAuthenticated
     * @desc Check if the current user is authenticated
     * @returns {boolean} True is user is authenticated, else false.
     * @memberOf task_list.auth.services.Auth
     */
    function isAuthenticated() {
      return !!$cookies.get('authenticatedAccount');
    }

    /**
     * @name setAuthenticatedAccount
     * @desc Stringify the account object and store it in a cookie
     * @param {Object} user The account object to be stored
     * @returns {undefined}
     * @memberOf task_list.auth.services.Auth
     */
    function setAuthenticatedAccount(account) {
      $cookies.put('authenticatedAccount', JSON.stringify(account));
    }

    /**
     * @name unauthenticate
     * @desc Delete the cookie where the user object is stored
     * @returns {undefined}
     * @memberOf task_list.auth.services.Auth
     */
    function unauthenticate() {
      $cookies.remove('authenticatedAccount');
    }

  }
})();
