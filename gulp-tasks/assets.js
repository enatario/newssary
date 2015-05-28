var gulp = require('gulp');
var changed = require('gulp-changed');
// var imagemin = require('gulp-imagemin');

var src = 'src/assets/**/*';

// move assets files to prod folder
gulp.task('assets-prod', function() {
	return gulp.src(src)
		.pipe(changed('prod/assets'))
		.pipe(gulp.dest('prod/assets'));
});

//minify images
// gulp.task('assets-prod', function () {
//     return gulp.src(src)
//         .pipe(imagemin({
//             progressive: true,
//             interlaced: true
//         }))
//         .pipe(gulp.dest('prod/assets'));
// });

