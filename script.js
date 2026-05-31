/* ========================================
   ウリの紹介ページ - スクリプト
   ======================================== */

// ページロード時の初期化
document.addEventListener('DOMContentLoaded', function() {
    console.log('ウリの紹介ページを読み込みました');
    
    // 初期データの設定（必要に応じて変更してください）
    setupPetData();
    
    // ウリを走り回らせる
    startWalkingUri();
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
// ウリを走り回らせるアニメーション機能
// ================================================================

let walkingUri = null;
let isWalking = false;

// ウリを走り回らせる関数
function startWalkingUri() {
    // 走り回るウリの要素を作成
    const uri = document.createElement('div');
    uri.id = 'walking-uri';
    uri.className = 'walking-uri-container';
    
    const img = document.createElement('img');
    img.src = 'images/IMG_2961.jpeg';
    img.alt = 'ウリ';
    img.className = 'walking-uri-image';
    
    uri.appendChild(img);
    document.body.appendChild(uri);
    
    walkingUri = uri;
    isWalking = true;
    
    // ウリを移動させる
    moveUri();
}

// ウリを移動させる関数
function moveUri() {
    if (!isWalking || !walkingUri) return;
    
    // ランダムな位置を計算
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    const x = Math.random() * (screenWidth - 80);
    const y = Math.random() * (screenHeight - 80);
    
    // ウリが向く方向を計算
    const rotation = Math.atan2(y - parseFloat(walkingUri.style.top || 0), x - parseFloat(walkingUri.style.left || 0)) * (180 / Math.PI);
    
    // ウリのデータを更新
    const dataset = walkingUri.dataset;
    const prevX = parseFloat(dataset.x || 0);
    const prevY = parseFloat(dataset.y || 0);
    
    dataset.x = x;
    dataset.y = y;
    
    // 移動方向に応じて反転
    if (x < prevX) {
        walkingUri.style.transform = 'scaleX(-1)';
    } else {
        walkingUri.style.transform = 'scaleX(1)';
    }
    
    // ウリの位置を更新（滑らかなアニメーション）
    walkingUri.style.transition = 'all 2s ease-in-out';
    walkingUri.style.left = x + 'px';
    walkingUri.style.top = y + 'px';
    
    // 次の移動を予約（2秒後）
    setTimeout(moveUri, 2500);
}

// ウリを止める関数
function stopWalkingUri() {
    isWalking = false;
    if (walkingUri) {
        walkingUri.style.animation = 'fadeOut 0.5s ease-out forwards';
        setTimeout(() => {
            if (walkingUri && walkingUri.parentNode) {
                walkingUri.parentNode.removeChild(walkingUri);
            }
            walkingUri = null;
        }, 500);
    }
}

// ウリを再開する関数
function resumeWalkingUri() {
    if (!isWalking) {
        startWalkingUri();
    }
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
//
// ウリが走り回るのを止める場合:
// stopWalkingUri();
//
// ウリが走り回るのを再開する場合:
// resumeWalkingUri();
