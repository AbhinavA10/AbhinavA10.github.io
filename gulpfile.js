"use strict";

// Load plugins
const autoprefixer = require("gulp-autoprefixer");
const browsersync = require("browser-sync").create();
const cleanCSS = require("gulp-clean-css");
const del = require("del");
const gulp = require("gulp");
const header = require("gulp-header");
const merge = require("merge-stream");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
var nunjucksRender = require('gulp-nunjucks-render');

// Set the banner content - the comment at the top of built files
const banner = ['/*!\n',
  ' * Start Bootstrap - Agency \n',
  ' * By BlackRockDigital and Abhinav Agrahari\n',
  ' */\n',
  '\n'
].join('');

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./"
    },
    port: 3000
  });
  done();
}

// BrowserSync reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Clean vendor
function clean() {
  return del(["./vendor/"]);
}

// Bring third party dependencies from node_modules into vendor directory
function modules() {
  // Bootstrap
  var bootstrap = gulp.src('./node_modules/bootstrap/dist/**/*')
    .pipe(gulp.dest('./vendor/bootstrap'));
  // Font Awesome CSS -- version 5 not used right now
  var fontAwesomeCSS = gulp.src('./node_modules/@fortawesome/fontawesome-free/css/**/*')
    .pipe(gulp.dest('./vendor/fontawesome-free/css'));
  // Font Awesome Webfonts -- version 5 not used right now 
  var fontAwesomeWebfonts = gulp.src('./node_modules/@fortawesome/fontawesome-free/webfonts/**/*')
    .pipe(gulp.dest('./vendor/fontawesome-free/webfonts'));
  // Font Awesome Files, Version 4.
  var fontAwesomeVer4 = gulp.src([
    './node_modules/font-awesome/**/*',
    '!./node_modules/font-awesome/{less,less/*}',
    '!./node_modules/font-awesome/{scss,scss/*}',
    '!./node_modules/font-awesome/.*',
    '!./node_modules/font-awesome/*.{txt,json,md}'
  ])
    .pipe(gulp.dest('./vendor/font-awesome'))

  // jQuery Easing
  var jqueryEasing = gulp.src('./node_modules/jquery.easing/*.js')
    .pipe(gulp.dest('./vendor/jquery-easing'));
  return merge(bootstrap, fontAwesomeCSS, fontAwesomeWebfonts, fontAwesomeVer4, jqueryEasing);
}

// CSS task
function css() {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(plumber())
    .pipe(sass({
      outputStyle: "expanded",
      includePaths: "./node_modules",
    }))
    .on("error", sass.logError)
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(header(banner))
    .pipe(gulp.dest("./css"))
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./css"))
    .pipe(browsersync.stream());
}

// Convert nunjucks files to full html
function nunjucks() {
  return gulp.src('src/pages/*.njk') // the files to 'render'
    .pipe(nunjucksRender({
      path: ['src/templates/', 'src/templates/partials', 'src/templates/projects'] // String or Array, path to templates. This is where nunjucks searches for includes
    }))
    .pipe(gulp.dest('./')); // in a folder for now, but will have to change this
}

// JS task
function js() {
  return gulp
    .src([
      './js/*.js',
      '!./js/*.min.js',
      '!./js/contact_me.js',
      '!./js/jqBootstrapValidation.js'
    ])
    .pipe(uglify())
    .pipe(header(banner))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./js'))
    .pipe(browsersync.stream());
}

// Watch files
function watchFiles() {
  gulp.watch("./scss/**/*", css);
  gulp.watch(["./js/**/*", "!./js/**/*.min.js"], js);
  gulp.watch("./src/**/*.njk", nunjucks);
  gulp.watch("./**/*.html", browserSyncReload);
}

// Define complex tasks
const vendor = gulp.series(clean, modules);
const build = gulp.series(vendor, gulp.parallel(css, js, nunjucks));
const watch = gulp.series(build, gulp.parallel(watchFiles, browserSync));

// Export tasks
exports.css = css;
exports.nunjucks = nunjucks;
exports.js = js;
exports.clean = clean;
exports.vendor = vendor;
exports.build = build;
exports.watch = watch;
exports.modules = modules;
exports.default = build;
