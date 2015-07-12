// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');
var path = require('path');
var kit = require('gulp-kit'); 
var changed = require('gulp-changed');
var glob = require("glob")
var plumber = require('gulp-plumber');

var onError = function (err) {  
  console.log(err);
  this.emit('end');
};

// Static server
// gulp.task('browser-sync', function() {
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });
// });

gulp.task('kit', function(){
  return gulp.src('build/kit/*.kit')
  .pipe(plumber({
    errorHandler: onError
  }))
  .pipe(kit({
    paths: [ path.join(__dirname, 'build/kit', 'import') ]
  }))
  .pipe(gulp.dest('app/'))
});

gulp.task('less', function () {
  return gulp.src('build/less/*.less')
  .pipe(plumber({
    errorHandler: onError
  }))
  .pipe(sourcemaps.init())
  .pipe(changed('app/assets/css'))
  .pipe(less({
    paths: [ path.join(__dirname, 'build/less', 'includes') ]
  }))
  //.pipe(concat('all.css'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('app/assets/css'))
  .pipe(browserSync.stream());
});


// Lint Task
gulp.task('lint', function() {
  return gulp.src('build/js/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});


// Concatenate & Minify JS
gulp.task('scripts', function() {
  return gulp.src('build/js/*.js')
       // .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(rename({
          suffix: "-min",
          extname: ".js"
        }))
        .pipe(gulp.dest('app/assets/js'));
      });

//Image Optimize
gulp.task('images', function() {
  return gulp.src('build/img/**/*')
  .pipe(imagemin({
    progressive: true,
    interlaced: true,
    svgoPlugins: [{removeUnknownsAndDefaults: false}, {cleanupIDs: false}]
  }))
  .pipe(gulp.dest('app/assets/img'));
});


// Watch Files For Changes
gulp.task('watch', function() {
    // browserSync.init({
    //     server: "./app/"
    // });
gulp.watch('build/kit/**/*', ['kit']);
gulp.watch('build/img/**/*', ['images']);
gulp.watch('build/js/*.js', ['lint', 'scripts']);
gulp.watch('build/less/**/*.less', ['less']);
gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['kit', 'less', 'images', 'scripts'], function() {
  browserSync.init({
    server: "./app/"
  });
});

gulp.task('image', ['images']);

//copy custom font into asset
gulp.task('copyfont', function() {
  return gulp.src(['build/font/fontcustom/**/*']).
  pipe(gulp.dest('app/assets/font/fontcustom/'));
});