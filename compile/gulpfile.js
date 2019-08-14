/*!
 * gulp
 * $ npm install
 */

// Load plugins
var gulp       = require('gulp');
var prefix     = require('gulp-autoprefixer');
var cache      = require('gulp-cache');
var concat     = require('gulp-concat-util');
var babel      = require('gulp-babel');
var livereload = require('gulp-livereload');
var cleanCss   = require('gulp-clean-css');
var notify     = require('gulp-notify');
var plumber    = require('gulp-plumber');
var rename     = require('gulp-rename');
var sass       = require('gulp-sass');
var size       = require('gulp-size');
var stripDebug = require('gulp-strip-debug');
var uglify     = require('gulp-uglify');
var util       = require('gulp-util');
var jsvalidate = require('gulp-jsvalidate');
var chalk      = require('chalk');

// Gulp config
var conf = {}

conf.assets = {
  dir : '../assets'
};

conf.templates = {
  dir : '../templates'
};

conf.styles = {
  src         : './styles/site.scss',
  files       : './styles/**/*.scss',
  dest        : conf.assets.dir + '/css',
  outputFile  : 'site.css',
  outputStyle : 'expanded'
};

conf.scripts = {
  src        : './scripts/**/*.js',
  dest       : conf.assets.dir + '/js',
  outputFile : 'site.js'
};

var displayError = function(err) {
  var errorString = (
    "\n\n" +
    chalk.red((err.name ? err.name : 'Error') + ':') +
    (err.lineNumber ? ' on line ' + chalk.bold(err.lineNumber) : '') +
    (err.fileName   ? ' in file ' + chalk.bold(err.fileName)   : '') +
    "\n\n" +
    (err.codeFrame ? "\n" + err.codeFrame + "\n\n" : "\n\n") +
    (err.message ? chalk.dim(err.message) + "\n\n" : '')
  );

  util.log(errorString);
};

// Styles
gulp.task('styles', function() {

  // Fetch the contents of the source file
  gulp.src(conf.styles.src)

  // Compile the SASS to a CSS buffer
  .pipe(sass({
    outputStyle : conf.styles.outputStyle
  }))

  // Catch any errors and forward to the logger
  .on('error', displayError)

  // Preform prefixing within the CSS
  .pipe(prefix('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))

  // Dump the CSS buffer into the destination file
  .pipe(rename(conf.styles.outputFile))
  .pipe(size({ gzip: false, showFiles: true })) // Log the file buffer size
  .pipe(gulp.dest(conf.styles.dest))

  // Dump a compressed buffer into a min file
  .pipe(rename({ suffix: '.min' }))
  .pipe(cleanCss({compatibility: 'ie9'}))
  .pipe(size({ gzip: false, showFiles: true })) // Log the file buffer size
  .pipe(gulp.dest(conf.styles.dest))

  // Growl notification
  .pipe(notify({ message: 'Styles task complete' }));

});

// Scripts
gulp.task('scripts', function() {

  // Fetch the contents of the source file
  gulp.src(conf.scripts.src)

  // Combine all of the source files together
  .pipe(concat(conf.scripts.outputFile))

  // Run the file through Babel (for ES6 goodiness)
  .pipe(babel())
  .on('error', displayError)

  .pipe(concat.header('(function(parent) {\n'))
  .pipe(concat.footer('})(this);'))

  .pipe(gulp.dest(conf.scripts.dest))

  // Dump a compressed buffer into a min file
  .pipe(rename({ suffix: '.min' }))
  .pipe(uglify())
  .on('error', displayError)
  .pipe(gulp.dest(conf.scripts.dest))
  .pipe(size({gzip: false, showFiles: true}))

  // Growl notification
  .pipe(notify({ message: 'Scripts task complete' }));

});

// Default task
gulp.task('default', function() {
  gulp.start('styles', 'scripts');
});

// Watch
gulp.task('watch', function() {
  gulp.start('styles', 'scripts'); // Run initially incase changes have been made.

  // Watch .scss files
  gulp.watch(conf.styles.files, ['styles']);

  // Watch .js files
  gulp.watch(conf.scripts.src, ['scripts']);

  // Watch image files - will eventually setup image optimization
  // gulp.watch('images/**/*', ['images']);

  // Create LiveReload server
  livereload.listen();

  // Watch any files in ../www/assets/, reload on change
  gulp.watch(conf.assets.dir + '/**').on('change', livereload.changed);
  gulp.watch(conf.templates.dir + '/**').on('change', livereload.changed);

});
