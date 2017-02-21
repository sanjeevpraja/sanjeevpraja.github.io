var gulp = require('gulp');
var less = require('gulp-less');
var prettify = require('gulp-html-prettify');
var inlineCss = require('gulp-inline-css');
var plumber = require('gulp-plumber');
var path = require('path');
var mail = require('gulp-mail');
var browserSync = require('browser-sync').create();

var smtpInfo = {
  auth: {
    user: 'spr@codebee.dk',
    pass: 'ae4Xu1ga'
  },
  host: 'smtp.codebee.dk',
  secureConnection: false,
  port: 587
}


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
  .pipe(gulp.dest('dev'));
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

gulp.task('mail', function() {
  return gulp.src('dist/index.html')
  .pipe(mail({
    to: [
    'sanjeevpraja@yahoo.com', 'sanjeevpraja@gmail.com'
    ],
    from: 'ssanjeevpraja@gmail.com',
    subject: 'Email Test',
    smtp: smtpInfo
  }))
})

gulp.task('html-prettify', function() {
  gulp.src('prod/*.html')
  .pipe(prettify({indent_char: ' ', indent_size: 2}))
  .pipe(gulp.dest('dist/'))
});



gulp.task('default', ['inline'], function() {
  // place code for your default task here
});

gulp.task('watch', function() {
  browserSync.init({
    server: "./prod/"
  });
  gulp.watch('dev/**/*.less', ['less']);
  gulp.watch('dev/*.css', ['inline']);
  gulp.watch('dev/*.html', ['inline']);
  gulp.watch("prod/*.html").on('change', browserSync.reload);
});

gulp.task('clean', ['html-prettify'], function() {});
gulp.task('email', ['mail'], function() {});