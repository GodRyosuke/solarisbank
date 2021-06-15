$(function() {
	$("a").click(function(){
		var dis = $(this).html() - 1;

		$("#sections").animate({"left" : dis * -700 + "px"}, 300);

		// 背景画像のアニメーション
		$("body").css("background-position", dis * -20 + "px 100%");
		$("#bg1").css("background-position", dis * -150 + "px 100%");
		$("#bg2").css("background-position", dis * -700 + "px 100%");

		$(".current").removeClass("current");
		$(this).addClass("current");

		return false;
	});
});
