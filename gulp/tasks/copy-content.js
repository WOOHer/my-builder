'use strict';

module.exports = function() {
    $.gulp.task('pug', () => {
        let locals = require('./content.json');

    $.gulp.src('source/template/pages/**/*.pug')
        .pipe(plumber())
        .pipe(pug({
            locals : locals,
            pretty : true,
        }))
        .pipe(gulp.dest('dist'))
        .pipe(reload({  stream : true}))
    });
};