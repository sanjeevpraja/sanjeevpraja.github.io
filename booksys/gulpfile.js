// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var scss = require('gulp-sass');
var path = require('path');
var kit = require('gulp-kit'); 
var changed = require('gulp-changed');
var glob = require("glob");
var plumber = require('gulp-plumber');

var onError = function (err) {  
	console.log(err);
	this.emit('end');
};


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

gulp.task('scss', function () {
  return gulp.src('build/scss/*.scss')
  .pipe(plumber({
    errorHandler: onError
  }))
  .pipe(sourcemaps.init())
  .pipe(changed('app/assets/css'))
  .pipe(scss({
    paths: [ path.join(__dirname, 'build/scss', 'includes') ]
  }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('app/assets/css'))
  .pipe(browserSync.stream());
});



// Lint Task
gulp.task('lint', function() {
	return gulp.src('build/js/*.js')
	.pipe(plumber({
		errorHandler: onError
	}))
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});


// Concatenate & Minify JS
gulp.task('scripts', function() {
	return gulp.src('build/js/*.js')
       // .pipe(concat('all.js'))
       .pipe(plumber({
       	errorHandler: onError
       }))
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
	.pipe(plumber({
		errorHandler: onError
	}))
	.pipe(imagemin({
		progressive: true,
		interlaced: true,
		svgoPlugins: [{removeUnknownsAndDefaults: false}, {cleanupIDs: false}]
	}))
	.pipe(gulp.dest('app/assets/img'));
});


// Watch Files For Changes
gulp.task('watch', function() {
	browserSync.init({
		server: "./app/"
	});
	gulp.watch('build/scss/**/*.scss', ['scss']);
	gulp.watch('build/kit/**/*', ['kit']);
	gulp.watch('build/img/**/*', ['images']);
	gulp.watch('build/js/*.js', ['lint', 'scripts']);
	gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['kit', 'scss', 'images', 'scripts'], function() {
	browserSync.init({
		server: "./app/"
	});
});

gulp.task('image', ['images']);

