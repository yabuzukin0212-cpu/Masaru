/* ========================================
   ウリの紹介ページ - スクリプト
   ======================================== */

// ページロード時の初期化
document.addEventListener('DOMContentLoaded', function() {
    console.log('ウリの紹介ページを読み込みました');
    
    // 初期データの設定（必要に応じて変更してください）
    setupPetData();
});

// ペットデータの設定
function setupPetData() {
    // 基本情報
    const petData = {
        name: 'ウリ',
        type: 'ウサギ',
        gender: '女の子',
        age: '3歳'
    };

    // 性格説明
    const personality = 'ウリは元気いっぱいで好奇心旺盛な子です。毎日ピョンピョン跳ねて遊んでいます。';

    // 好きな食べ物
    const favoriteFood = [
        'にんじん',
        '小松菜',
        '牧草',
        'ペレット'
    ];

    // 特技・特徴
    const specialFeatures = [
        '素早いジャンプ',
        'かわいいリップノーズ',
        'ふわふわの毛並み',
        '甘えん坊'
    ];

    // データを画面に反映
    updatePetInfo(petData, personality, favoriteFood, specialFeatures);
}

// ペット情報を更新する関数
function updatePetInfo(petData, personality, favoriteFood, specialFeatures) {
    // 基本情報の更新
    document.getElementById('petName').textContent = petData.name;
    document.getElementById('petType').textContent = petData.type;
    document.getElementById('petGender').textContent = petData.gender;
    document.getElementById('petAge').textContent = petData.age;

    // 性格の更新
    document.getElementById('petPersonality').textContent = personality;

    // 好きな食べ物の更新
    updateList('favoriteFood', favoriteFood);

    // 特技・特徴の更新
    updateList('specialFeatures', specialFeatures);
}

// リスト項目を更新する関数
function updateList(elementId, items) {
    const listElement = document.getElementById(elementId);
    listElement.innerHTML = '';
    
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listElement.appendChild(li);
    });
}

// ペットデータを変更する関数（カスタマイズ用）
function updatePetCustomData(customData) {
    if (customData.name) document.getElementById('petName').textContent = customData.name;
    if (customData.type) document.getElementById('petType').textContent = customData.type;
    if (customData.gender) document.getElementById('petGender').textContent = customData.gender;
    if (customData.age) document.getElementById('petAge').textContent = customData.age;
    if (customData.personality) document.getElementById('petPersonality').textContent = customData.personality;
    if (customData.favoriteFood) updateList('favoriteFood', customData.favoriteFood);
    if (customData.specialFeatures) updateList('specialFeatures', customData.specialFeatures);
}

// 画像を変更する関数
function changePetImage(imagePath) {
    const imgElement = document.getElementById('petImage');
    imgElement.src = imagePath;
}

// ギャラリー画像を動的に追加する関数
function addGalleryImage(imagePath, altText) {
    const gallery = document.querySelector('.gallery-grid');
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    
    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = altText || 'ウリの写真';
    
    galleryItem.appendChild(img);
    gallery.appendChild(galleryItem);
}

// 複数のギャラリー画像を一括追加する関数
function addGalleryImages(imageArray) {
    imageArray.forEach((item, index) => {
        addGalleryImage(item.path, item.alt || `ウリの写真${index + 1}`);
    });
}

// ================================================================
// 使用例:
// ================================================================
// ペット情報を全て変更する場合:
// updatePetCustomData({
//     name: '新しい名前',
//     type: 'ウサギ',
//     gender: '男の子',
//     age: '2歳',
//     personality: 'ここに性格説明を入れてください',
//     favoriteFood: ['にんじん', 'キャベツ', 'クローバー'],
//     specialFeatures: ['素早い', 'かわいい']
// });
//
// メイン画像を変更する場合:
// changePetImage('images/new-uri.jpg');
//
// ギャラリーに1つ追加する場合:
// addGalleryImage('images/uri-5.jpg', 'ウリの新しい写真');
//
// ギャラリーに複数追加する場合:
// addGalleryImages([
//     { path: 'images/uri-5.jpg', alt: 'ウリの写真5' },
//     { path: 'images/uri-6.jpg', alt: 'ウリの写真6' }
// ]);
