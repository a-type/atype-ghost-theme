'use strict';

module.exports = function (grunt) {
	var lessFiles = './assets/less/**/*.less';

	grunt.initConfig({
		watch: {
			less: {
				files: lessFiles,
				tasks: [ 'less:default' ]
			}
		},
		less: {
			default: {
				files: {
					'./assets/css/style.css': './assets/less/style.less'
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');

	// Register tasks
	grunt.registerTask('default', [ 'less:default', 'watch:less' ]);
};
