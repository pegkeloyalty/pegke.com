// include gulp
var gulp = require('gulp');

// include plug-ins
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var favicons = require("gulp-favicons");
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

// CSS concat, auto-prefix and minify
gulp.task('styles', function() {
  gulp.src(['./public/cssfull/style.css', './public/cssfull/responsive.css'])
  .pipe(concat('style.min.css'))
  .pipe(autoprefix('last 2 versions'))
  .pipe(minifyCSS())
  .pipe(gulp.dest('./public/css/'));

  gulp.src(['./bower_components/fullpage.js/jquery.fullPage.css'])
  .pipe(concat('jquery.fullPage.min.css'))
  .pipe(autoprefix('last 2 versions'))
  .pipe(minifyCSS())
  .pipe(gulp.dest('./public/css/'));

  gulp.src(['./public/css/jquery.fullPage.min.css', './public/css/style.min.css'])
  .pipe(concat('css.combined.min.css'))
  .pipe(autoprefix('last 2 versions'))
  .pipe(minifyCSS())
  .pipe(gulp.dest('./public/css/'));


  gulp.src(['./public/cssfull/prism.css'])
  .pipe(concat('prism.min.css'))
  .pipe(autoprefix('last 2 versions'))
  .pipe(minifyCSS())
  .pipe(gulp.dest('./public/css/'));


});

// Compress HeadJS to custom.
gulp.task('scripts', function() {
  gulp.src(['./public/js/head.core.alter.js', './bower_components/headjs/dist/1.0.0/head.load.js'])
    .pipe(concat('head.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/js/'));
});

// Compress all Images
gulp.task('images',  function() {
  gulp.src('./public/imgfull/*')
  .pipe(imagemin({
    progressive: true,
    optimizationLevel: 4,
    multipass: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  }))
  .pipe(gulp.dest('./public/img/'));

  gulp.src('./public/imgfull/stack/*')
  .pipe(imagemin({
    progressive: true,
    optimizationLevel: 4,
    multipass: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  }))
  .pipe(gulp.dest('./public/img/stack'));
});


// Create Favicons
gulp.task('favicon', function() {
  gulp.src("./public/favicons/pegke-logo.png").pipe(favicons({
    appName: "Pegke Loyalty",
    appDescription: "Customer Loyalty & Retention Management Software",
    background: "#020307",
    path: "/public/favicons/",
    url: "https://pegke.com/",
    display: "standalone",
    orientation: "portrait",
    version: 1.0,
    logging: false,
    online: false,
    html: "./_includes/favicons.html",
    replace: true
  })).pipe(gulp.dest("./public/favicons/"));
});

// default gulp task
gulp.task('default', ['styles', 'images'], function() {

});
