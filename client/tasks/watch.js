module.exports = function(grunt){
    grunt.config('watch', {

        styles: {
            files: ['assets/stylesheets/**/*.sass', 'assets/stylesheets/**/*.scss'],
            tasks: ['sass:development','postcss:development']
        },

    });
};
