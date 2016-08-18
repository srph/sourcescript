/** Directories */
var _assets	= './assets/',
	_css	= _assets + 'css/',
	_js		= _assets + 'js/',

	_src	= './src/',
	_vendor = _src + 'vendor/',
	_sass 	= _src + 'sass/';

/** Node modules */
var gulp			= require('gulp'),
	rename			= require('gulp-rename'),
	minifycss		= require('gulp-minify-css'),
	sass			= require('gulp-ruby-sass'),
	autoprefixer	= require('gulp-autoprefixer');

/** Sass Tasks */
gulp.task('sass', function () {
	function error (e) {
		console.log(e.message);
	}

	return gulp.src(_sass + 'main.scss')
		.pipe(sass({'sourcemap=none': true}))
		.on('error', error)
		// .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 11', 'ios 6', 'android 4'))
		.pipe(rename('stylesheet.css'))
		.pipe(gulp.dest(_css));
});
gulp.task('sass-min', function () {
	return gulp.src(_css + 'stylesheet.css')
		.pipe(minifycss())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(_css));
});

/** Express */
gulp.task('server', function () {
	var express = require('express'),
		app		= express();

	app.use(express.static(__dirname));
	var server = app.listen(9090, function () {
		console.log("Listening to port %d", server.address().port);
	});
});

/** Runs all tasks */
gulp.task('default', function () {
	gulp.run('sass');
	gulp.run('server');

	gulp.watch(_sass + '**/*.scss', ['sass']);
	gulp.watch(_css + 'stylesheet.css', ['sass-min']);
});