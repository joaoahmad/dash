module.exports = function(grunt){
    grunt.config('watch', {

        styles: {
            files: ['assets/stylesheets/sass/**/*.sass', 'assets/stylesheets/sass/**/*.scss'],
            tasks: ['sass:development','postcss:development']
        },

    });
};
