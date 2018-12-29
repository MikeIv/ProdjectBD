const gulp = require("gulp");

function styles() {
  return gulp.src("./src/css/**/*.css")
    .pipe(gulp.dest("./build/css"));
}

function scripts() {

}

gulp.task("styles", styles);
gulp.task("scripts", scripts);
