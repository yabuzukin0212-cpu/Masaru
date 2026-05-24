# 🐰 ウリの紹介ページ

ウサギのウリを紹介するWebページです。

## 📋 ページの内容

- **基本情報**: 名前、種類、性別、年齢
- **性格**: ウリの性格について
- **好きな食べ物**: ウリの好物リスト
- **特技・特徴**: ウリの特徴
- **ギャラリー**: ウリの写真

## 📸 画像の追加方法

### 1. `images` フォルダの作成

リポジトリのルートに `images` フォルダを作成してください。

```
Masaru/
├── images/
│   ├── uri.jpg           (メイン画像)
│   ├── uri-1.jpg
│   ├── uri-2.jpg
│   ├── uri-3.jpg
│   └── uri-4.jpg
├── index.html
├── styles.css
├── script.js
└── README.md
```

### 2. 画像ファイルの追加

- `uri.jpg`: メイン表示用の画像
- `uri-1.jpg` ～ `uri-4.jpg`: ギャラリー用の画像

## 🔧 内容のカスタマイズ方法

### HTMLで直接編集する場合

`index.html` の各セクションで直接テキストを変更できます：

```html
<!-- 基本情報の変更 -->
<span class="value" id="petName">ウリ</span>  <!-- ここを変更 -->
<span class="value" id="petAge">3歳</span>    <!-- ここを変更 -->

<!-- リスト項目の追加・削除 -->
<li>にんじん</li>
<li>新しい食べ物</li>  <!-- ここに追加 -->
```

### JavaScriptで動的に変更する場合

`script.js` に用意された関数を使用できます：

```javascript
// ペット情報全体を変更
updatePetCustomData({
    name: '新しい名前',
    age: '2歳',
    personality: '新しい性格説明',
    favoriteFood: ['にんじん', 'キャベツ'],
    specialFeatures: ['速い', 'かわいい']
});

// メイン画像を変更
changePetImage('images/new-uri.jpg');

// ギャラリーに画像を追加
addGalleryImage('images/uri-5.jpg', 'ウリの新しい写真');

// 複数の画像をまとめて追加
addGalleryImages([
    { path: 'images/uri-5.jpg', alt: 'ウリの写真5' },
    { path: 'images/uri-6.jpg', alt: 'ウリの写真6' }
]);
```

## 🎨 スタイルのカスタマイズ

`styles.css` で配色やレイアウトを変更できます：

```css
/* ヘッダーの背景色変更 */
header {
    background: linear-gradient(135deg, #ff69b4 0%, #ffa500 100%);
    /* ↓ 色を変更 */
}

/* 見出しの色変更 */
section h2 {
    color: #ff69b4;
    /* ↓ 色を変更 */
}
```

## 📱 レスポンシブ対応

このページはモバイルデバイスにも対応しています。
タブレット、スマートフォンでも正しく表示されます。

## 🚀 デプロイ

GitHub Pages で公開する場合：

1. リポジトリの **Settings** > **Pages** を開く
2. **Branch** を `main` に設定
3. **Save** をクリック
4. 数秒後、自動的にページが公開されます

公開 URL: `https://yabuzukin0212-cpu.github.io/Masaru/`

## 📝 ファイル構成

| ファイル | 説明 |
|---------|------|
| `index.html` | ページの構造（HTML） |
| `styles.css` | ページのデザイン（CSS） |
| `script.js` | ページの機能（JavaScript） |
| `README.md` | このファイル |
| `images/` | 画像フォルダ |

## ✨ 今後の拡張案

- ウリの日記ページを追加
- 動画を埋め込む
- インタラクティブな機能を追加
- SNS共有機能を追加

---

**ウリの紹介ページを楽しんでください！** 🐰💕