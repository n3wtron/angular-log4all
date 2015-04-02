var gulp = require('gulp');
var concat = require('gulp-concat')
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var del = require('del');

gulp.task('clean', function() {
	return del(['dist/*']);
});

gulp.task('make', function() {
	gulp.src([
		'src/admin/Log4AllAdminService.js',
		'src/admin/Log4AllApplicationService.js',
		'src/admin/Log4AllAuthService.js',
		'src/admin/Log4AllGroupService.js',
		'src/admin/Log4AllUserService.js'])
		.pipe(concat('log4AllAdminService.js'))
		.pipe(gulp.dest('./dist'))
		.pipe(uglify({mangle: false}))
		.pipe(rename({extname:".min.js"}))
		.pipe(gulp.dest('./dist'));
	gulp.src(['src/log4AllService.js'])
		.pipe(concat('log4AllService.js'))
		.pipe(gulp.dest('./dist'))
		.pipe(uglify())
		.pipe(rename({extname:".min.js"}))
		.pipe(gulp.dest('./dist'));
});

gulp.task('default', ['clean','make']);

