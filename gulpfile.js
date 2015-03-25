'use strict';
var 
    fileinclude = require('gulp-file-include'),
    del = require('del'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    mainBowerFiles = require('main-bower-files'),
    jshint = require('gulp-jshint'),
    less = require('gulp-less'),
    minifyCSS = require('gulp-minify-css'),
    arialinter = require('gulp-arialinter'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    jpegtran = require('imagemin-jpegtran'),
    autoprefixer = require('gulp-autoprefixer'),
    w3cjs = require('gulp-w3cjs'),
    through2 = require('through2'),
    gulp = require('gulp');

var less_files = [
    'bower_components/bootstrap/less/variables.less',
    'bower_components/bootstrap/less/*.less',
    'cwd/assets/less/*.less',
    ]
var html_files = [
'render/templates/pages/*.html',
'render/templates/collections/*.html',
'render/templates/emails/*.html',
'render/templates/layouts/*.html']

/*======================================
=            HTML - includes          =
======================================*/
gulp.task('include', function() {
  gulp.src(['cwd/templates/pages/*'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: 'cwd/includes/'
    }))
    .pipe(gulp.dest('./render/templates/pages/'));
  gulp.src(['cwd/templates/collections/*'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: 'cwd/includes/'
    }))
    .pipe(gulp.dest('./render/templates/collections/'));
  gulp.src(['cwd/templates/emails/*'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: 'cwd/includes/'
    }))
    .pipe(gulp.dest('./render/templates/emails/'));
  gulp.src(['cwd/templates/layouts/*'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: 'cwd/includes/'
    }))
    .pipe(gulp.dest('./render/templates/layouts/'));
});

//Clean - delete everthing in render
gulp.task('clean', function(cb) {
    del(['./render/*'], cb)
});

/*======================================
=            Convert JS         =
======================================*/
gulp.task('js', function() {
  return gulp.src(mainBowerFiles())
    // .pipe(jshint())
    // .pipe(jshint.reporter('default'))
    .pipe(concat('main.js', {newLine: ';'}))
    .pipe(uglify())
    .pipe(gulp.dest('render/assets/js/'));
});

/*======================================
=            Convert Less          =
======================================*/

gulp.task('less', function() {
   return gulp.src(less_files)
   .pipe(concat('skin.css'))
   .pipe(less())
   .pipe(autoprefixer({
             browsers: [
            'last 2 versions', 'ie 8', 'ie 9', 'android 2.3', 'android 4','opera 12'],
            cascade: false
    }))
   .pipe(gulp.dest('render/'));
});

/*======================================
=            Minifying Task            =
======================================*/

gulp.task('minify-js', function() {
  return gulp.src('render/assets/js/main.js')
  .pipe(uglify())
  .pipe(gulp.dest('render/assets/js/'));
});
gulp.task('minify-less', function() {
    return gulp.src('render/skin.css')
   .pipe(minifyCSS({keepBreaks:true}))
   .pipe(gulp.dest('render/'));
});

gulp.task('imagemin', function() {
   return gulp.src('cwd/assets/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant(),jpegtran()]
        }))
        .pipe(gulp.dest('render/assets/images/'));
});
/*=====================================
=        Testing Tasks  w3c ,js       =
=====================================*/
gulp.task('html-lint', function () {
    gulp.src(html_files)
        .pipe(w3cjs())
        .pipe(through2.obj(function(file, enc, cb){
            cb(null, file);
            if (!file.w3cjs.success){
              throw new Error('HTML validation error(s) found');
            }
        }));
});







/*======================================
=      Accesiblily Role - WIP          =
======================================*/
gulp.task('aria', function () {
    gulp.src('render/**/*.html')
      .pipe(arialinter({
        level: 'AA'
      }))
      .pipe(gulp.dest('render/'));
});

gulp.task('prod', ['clean'], function() {
   gulp.start('include','js','less','minify-js','minify-less','imagemin');
});

gulp.task('default', ['clean'], function() {
   gulp.start('include','js','less','html-lint');
});








