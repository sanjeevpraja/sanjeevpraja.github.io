var gulp = require('gulp');
var less = require('gulp-less');
var inlineCss = require('gulp-inline-css');
var plumber = require('gulp-plumber');
var path = require('path');
var browserSync = require('browser-sync').create();

var onError = function (err) {
  console.log(err);
  this.emit('end');
};

gulp.task('less', function () {
  return gulp.src('dev/**/*.less')
  .pipe(plumber({
    errorHandler: onError
  }))
  .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
  .pipe(gulp.dest('dev'))
});


gulp.task('inline', function() {
    return gulp.src(['dev/*.html'])
        .pipe(plumber({
            errorHandler: onError
          }))
        .pipe(inlineCss({
            applyStyleTags: true,
            applyLinkTags: true,
            removeStyleTags: true,
            removeLinkTags: true,
            removeHtmlSelectors: true,
            removeLinkTags: true
        }))
        .pipe(gulp.dest('prod/'));
});

gulp.task('default', ['inline'], function() {
  // place code for your default task here
});

gulp.task('watch', function() {
    browserSync.init({
    server: "./prod/"
  });
  gulp.watch('dev/**/*.less', ['less']);
  gulp.watch('dev/*.html', ['inline']);
   gulp.watch('dev/*.css', ['inline']);
  gulp.watch("prod/*.html").on('change', browserSync.reload);
});