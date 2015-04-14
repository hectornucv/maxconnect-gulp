'use strict';
var 
    gulp = require('gulp'),
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
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync'),
    debug = require('gulp-debug'),
    size = require('gulp-size'),
    notify = require('gulp-notify'),
    gutil = require('gulp-util'),
    cached = require('gulp-cached'),
    plumber = require('gulp-plumber'),
    reload = browserSync.reload;

var less_files = [
    'bower_components/bootstrap/less/variables.less',
    'bower_components/bootstrap/less/*.less',
    'cwd/assets/less/*.less'
    ]
var html_files = [
    'render/templates/pages/*.html',
    'render/templates/collections/*.html',
    'render/templates/emails/*.html',
    'render/templates/layouts/*.html'
]
var js_files = [
    'bower_components/jquery/dist/jquery.js',
    'bower_components/jqueryui/jquery-ui.js',
    'bower_components/bootstrap/dist/js/bootstrap.js',
    'bower_components/jquery-selectboxit/src/javascripts/jquery.selectBoxIt.js',
    'bower_components/modernizr/modernizr.js',
    'cwd/assets/js/main.js'

]

var onError = function (err) {  
  gutil.beep();
  console.log(err);
};

/*======================================
=            HTML - includes          =
======================================*/

gulp.task('include', function() {
  gulp.src(['cwd/templates/pages/*'])

    .pipe(plumber())
  
    .pipe(fileinclude({
      prefix: '@@',
      basepath: 'cwd/includes/'
    }))
    .pipe(gulp.dest('./render/templates/pages/'))
       .pipe(reload({ stream:true }));
  gulp.src(['cwd/templates/collections/*'])

    .pipe(plumber())
  
    .pipe(fileinclude({
      prefix: '@@',
      basepath: 'cwd/includes/'
    }))
    .pipe(gulp.dest('./render/templates/collections/'))
       .pipe(reload({ stream:true }));
  gulp.src(['cwd/templates/emails/*'])

    .pipe(plumber())
  
    .pipe(fileinclude({
      prefix: '@@',
      basepath: 'cwd/includes/'
    }))
    .pipe(gulp.dest('./render/templates/emails/'))
       .pipe(reload({ stream:true }));
  gulp.src(['cwd/templates/layouts/*'])

    .pipe(plumber())
  
    .pipe(fileinclude({
      prefix: '@@',
      basepath: 'cwd/includes/'
    }))
    .pipe(gulp.dest('./render/templates/layouts/'))
       .pipe(reload({ stream:true }));
});

/*======================================
=            Convert JS         =
======================================*/
var all_js = mainBowerFiles();
all_js.push('cwd/assets/js/main.js');
console.log(all_js);
gulp.task('js', function() {
  return gulp.src(all_js)
    .pipe(concat('main.js', {newLine: ' '}))
    .pipe(debug({title: 'js:'}))
    
    .pipe(gulp.dest('render/assets/js/'))
    .pipe(reload({ stream:true }));
});

/*======================================
=            Convert Less          =
======================================*/

gulp.task('less', function() {
   return gulp.src(less_files)
   .pipe(concat('skin.css'))

  .pipe(less().on('error', function(err){
        gutil.log(err);
        this.emit('end');
    }))

   .pipe(autoprefixer({
             browsers: [
            'last 2 versions', 'ie 8', 'ie 9', 'android 2.3', 'android 4','opera 12'],
            cascade: false
    }))
   .pipe(gulp.dest('render/'))
   .pipe(reload({ stream:true }))
});

/*======================================
=            Minifying Task            =
======================================*/

gulp.task('minify-js', function() {
  return gulp.src('render/assets/js/main.js')
  .pipe(uglify())
  .pipe(debug({title: 'minify-js:'}))
  .pipe(gulp.dest('render/assets/js/'));
});

gulp.task('minify-css', function() {
    return gulp.src('render/skin.css')
   .pipe(minifyCSS({keepBreaks:false}))
   .pipe(gulp.dest('render/'));
});

gulp.task('imagemin', function() {
   return gulp.src('cwd/assets/images/*')
        .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))) 
        .pipe(gulp.dest('render/assets/images/'))
        .pipe(size({showFiles: true}))
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

/*===============================
=            Watcher            =
===============================*/

gulp.task('watcher', ['include', 'less', 'js', 'imagemin','fonts'], function() {

    browserSync({
        server: "./render/",
        index: "/templates/layouts/blog.html"
    });

   gulp.watch("cwd/assets/less/*.less", ['less']).on('error', gutil.log);
   gulp.watch("cwd/**/*.html", ['include']);
   gulp.watch("cwd/assets/images/*", ['imagemin']);
   gulp.watch("cwd/assets/js/*.js", ['js']);

});
/*===============================
=           Move Folders         =
===============================*/

var fonts = [
        'bower_components/bootstrap/fonts/*'
    ];

gulp.task('fonts', function(){
  // the base option sets the relative root for the set of files,
  // preserving the folder structure
  gulp.src(fonts)
  .pipe(gulp.dest('render/fonts'));
});


/*======================================
=            Cleaner Calls             =
======================================*/

  gulp.task('clear', function (done) {
    return cache.clearAll(done);
  });

  gulp.task('clean', function(cb) {
      del(['./render/*'], cb);
  });

/*=====================================
=            Task Runners             =
=====================================*/

gulp.task('prod', ['include', 'imagemin', 'js', 'less', 'minify-js', 'minify-css']);

gulp.task('default', ['include', 'less', 'js', 'imagemin','fonts']);

gulp.task('watch', ['watcher']);






