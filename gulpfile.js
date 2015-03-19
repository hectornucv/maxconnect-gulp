'use strict';
var 
  fileinclude = require('gulp-file-include'),
  gulp = require('gulp');

gulp.task('include', function() {
  gulp.src(['cwd/templates/pages/*'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: 'cwd/'
    }))
    .pipe(gulp.dest('./render/templates/pages/'));
  gulp.src(['cwd/templates/collections/*'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: 'cwd/'
    }))
    .pipe(gulp.dest('./render/templates/collections/'));
  gulp.src(['cwd/templates/emails/*'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: 'cwd/'
    }))
    .pipe(gulp.dest('./render/templates/emails/'));
  gulp.src(['cwd/templates/layouts/*'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: 'cwd/'
    }))
    .pipe(gulp.dest('./render/templates/layouts/'));
});





gulp.task('default', ['include']);
