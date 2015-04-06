/*global module, require*/
module.exports = function (grunt) {

    "use strict";

    var jsBanner = '/*\n * jQuery Plugin to insert an YouTube player into your site.\n * https://github.com/sandroweb/player-tube\n */';

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
            mainMin: {
                options: {
                    beautify: false,
                    sourceMap: true,
                    compress: {
                        drop_console: true
                    },
                    banner: jsBanner
                },
                files: {
                    'dist/player-tube.min.js': ['source/player-tube.js']
                }
            },
            main: {
                options: {
                    beautify: false,
                    sourceMap: false,
                    compress: {
                        drop_console: true
                    },
                    banner: jsBanner
                },
                files: {
                    'dist/player-tube.js': ['source/player-tube.js']
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