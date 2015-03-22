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
    gulp = require('gulp');

var less_files = [
    'bower_components/bootstrap/less/variables.less',
    'bower_components/bootstrap/less/*.less',
    'cwd/assets/less/*.less',
    ]

//Include - includes html snippets
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


//contact js -   
gulp.task('js', function() {
  return gulp.src(mainBowerFiles())
    // .pipe(jshint())
    // .pipe(jshint.reporter('default'))
    .pipe(concat('main.js', {newLine: ';'}))
    .pipe(uglify())
    .pipe(gulp.dest('render/assets/js/'));
});

gulp.task('less', function() {
   gulp.src(less_files).pipe(concat('skin.css')).pipe(less()).pipe(minifyCSS({keepBreaks:true})).pipe(gulp.dest('render/'));
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

//Accesiblily Role - WIP
gulp.task('aria', function () {
    gulp.src('render/**/*.html')
      .pipe(arialinter({
        level: 'AA'
      }))
      .pipe(gulp.dest('render/'));
});

gulp.task('default', ['clean'], function() {
   gulp.start('include','js','less');
});