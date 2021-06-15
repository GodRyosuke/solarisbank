let prevScroll = 0;
function getAbs(num) {
    if (num < 0) {
        return -num;
    } else {
        return num;
    }
}
window.addEventListener('scroll', ()=> {
    let nowScroll = window.scrollY;
    if (nowScroll > 15) {

    }
    if (getAbs(nowScroll - prevScroll) < 0.5) {
        console.log("不動");
        return;
    } 
    if((prevScroll < 15) && (nowScroll > 15)) {  
        const Headerelement = document.querySelector('.clsNUQ');
        Headerelement.classList.remove('clsNUQ');
        Headerelement.classList.add('eAUuuG');
        const Iconelement = document.querySelector('.LMQHi');
        Iconelement.classList.remove('LMQHi');
        Iconelement.classList.add('dlrlPx');
    } else if ((prevScroll > 15) && (nowScroll < 15)){
        const Headerelement = document.querySelector('.eAUuuG');
        Headerelement.classList.remove('eAUuuG');
        Headerelement.classList.add('clsNUQ');
        const Iconelement = document.querySelector('.dlrlPx');
        Iconelement.classList.remove('dlrlPx');
        Iconelement.classList.add('LMQHi');
    }
    prevScroll = nowScroll;
});

// // 始めは1つめのもの以外隠す
// $('dd[id != "acc1"]').css("width", "0px");
// // currentButtonを持っていないクラスは背景に色をつける
// $('.CreateWrapper dt a').each(function() {
//     if (!$(this).hasClass('currentButton')) {
//         $(this).addClass('nonCurrentButton');
//     }
// });


// // アコーディオンパネルの挙動
// $('.CreateWrapper a').click(function() {
//     // 現在開いているコンテンツでなければ
//     if (!$(this).hasClass('currentButton')) {
//         // 現在開いているパネルを閉じる
//         $('.current').animate({'width': '0px'}, 300);
//         // クリックされたパネルを開く
//         $($(this).attr('href')).animate({'width': '900px'}, 300);
//         // current, currentButtonの移動
//         $('dd').removeClass();
//         $($(this).attr('href')).addClass('current');
//         $('a').removeClass();
//         $(this).addClass('currentButton');
//     }  
//     // currentButton以外の要素の背景を変える
//     $('.CreateWrapper dt a').each(function() {
//         if (!$(this).hasClass('currentButton')) {
//             $(this).addClass('nonCurrentButton');
//         }
//     });

//     return false;
// });

$('.AccorWrapper .AccorTitle').click(function() {
    if (!$(this).hasClass('currentTitle')) {
        $('.AccorItem').removeClass('currentItem');
        $('.AccorTitle').removeClass('currentTitle');
        $('.descriptionWrap').removeClass('currentDesc');
        $('.AccorWrapper .plus').removeClass('currentPlus');
        // Item
        $Item = $(this).parent();
        $Item.addClass('currentItem');
        // description
        $desc = $Item.find('.descriptionWrap');
        $desc.addClass('currentDesc');
        // title
        $(this).addClass('currentTitle');
        // plus
        $(this).find('.plus').addClass('currentPlus');
    }

    return false;
});

$('.rAccorWrapper .rAccorTitle').click(function() {
    if (!$(this).hasClass('rCurrentTitle')) {
        // 開いているタブを閉じる
        $('.rCurrentInner').animate({'height': '0px'}, 300);
        $('.rAccorTitle').removeClass('rCurrentTitle');
        $('.rAccorInner').removeClass('rCurrentInner');
        // $('.rAccorInner img').css('display', 'none');
        $('.rAccorItem').removeClass('rCurrentItem');

        $(this).addClass('rCurrentTitle');
        $('.rAccorTitle').find('.plus').html('<p>+</p>');
        $(this).find('.plus').html('<p>-</p>');
        $AccorItem = $(this).parent();
        $AccorItem.addClass('rCurrentItem');
        $rAccorInner = $AccorItem.find('.rAccorInner');
        $rAccorInner.addClass('rCurrentInner');
        $rAccorInner.animate({'height': '600px'}, 300);
        // $AccorItem.find('.rAccorInner').addClass('rCurrentInner');
        // $AccorItem.find('img').css('display', 'block');
    }
    
    return false;
});

