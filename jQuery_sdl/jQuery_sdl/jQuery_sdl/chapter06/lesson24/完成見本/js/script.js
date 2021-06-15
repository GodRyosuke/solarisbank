$(function(){
  // ブラウザをスクロール
  $(window).scroll(function(){
    // スクロール量が300pxを超えているかチェック
    if($(window).scrollTop() > 300){
      // 超えている場合：header要素にsmallクラスを追加
      $("header").addClass("small");
    }else{
      // 超えていない場合：header要素からsmallクラスを削除
      $("header").removeClass("small");
    }
  });
});
