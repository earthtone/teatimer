module.exports = function(grunt){
	'use strict';
	[	//load each grunt task
		'grunt-browserify',
		'grunt-contrib-jshint',
		'grunt-contrib-connect',
		'grunt-contrib-watch',
		'grunt-sass',
		'grunt-contrib-copy'
	].forEach(grunt.loadNpmTasks);

	grunt.registerTask('build', 'Build App', ['jshint', 'browserify:dev', 'sass:dist', 'copy:html']);
	grunt.registerTask('serve', 'Open Server', ['connect:server', 'watch']);
	grunt.registerTask('default', 'Default Taks', ['build', 'serve']);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		browserify:{
			dev: {
				src: ['src/scripts/main.js'],
				dest: 'dist/scripts/main.js',
				options: {
					browserifyOptions: {debug: true},
					transform: [ 
						['babelify', {
							presets: ['es2015'],
						}] 
					],
					watch: true,
				}
			}
		},
		jshint: {
			files: ['gruntfile.js', 'src/**/*.js'],
			options: {
				esversion: 6
			}
		},
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'dist/styles/main.css':'src/styles/main.scss'
				},
			},
		},
		connect: {
			server: {
				options: {
					port: 8181,
					base: ['dist'],
					open: true
				},
			}
		},
		watch: {
			files: ['Gruntfile.js', 'src/**/*.html', 'src/**/*.js', 'src/**/*.scss', 'src/**/*.hbs'],
			tasks: ['build']
		},
		copy: {
			html: {
				files: [{
					expand: true, 
					cwd: 'src/html/',
					src: ['**'], 
					dest: 'dist/',
					isFile: true
				}]
			}
		}
	});
};
