var gulp = require('gulp');
var runSequence = require('run-sequence');

// Default task to be run with `gulp`
gulp.task('default', ['dev'], function () {
    gulp.watch('src/css/*.styl', ['css-dev']);
    gulp.watch('src/data/copy.json', ['html-dev']);
    gulp.watch('src/html/**/*.hbs', ['html-dev']);
    gulp.watch('src/index.html', ['browser-sync-reload']);
    gulp.watch('src/assets/**/*', ['browser-sync-reload']);
    gulp.watch('src/js/*.js', ['browser-sync-reload']);
});

gulp.task('dev', function() {
	runSequence(
		'clean-dev',
		'css-dev',
		'html-dev',
		'browser-sync'
	);
});