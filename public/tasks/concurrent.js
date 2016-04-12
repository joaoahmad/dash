module.exports = function(grunt){
    grunt.config('concurrent', {

        development: {
            tasks: ['nodemon:development', 'browserify:development'],
            options: {
                logConcurrentOutput: true
            }
        },

    });
};
