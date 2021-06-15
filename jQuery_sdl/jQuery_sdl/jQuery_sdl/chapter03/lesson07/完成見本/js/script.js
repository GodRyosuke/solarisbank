$(function(){
  // サムネールをクリック
  $("a").click(function(){
    // 拡大画像のsrc属性に、選択したa要素のhref属性を入れる
    $("figure img").attr("src", $(this).attr("href"));

    return false;
  });
});
