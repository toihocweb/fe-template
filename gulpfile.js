const gulp = require("gulp");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const autoPrefixer = require("gulp-autoprefixer");
//if node version is lower than v.0.1.2
require("es6-promise").polyfill();
const cssComb = require("gulp-csscomb");
const cmq = require("gulp-merge-media-queries");
const cleanCss = require("gulp-clean-css");
const uglify = require("gulp-uglify");
  browserSync = require("browser-sync").create(),
  reload = browserSync.reload;

const imagemin = require("gulp-imagemin");

gulp.task("scss", function() {
  return gulp
    .src(["src/scss/**/*.scss"])
    .pipe(sass())
    .pipe(autoPrefixer())
    .pipe(cssComb())
    .pipe(cmq({ log: true }))
    .pipe(gulp.dest("dist/css"))
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(cleanCss())
    .pipe(gulp.dest("dist/css"));
});


gulp.task("image", function() {
  gulp
    .src("src/img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/img"));
});

gulp.task("js", function() {
  return gulp
    .src(["src/js/**/*.js"])
    .pipe(
      plumber({
        handleError: function(err) {
          console.log(err);
          this.emit("end");
        }
      })
    )
    .pipe(gulp.dest("dist/js"))
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));
});
gulp.task("html", function() {
  gulp
    .src(["*.html"])
    .pipe(
      plumber({
        handleError: function(err) {
          console.log(err);
          this.emit("end");
        }
      })
    )
    .pipe(gulp.dest("."));
});
gulp.task("serve", function() {
  // Serve files from the root of this project
  browserSync.init({
    server: {
      baseDir: "."
    }
  });

  gulp.watch("src/js/**/*.js", gulp.series("js")).on("change", reload);
  gulp.watch("src/scss/**/*.scss", gulp.series("scss")).on("change", reload);
  gulp.watch("src/img/*", gulp.series("image")).on("change", reload);
  gulp.watch("*.html", gulp.series("html")).on("change", reload);
});
