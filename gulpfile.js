// gulpプラグインの読み込み
const gulp = require('gulp');
// Sassをコンパイルするプラグインの読み込み
const sass = require('gulp-sass');
  
// style.scssの監視タスクを作成する
// Watchの場合は別タスクに分けてあげて、別途[タスク名]で指定してあげると動くよ
// 一度に複数のタスクを実行する場合は ['タスク名', 'タスク名2'] 的な感じで増やせる
gulp.task('default', function () {
  // ★ style.scssファイルを監視
  // ** -> どんな名前のディレクトリでも条件に満たす
  // *.scss -> 拡張子が.scssで終わるもの全て
  // scss/**/*.scss -> scssディレクトリ以下の全てのディレクトリかつ.scssで終わるものに変更があった場合
  // [タスク名] を実行する
  gulp.watch('scss/**/*.scss',['scss']);
});

gulp.task('scss', function() {
  // style.scssファイルを取得
  gulp.src('scss/**/*.scss')
  // Sassのコンパイルを実行
  .pipe(sass({
    outputStyle: 'expanded'
  })
  // Sassのコンパイルエラーを表示
  // (これがないと自動的に止まってしまう)
  .on('error', sass.logError))
  // cssフォルダー以下に保存
  .pipe(gulp.dest('scss'))
});

