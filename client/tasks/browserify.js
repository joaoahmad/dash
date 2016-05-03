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
                    ['babelify', { "presets": ["es2015", "react"] }],
                    ['sassify', { 'auto-inject': true, base64Encode: false, sourceMap: false }]
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
