var gulp = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var cmq = require('gulp-combine-media-queries');
var minifycss = require('gulp-minify-css');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');

//compile styl to css and autoprefix
gulp.task('css-dev', function () {
	gulp.src('src/css/dev.styl')
		.pipe(plumber({
	        errorHandler: function (err) { console.log(err); this.emit('end'); }
	    }))
        .pipe(stylus())
		.pipe(autoprefixer())
		.pipe(rename('main.css'))
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.reload({stream:true}));
});

//compile all styl and autoprefix, combine media queries, and minify
gulp.task('css-prod', function() {
	gulp.src('src/css/prod.styl')
        .pipe(stylus())
		.pipe(autoprefixer())
		.pipe(cmq({ log: true }))
		.pipe(minifycss())
		.pipe(rename('main.css'))
		.pipe(gulp.dest('.tmp/css'))	
});