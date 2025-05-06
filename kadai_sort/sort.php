<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <title>PHP基礎編</title>
</head>

<body>
    <p>
        <?php
       // 独自のソート関数を作る
       function sort_2way($array, $order) {
           if ($order) {
               // 昇順ソート
               sort($array);
           } else {
               // 降順ソート
               rsort($array);
           }
       
           // ソート結果を1行ずつ表示
           foreach ($array as $value) {
               echo $value . "<br>";
           }
       }
       
       // テスト用の配列
       $nums = [15, 4, 18, 23, 10];
       
       // 関数の呼び出し（昇順）
       echo "昇順ソート結果：<br>";
       sort_2way($nums, true);
       
       echo "<br>";
       
       // 関数の呼び出し（降順）
       echo "降順ソート結果：<br>";
       sort_2way($nums, false);
       ?>
       
        ?>
    </p>
</body>

</html>