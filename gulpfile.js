// include gulp
var gulp = require('gulp');

// include plug-ins
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');


// CSS concat, auto-prefix and minify
gulp.task('styles', function() {
  gulp.src(['./public/cssfull/404.css', './public/cssfull/style.css', './public/cssfull/responsive.css'])
  .pipe(concat('style.min.css'))
  .pipe(autoprefix('last 2 versions'))
  .pipe(minifyCSS())
  .pipe(gulp.dest('./public/css/'));
});

var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

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

// default gulp task
gulp.task('default', ['styles', 'images'], function() {

});
