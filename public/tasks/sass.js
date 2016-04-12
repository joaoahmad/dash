module.exports = function(grunt){
    grunt.config('sass', {

        development: {
            options: {
                style: 'expanded'
            },
            files: [{
                expand: true,
                cwd: 'css/sass',
                src: ['*.sass'],
                dest: 'css',
                ext: '.css'
            }]
        },

        production: {
            options: {
                style: 'compressed'
            },
            files: [{
                expand: true,
                cwd: 'css/sass',
                src: ['*.sass'],
                dest: 'css',
                ext: '.css'
            }]
        }

    });
};
