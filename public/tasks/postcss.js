module.exports = function(grunt){
    grunt.config('postcss', {

        development: {
            options: {
                map: false,
                processors: [
                    require('pixrem')(),
                    require('autoprefixer-core')({browsers: '> 1%, last 2 versions, Firefox ESR, Opera 12.1'}),
                ]
            },
            files: {
                src: 'css/main.css'
            }
        },
        production: {
            options: {
                map: false,
                processors: [
                    require('pixrem')(),
                    require('autoprefixer-core')({browsers: '> 1%, last 2 versions, Firefox ESR, Opera 12.1'}),
                    require('cssnano')() // minify the result
                ]
            },
            files: {
                src: 'css/main.css'
            }
        }

    });
};
