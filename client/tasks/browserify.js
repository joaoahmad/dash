module.exports = function(grunt){
    grunt.config('browserify', {

        development: {
            files: {
                'scripts/bundle.js': ['scripts/app/index.js'],
            },
            options: {
                watch: true,
                keepAlive: true,
                transform: [
                    ['babelify', { "presets": ["es2015", "react"] }]
                ],
                plugin: ['livereactload'],
                browserifyOptions: {
                    debug: true
                }
            }
        },

        production: {
            files: {
                'scripts/bundle.js': ['js/app/index.js'],
            },
            options: {
                transform: ['babelify']
            }
        }

    });
};
