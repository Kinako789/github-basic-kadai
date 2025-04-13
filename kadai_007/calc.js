// 変数numに1～100までのランダムな正の整数を代入
let num = Math.floor(Math.random() * 100) + 1;

// 変数numの値を出力する（確認用）
console.log('numの値:', num);

// 3と5の倍数のチェック（最初に確認）
if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
}
// 3の倍数のチェック
else if (num % 3 === 0) {
  console.log('3の倍数です');
}
// 5の倍数のチェック
else if (num % 5 === 0) {
  console.log('5の倍数です');
}
// 上記のどれでもない場合
else {
  console.log(num);
}
