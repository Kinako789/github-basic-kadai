// ボタンとテキストの要素を取得
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンがクリックされたときの処理
btn.addEventListener('click', () => {
    // 2秒（2000ミリ秒）待ってから実行
    setTimeout(() => {
        text.textContent = '2秒後にこの文章に変わりました！';
    }, 2000);
});
