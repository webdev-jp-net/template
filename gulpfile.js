const gulp = require("gulp");

const rimraf = require('rimraf');
const deleteEmpty = require('delete-empty');

const browserSync = require("browser-sync");

// Server
// --------------------
gulp.task("server", cb => {
  browserSync.init({
    port: 8080,
    weinre: {
      port: 9090
    },
    ui: false,
    open: "external",
    notify: false,
    server: {
      baseDir: `preview`,
      index: [`index.html`]
    }
  });
  cb();
});

// Clean
// --------------------
gulp.task("clean:preview", cb => {
  rimraf(`preview/*`, cb);
});

// Copy
// --------------------
gulp.task("copy:static", () =>
  gulp
    .src([`static/**/*.*`])
    .pipe(gulp.dest(`preview`))
    .pipe(browserSync.stream())
);

// html
// --------------------
gulp.task("html", () => {
  deleteEmpty.sync(`preview`);
  return gulp
    .src([`src/html/**/*.html`])
    .pipe(gulp.dest(`preview`))
    .pipe(browserSync.stream());
});

// watch
// --------------------
gulp.task("watch", cb => {
  gulp.watch([`src/html/**/*.html`], gulp.series("html"));
  cb();
});

// default
// --------------------
gulp.task(
  "default",
  gulp.series(
    "clean:preview",
    "html",
    gulp.parallel("watch", "server")
  )
);
