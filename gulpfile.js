'use strict';
var 
  fileinclude = require('gulp-file-include'),
    del = require('del'),
   concat = require('gulp-concat'),
  gulp = require('gulp');


//Include - includes html snippets
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

//Clean - delete everthing in render
gulp.task('clean', function(cb) {
    del(['./render/*'], cb)
});


//contact js -  
 
gulp.task('scripts', function() {
  return gulp.src('bower_components/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('render/assets/js/'));
});


gulp.task('default', ['clean'], function() {
   gulp.start('include','scripts');
});