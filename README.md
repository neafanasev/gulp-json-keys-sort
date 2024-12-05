Gulp plugin for sorting JS-based JSON-files.

Usage:
```
const gulp = require('gulp');
const sortKeys = require('gulp-json-keys-sort');

gulp.task('sort-keys', () => {
    return gulp
        .src(['some_folder/*.json'])
        .pipe(sortKeys())
        .pipe(gulp.dest('some_folder'));
})
```