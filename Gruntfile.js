/*eslint strict: ["error", "global"]*/

'use strict';

module.exports = function(grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: [
                    'src/*.*'
                ],
                tasks: ['test'],
                options: {
                    livereload: 9090,
                }
            }
        },
        clean: {
            build: ['build/*'],
            dist: ['dist/*']
        },
        copy: {
            build: {
                files: [{
                    cwd: 'src',
                    src: [
                        '**',
                    ],
                    dest: 'build',
                    expand: true
                }]
            }
        },
        useminPrepare: {
            html: [
                'build/cabecera.html',
                'build.contenido.html',
                'build/index.html'
            ],
            options: {
                dest: 'build/app'
            }
        },
        usemin: {
            html: [
                'build/cabecera.html',
                'build.contenido.html',
                'build/index.html'
            ]//,
            // options: {
            //    revmap: grunt.filerev
            // }
        },
        uglify: {
            options: {
                report: 'min',
                preserveComments: 'some', // will preserve all comments that start with a bang (!) or include a closure compiler style directive (@preserve)
                mangle: false, // false to prevent changes to your variable and function names.
                compress: {
                    drop_console: true
                }
            }
        },

        htmlmin: {
            dev: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: 'build/',
                    src: '**/*.html',
                    dest: 'build',
                }]
            }
        },

        compress: {
            dist: {
              options: {
                archive: 'dist/<%= pkg.name %>-<%= pkg.version %>.zip',
                level: 9
              },
              files: [
                {expand: true, cwd: 'build/', src: ['**']}
              ]
            }
        }

    });

    // Include functionality
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-compress');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('dev', ['watch']);
    //grunt.registerTask('build', ['clean', 'copy', 'uglify']);
    grunt.registerTask(
        'build',
        'Compiles all of the assets and copies the files to the build directory.',
        //['clean', 'copy', 'useminPrepare', 'concat:generated', 'cssmin:generated', 'uglify:generated', 'usemin', 'htmlmin']
        ['clean', 'copy', 'useminPrepare', 'concat:generated', 'cssmin:generated', 'uglify:generated', 'usemin']
         //, 'cleanempty'
        //['clean', 'copy'] //, 'useminPrepare', 'concat:generated', 'cssmin:generated', 'uglify:generated', 'usemin', 'htmlmin'] //, 'cleanempty'
        //['clean', 'copy', 'useminPrepare'] //, 'concat:generated']
        //['clean', 'copy', 'useminPrepare', 'concat:generated']
    );
    grunt.registerTask('publish', ['clean:build', 'build', 'compress:dist']);
    grunt.registerTask('clean-all', ['clean:build', 'clean:dist']);
    //grunt.registerTask('clean-node-modules', ['clean:node', 'clean:dist']);
    //grunt.registerTask('test', ['karma']);
    //grunt.registerTask('test-full', ['karma:coverage']);
};