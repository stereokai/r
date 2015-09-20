var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var uncss = require('gulp-uncss');

gulp.task('default', function () {
    return gulp.src('css/index.css')
        .pipe(uncss({
            html: ['index.html']
        }))
        .pipe(autoprefixer({
            browsers: ['last 3 versions', '> 5%'],
            cascade: false
        }))
        .pipe(gulp.dest('css'));
});