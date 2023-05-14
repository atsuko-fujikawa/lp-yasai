$('.fadeInUpTrigger').on('inview', function (event, isInView) {
    if (isInView) { //表示領域に入った時1度だけアニメーションをさせる
        $(this).addClass('animate__animated animate__fadeInUp'); //クラス名が付与
    }
});

$('.headShakeTrigger').on('inview', function (event, isInView) {
    if (isInView) { //表示領域に入った時1度だけアニメーションをさせる
        $(this).addClass('animate__animated animate__headShake animate__delay-2s'); //クラス名が付与
    }
});

$('.fadeInLeftTrigger').on('inview', function (event, isInView) {
    if (isInView) { //表示領域に入った時1度だけアニメーションをさせる
        $(this).addClass('animate__animated animate__fadeInLeft'); //クラス名が付与
    }
});