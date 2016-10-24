var gulp = require("gulp"), // объявыление модуля gulp
	connect = require("gulp-connect"), // объявыление модуля gulp-connect
	opn = require("opn"); // объявыление модуля opn

// Запуск локального сервера

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true,
    port: 8888 // порт сервера
  });
  opn('http://localhost:8888'); // настройка для модуля opn порт 8888 
});
 
// Работа с html 

gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

// Работа с css 

gulp.task('html', function () {
  gulp.src('./app/css/*.css')
    .pipe(connect.reload());
});

// Работа с js

gulp.task('html', function () {
  gulp.src('./app/js/*.js')
    .pipe(connect.reload());
});

// отслеживает и обнавляет файлы

gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/css/*.css'], ['css']);
  gulp.watch(['./app/js/*.js'], ['js']);
});
 
// Задача по-умолчанию
gulp.task('default', ['connect', 'watch']);