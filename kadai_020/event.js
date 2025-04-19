// ボタンとテキストの要素を取得
const button = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンがクリックされたときの処理を定義
button.addEventListener('click', function() {
    text.textContent = 'ボタンがクリックされました！';
});
