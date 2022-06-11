# React Carousel

これはReact練習用に制作している試作品です。

## 使い方
現状Reactコンポーネントとして制作しています。
UrlList.tsにイメージURLとリンクURLのペアを設定してください。

## 動作確認環境
デモは[こちら](https://kaminoryo.github.io/react-carousel/)。
現在Windows10/Chrome環境のみ

## Todo
- まだカルーセルとして機能していないので実装する

## 所要時間
Github絡み及びビルド設定周りで丸2日😨
コーディング自体は8時間経過。案の定CSS周りが弱すぎて手こずっています

## デザインの最終目標
当初は
- 左右にボタンがついていて前後に移動できる
- スワイプにも対応
- 各画像へのジャンプボタンも下か右上あたりに並んでいる
という一般的なカルーセルを考えていました。
しかし[ANA Milage](https://www.ana.co.jp/ja/jp/domtour/)のサイトを見て、
「ジャンプボタンがあるのなら左右への移動ボタンはいらないのでは」と考えを改め、ジャンプボタンのみの実装を目指しています。
（スマホからのユーザビリティに問題があるかもしれないので要検証）
また定期移動の停止ボタンがあるのもマイナーだが、個人的には好きなので是非取り入れたいです。

## 技術選定の理由
- TypeScriptは得意なのでマスト
- Reactの練習がしたかった
- 生CSS or styled-component（練習中）しか知見がないので後者を選択

## その他開発環境周り課題
- styled-componentで補完が効いておらず、typoに気づかずハマったので対策する
- SourceTreeからもpushできるようにする(複数のSSH鍵の取り回しでハマってGitからしかpushできない)

## 参考文献
[カルーセルを自作する - Qiita](https://qiita.com/wintyo/items/a37a197f69aa205297a5)