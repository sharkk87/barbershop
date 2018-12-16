var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("reload-css", function () {
    return gulp.src("source/sass/style.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"));
    });

gulp.task("default", function () {
    gulp.watch("source/sass/**/*.scss", gulp.series("reload-css"))
});