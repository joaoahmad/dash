module.exports = function(grunt){
    grunt.config('sass', {

        development: {
            options: {
                style: 'expanded'
            },
            files: [{
                expand: true,
                cwd: 'assets/stylesheets/sass',
                src: ['*.sass'],
                dest: 'assets/stylesheets',
                ext: '.css'
            }]
        },

        production: {
            options: {
                style: 'compressed'
            },
            files: [{
                expand: true,
                cwd: 'assets/stylesheets/sass',
                src: ['*.sass'],
                dest: 'assets/stylesheets',
                ext: '.css'
            }]
        }

    });
};
