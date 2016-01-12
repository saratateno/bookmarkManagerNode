module.exports = function(grunt){

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'routes/**/*.js', 'specs/**/*.js', 'app.js']
    },

    watch: {
      scripts: {
        files: ['routes/**/*.js', 'specs/**/*.js', 'app.js'],
        tasks: ['jshint'],
      },
    },

    pkg: grunt.file.readJSON('package.json'),
      webdriver: {
        test: {
        configFile: './wdio.conf.js'
        },
      }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-webdriver');

  grunt.registerTask('default', ['jshint', 'webdriver']);

};
