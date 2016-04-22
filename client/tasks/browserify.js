module.exports = function(grunt){
    grunt.config('browserify', {

        development: {
            files: {
                'scripts/bundle.js': ['scripts/app/index.js'],
            },
            options: {
                watch: true,
                keepAlive: true,
                plugin: ['livereactload'],
                browserifyOptions: {
                    debug: true,
                    extensions: ['.js']
                },
                transform: [
                    ['babelify', { "presets": ["es2015", "react"] }]
                ]
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
