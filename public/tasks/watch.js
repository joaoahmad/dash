module.exports = function(grunt){
    grunt.config('watch', {

        styles: {
            files: ['css/sass/**/*.sass', 'css/sass/**/*.scss'],
            tasks: ['sass:dev','postcss:dev']
        },

    });
};
