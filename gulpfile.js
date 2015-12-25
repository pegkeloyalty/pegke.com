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

// default gulp task
gulp.task('default', ['styles'], function() {

});

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

// Build SUI
gulp.task('semantic', function() {
  var semanticcss = [
    './bower_components/semantic/dist/components/reset.css',
    './bower_components/semantic/dist/components/site.css',
    './bower_components/semantic/dist/components/accordion.css',
    './bower_components/semantic/dist/components/button.css',
    './bower_components/semantic/dist/components/card.css',
    './bower_components/semantic/dist/components/checkbox.css',
    './bower_components/semantic/dist/components/container.css',
    './bower_components/semantic/dist/components/dimmer.css',
    './bower_components/semantic/dist/components/divider.css',
    './bower_components/semantic/dist/components/dropdown.css',
    './bower_components/semantic/dist/components/embed.css',
    './bower_components/semantic/dist/components/flag.css',
    './bower_components/semantic/dist/components/form.css',
    './bower_components/semantic/dist/components/grid.css',
    './bower_components/semantic/dist/components/header.css',
    './bower_components/semantic/dist/components/icon.css',
    './bower_components/semantic/dist/components/image.css',
    './bower_components/semantic/dist/components/input.css',
    './bower_components/semantic/dist/components/item.css',
    './bower_components/semantic/dist/components/label.css',
    './bower_components/semantic/dist/components/list.css',
    './bower_components/semantic/dist/components/loader.css',
    './bower_components/semantic/dist/components/menu.css',
    './bower_components/semantic/dist/components/message.css',
    './bower_components/semantic/dist/components/modal.css',
    './bower_components/semantic/dist/components/popup.css',
    './bower_components/semantic/dist/components/rail.css',
    './bower_components/semantic/dist/components/rating.css',
    './bower_components/semantic/dist/components/segment.css',
    './bower_components/semantic/dist/components/statistic.css',
    './bower_components/semantic/dist/components/sticky.css',
    './bower_components/semantic/dist/components/step.css',
    './bower_components/semantic/dist/components/shape.css',
    './bower_components/semantic/dist/components/state.css',
    './bower_components/semantic/dist/components/transition.css',
    './bower_components/semantic/dist/components/visibility.css',
  ];

  var semanticjs = [
    './bower_components/jquery/dist/jquery.min.js',
    './bower_components/semantic/dist/components/reset.js',
    './bower_components/semantic/dist/components/site.js',
    './bower_components/semantic/dist/components/accordion.js',
    './bower_components/semantic/dist/components/button.js',
    './bower_components/semantic/dist/components/card.js',
    './bower_components/semantic/dist/components/checkbox.js',
    './bower_components/semantic/dist/components/container.js',
    './bower_components/semantic/dist/components/dimmer.js',
    './bower_components/semantic/dist/components/divider.js',
    './bower_components/semantic/dist/components/dropdown.js',
    './bower_components/semantic/dist/components/embed.js',
    './bower_components/semantic/dist/components/flag.js',
    './bower_components/semantic/dist/components/form.js',
    './bower_components/semantic/dist/components/grid.js',
    './bower_components/semantic/dist/components/header.js',
    './bower_components/semantic/dist/components/icon.js',
    './bower_components/semantic/dist/components/image.js',
    './bower_components/semantic/dist/components/input.js',
    './bower_components/semantic/dist/components/item.js',
    './bower_components/semantic/dist/components/label.js',
    './bower_components/semantic/dist/components/list.js',
    './bower_components/semantic/dist/components/loader.js',
    './bower_components/semantic/dist/components/menu.js',
    './bower_components/semantic/dist/components/message.js',
    './bower_components/semantic/dist/components/modal.js',
    './bower_components/semantic/dist/components/popup.js',
    './bower_components/semantic/dist/components/rail.js',
    './bower_components/semantic/dist/components/rating.js',
    './bower_components/semantic/dist/components/segment.js',
    './bower_components/semantic/dist/components/statistic.js',
    './bower_components/semantic/dist/components/sticky.js',
    './bower_components/semantic/dist/components/step.js',
    './bower_components/semantic/dist/components/shape.js',
    './bower_components/semantic/dist/components/state.js',
    './bower_components/semantic/dist/components/transition.js',
    './bower_components/semantic/dist/components/visibility.js',
  ];

  var customsite = [
    './public/cssfull/style.css',
    './public/cssfull/responsive.css'
  ];
  var fullpagecss = ['./bower_components/fullpage.js/jquery.fullPage.css'];

  var prismcss = ['./public/cssfull/prism.css'];

  var pegkefront = semanticcss.concat(customsite).concat(fullpagecss);

  // Build Frontpage Css
  gulp.src(pegkefront)
  .pipe(concat('pegke-front.min.css'))
  .pipe(autoprefix('last 2 versions'))
  .pipe(minifyCSS({processImport: false}))
  .pipe(gulp.dest('./public/css/'));

  var apipage = semanticcss.concat(customsite).concat(prismcss);
  // Build Frontpage Css
  gulp.src(apipage)
  .pipe(concat('pegke-api.min.css'))
  .pipe(autoprefix('last 2 versions'))
  .pipe(minifyCSS({processImport: false}))
  .pipe(gulp.dest('./public/css/'));

  var otherpage = semanticcss.concat(customsite);
  // Build Frontpage Css
  gulp.src(otherpage)
  .pipe(concat('pegke-page.min.css'))
  .pipe(autoprefix('last 2 versions'))
  .pipe(minifyCSS({processImport: false}))
  .pipe(gulp.dest('./public/css/'));

  var frontjs = [
    './bower_components/fullpage.js/jquery.fullPage.min.js',
    './bower_components/fullpage.js/vendors/jquery.slimscroll.min.js'
  ];

  var apijs = [
    './public/js/scrollspy.js',
    './public/js/prism.min.js'
  ];
  var frontjss = semanticjs.concat(frontjs);

  gulp.src(frontjss)
  .pipe(concat('semanticjs.front.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./public/js/'));

  var apijss = semanticjs.concat(apijs);

  gulp.src(apijss)
  .pipe(concat('semanticjs.api.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./public/js/'));


  gulp.src(semanticjs)
  .pipe(concat('semanticjs.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./public/js/'));

});
