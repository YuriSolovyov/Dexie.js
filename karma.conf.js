module.exports = function(config) {
  const files = true ? [
    'test/qunit.js',
    'test/karma-env.js',
    'src/*.js',
    'test/dexie-unittest-utils.js',
    'test/tests-*.js',
    { pattern: 'test/worker.js', included: false },
  ] : [
    'test/qunit.js',
    'test/karma-env.js',
    'src/*.js',
    'test/dexie-unittest-utils.js',
    // 'addons/Dexie.Observable/*.js',
    // 'addons/Dexie.Syncable/*.js',
    // 'addons/Dexie.Yield/*.js',
    // 'test/addons/tests-observable.js',
    // 'test/addons/tests-syncable.js',
    // 'test/addons/tests-yield.js',
  ];
  const configuration = {
    basePath: '',

    frameworks: [
      'qunit',
    ],

    reporters: [
      'mocha'
    ],

    client: {
      captureConsole: false
    },

    files: files,

    port: 9876,
    captureTimeout: 10 * 1000,
    browserNoActivityTimeout: 10 * 60 * 1000,
    colors: true,

    browsers: [
      'Chrome'
    ],

    plugins: [
      'karma-qunit',
      'karma-mocha-reporter',
      'karma-chrome-launcher'
    ]
  };

  config.set(configuration);
};
