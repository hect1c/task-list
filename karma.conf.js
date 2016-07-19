// Karma configuration
// Generated on Tue Jul 19 2016 14:40:34 GMT+0100 (BST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'static/bower_components/jquery/dist/*.js',
      'static/bower_components/underscore/underscore.js',
      'static/bower_components/angular/angular.js',
      'static/bower_components/angular-route/angular-route.js',
      'static/bower_components/angular-cookies/angular-cookies.js',
      'static/bower_components/angular-mocks/angular-mocks.js',
      // 'static/bower_components/angular-xeditable/dist/js/xeditable.js',
      // 'static/bower_components/ng-dialog/js/ngDialog.js',

      // 'static/lib/snackbarjs/snackbar.min.js',
      //
      // 'static/*/task_list.js',
      // 'static/*/task_list.config.js',
      // 'static/*/task_list.routes.js',

      'static/*/auth/*.js',
      // 'static/*/auth/controllers/*.js',
      'static/*/auth/services/*.js',
      //
      // 'static/*/layout/*.js',
      // 'static/*/layout/controllers/*.js',
      //
      'static/*/tasks/*.js',
      // 'static/*/tasks/controllers/*.js',
      // 'static/*/tasks/directives/*.js',
      'static/*/tasks/services/*.js',

      'static/*/utils/*.js',
      'static/*/utils/services/*.js',

      // 'static/**/*.js',
      // 'static/***/*.js',
      'tests/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
