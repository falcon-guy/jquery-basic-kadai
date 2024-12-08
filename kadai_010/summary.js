$(function() {
    // 文字色変化ボタンがクリックされた場合
    $('#change-color').on('click', function(){
        $('#target').css('color', 'red');
    });

    // 文字内容変化ボタンがクリックされた場合
    $('#change-text').on('click', function(){
        $('#target').text('Hello!');
    });

    // id属性がfade-outの要素がクリックされたら
    $('#fade-out').on('click', function() {
    // フェードアウトする
    $('#target').fadeOut();
    });

     // id属性がfade-inの要素がクリックされたら
     $('#fade-in').on('click', function() {
    // フェードインする
     $('#target').fadeIn();
    });
    
  });