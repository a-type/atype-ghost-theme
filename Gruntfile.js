"use strict";

module.exports = function (grunt) {
	var lessFiles = [ "./content/themes/a-type/assets/less/*.less" ];
	
	grunt.initConfig({
		watch : {
			static : {
				files : lessFiles,
				tasks : [ "less:default" ]
			}
		},
		
		less : {
			default : {
				files : {
					"./content/themes/a-type/assets/css/style.css" : "./content/themes/a-type/assets/less/style.less"
				}
			}
		},
	});
	
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-watch");
}