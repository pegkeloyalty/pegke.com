// include gulp
var gulp = require('gulp');

// include plug-ins
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var favicons = require("gulp-favicons");

var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

// CSS concat, auto-prefix and minify
gulp.task('styles', function() {
  gulp.src(['./public/cssfull/404.css', './public/cssfull/style.css', './public/cssfull/responsive.css'])
  .pipe(concat('style.min.css'))
  .pipe(autoprefix('last 2 versions'))
  .pipe(minifyCSS())
  .pipe(gulp.dest('./public/css/'));
});



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
