'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    jsFoundation: require('./gulp/paths/js.foundation.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    app: require('./gulp/paths/app.js'),
    spritesmith: require('gulp.spritesmith')
  },
  gulp: require('gulp'),
  del: require('del'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')(),
  merge: require('merge-stream')
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

// $.gulp.task('pug', () => {
//   let locals = require('./content.json');
//
//   $.gulp.src('source/template/pages/**/*.pug')
//       .pipe(plumber())
//       .pipe(pug({
//           locals : locals,
//           pretty : true,
//       }))
//       .pipe(gulp.dest('dist'))
//       .pipe(reload({  stream : true}))
// });

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    'pug',
    'js:foundation',
    'js:process',
    'copy:image',
    'copy:fonts',
    'css:foundation',
    'sprite:svg',
    'sprite'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
