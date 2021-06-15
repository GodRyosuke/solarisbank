$(function() {
  // 全てのアラート文を非表示にする
  $(".alert").hide();

  // 送信ボタンをクリック
  $("#submitBtn").click(function(){
    // チェック用の変数sendFlag
    var sendFlag = true;

    // 一行入力フィールドのチェック
    if(!$("#text").val()){
      // 入力がない：アラート文を表示
      $("#textSection .alert").show();
      sendFlag = false; // 入力がなければfalseに
    }else{
      // 入力がある：アラート文を非表示
      $("#textSection .alert").hide();
    }

    // ラジオボタンのチェック
    var radioChk = $('input[name = "radio"]:checked').length;

    // 選択されたラジオボタンの数を調べる
    if(radioChk == 0){
      // 選択がない：アラート文を表示
      $("#radioSection .alert").show();
      sendFlag = false; // 入力がなければfalseに
    }else{
      // 選択がある：アラート文を非表示
      $("#radioSection .alert").hide();
    }

    // チェックボックスのチェック
    var chkboxChk = $('input[name = "checkbox"]:checked').length;

    // 選択されたチェックボックスの数を調べる
    if(chkboxChk < 3){
      // 選択が3つ未満：アラート文を表示
      $("#checkboxSection .alert").show();
      sendFlag = false; // 選択が3つ未満ならfalseに
    }else{
      // 選択が3つ以上：アラート文を非表示
      $("#checkboxSection .alert").hide();
    }

    // セレクトボックスのチェック
    if($("select").val() == "none"){
      // 選択がない：アラート文を表示
      $("#selectSection .alert").show();
      sendFlag = false; // 「---」を選択していたらfalseに
    }else{
      // 選択がある：アラート文を非表示
      $("#selectSection .alert").hide();
    }

    // 複数行入力フィールドのチェック
    if(!$("#textarea").val()){
      // 入力がない：アラート文を表示
      $("#textareaSection .alert").show();
      sendFlag = false; // 入力がなければfalseに
    }else{
      // 入力がある：アラート文を非表示
      $("#textareaSection .alert").hide();
    }

    // 変数sendFlagの値をチェック
    if(sendFlag == false){
      return false; // falseであれば送信を許可しない（そうでなければ送信）
    }
  });
});
