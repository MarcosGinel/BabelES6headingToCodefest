const gulp = require('gulp');
const livereload = require('gulp-livereload');
const babel = require('gulp-babel');

// Pathfiles
var DIST_PATH = 'public/dist';
var SCRIPTS_PATH = 'public/scripts/**/*.js';
var CSS_PATH = 'public/css/**/*.css';

gulp.task('scripts', function() {
  return gulp.src('public/scripts/*.js')
            .pipe(babel({
                presets: ['es2015']
            }))
            .pipe(gulp.dest(DIST_PATH))
            .pipe(livereload());
});

gulp.task('watch', function() {
  require('./server.js');
  livereload.listen();
  gulp.watch(SCRIPTS_PATH, ['scripts']);
});

gulp.task('default', ['scripts', 'watch'], function() { });
