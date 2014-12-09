/*global module, require*/
module.exports = function (grunt) {

    "use strict";

    grunt.initConfig({

        jslint: {
            client: {
                src: [
                    'Gruntfile.js',
                    'source/player-tube.js'
                ],
                directives: {
                    predef: [
                        'jQuery',
                        'window',
                        'document',
                        'console',
                        'YT',
                        'setInterval',
                        'clearInterval'
                    ]
                }
            }
        },

        uglify: {
            main: {
                options: {
                    beautify: false,
                    sourceMap: true,
                    compress: {
                        drop_console: true
                    }
                },
                files: {
                    'dist/player-tube.min.js': ['source/player-tube.js']
                }
            }
        },

        watch: {
            scripts: {
                files: ['Gruntfile.js', 'source/player-tube.js'],
                tasks: ['jslint', 'uglify']
            }
        }
    });

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.registerTask('w', ['jslint', 'uglify', 'watch']);
};