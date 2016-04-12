module.exports = function(grunt){
    grunt.config('nodemon', {

        development: {
            script: 'server.js',
            ignore: ['scripts/bundle.js']
        },

    });
};
