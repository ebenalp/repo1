
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        manifest: {
            generate: {
                options: {
                    basePath: 'dist',
                    network: ['*'],
                    exclude: ['node_modules/*'],
                    preferOnline: true,
                    verbose: true,
                    timestamp: true,
                    hash: true,
                    master: ['index.html']
                },
                src: [
                    '*.html',
                    'js/**/*.js',
                    'config/**/*.json',
                    'img/**/*.*',
                    'styles/**/*.*',
                    'images/**/*.*'
                ],
                dest: 'dist/manifest.appcache'
            }
        } ,
        remove: {
            options: {
                trace: true
            },
            fileList: ['**'],
            dirList: ['dist']
        },
        copy: {
            php: {
                expand: true,
                cwd: 'php',
                src: '**',
                dest: 'dist/php',
                flatten: false

            },
            server: {
                expand: true,
                cwd: 'server',
                src: '**',
                dest: 'dist/server',
                flatten: false

            },
            js: {
                expand: true,
                cwd: 'js',
                src: '**',
                dest: 'dist/js',
                flatten: false

            },
            styles: {
                expand: true,
                cwd: 'styles',
                src: '**',
                dest: 'dist/styles',
                flatten: false

            },
            config: {
                expand: true,
                cwd: 'config',
                src: ['**'],
                dest: 'dist/config',
                flatten: false

            },
            media: {
                expand: true,
                cwd: 'media',
                src: ['**/*.xml'],
                dest: 'dist/media',
                flatten: false

            },
            html: {

                expand: true,
                cwd: '.',
                src: ['index.html','manifest.appcache'],
                dest: 'dist/',
                flatten: false

            }
        }


    });


    grunt.loadNpmTasks('grunt-manifest');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-remove');

    grunt.registerTask(
        'deploy',
        'Compiles all of the assets and copies the files to the build directory.',
        ['copy:js','copy:html','copy:styles','copy:config','copy:php','copy:media','copy:server','manifest']
    );



    grunt.registerTask(
        'mani',
        ['manifest' ]
    );


};