'use strict';
 
module.exports = function (grunt) {
 
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
 
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);
 
  grunt.initConfig({
    // Configurable paths
    pathTo: {  //C:\work\src\MR_DEV\TASK-Mobile\CQ5Workspace\uhc_member\ui\src\main\content\jcr_root\apps\member\components\content\registration
      jcrRoot: 'uhc_framework/ui/src/main/content/jcr_root/',
      projectDesigns: 'etc/designs/uhc-common/mobileaarp/member/mobileuhcm/'
    },
    // use grunt-dev-update to check for out of date dependencies
    devUpdate: {
      check: {
        options: {
          reportUpdated: false,
          updateType: 'report'
        }
      }
    },
   // lint our JS
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: ['<%= pathTo.jcrRoot %><%= pathTo.projectDesigns %>**/*.js']
    },
    watch: {
      author: {
        files: ['<%= pathTo.jcrRoot %><%= pathTo.projectDesigns %>**/*.{css,xml,html,js,jsp,txt}'],
        tasks: ['slang:author'],
        options: {
          spawn: false
        }
      },
      publish: {
        files: ['<%= pathTo.jcrRoot %><%= pathTo.projectDesigns %>**/*.{css,xml,html,js,jsp,txt}'],
        tasks: ['slang:publish'],
        options: {
          spawn: false
        },
      },
      js: {
        files: ['<%= jshint.all %>'],
        tasks: ['jshint']
      }
    },
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      author: [
        'watch:js',
        'watch:author'
      ],
      publish: [
        'watch:js',
        'watch:publish'
      ]
    },
    slang: {
      author: {
        options: {
          port: '4502'
        }
      },
      publish: {
        options: {
          port: '4503'
        }
      }
    }
  });
 
  grunt.event.on('watch', function(action, filepath, target) {
    grunt.config.set(['slang', 'author', 'src'], filepath);
    grunt.config.set(['slang', 'publish', 'src'], filepath);
  });
 
  grunt.registerTask('check', ['devUpdate','newer:jshint']);
  grunt.registerTask('js', ['newer:jshint']);
  grunt.registerTask('assets', ['js']);
  grunt.registerTask('author', ['concurrent:author']);
  grunt.registerTask('publish', ['concurrent:publish']);
  grunt.registerTask('default', ['concurrent:publish']);
};
