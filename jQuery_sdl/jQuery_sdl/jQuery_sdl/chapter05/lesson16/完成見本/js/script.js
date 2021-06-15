$(function() {
  // ボタンをクリック
  $("a").click(function(){
    // テキスト内容を取得
    var dis = $(this).html() - 1;

    // コンテンツ位置までのアニメーション
    $("#sections").animate({"left" : dis * -700 + "px"}, 300);

    // 背景画像のアニメーション
    $("body").css("background-position", dis * -20 + "px 100%");
    $("#bg1").css("background-position", dis * -150 + "px 100%");
    $("#bg2").css("background-position", dis * -700 + "px 100%");

    // ボタンのスタイル変更
    $(".current").removeClass("current");
    $(this).addClass("current");

    return false;
  });
});
