/**
 * Created by admin on 2017/10/11.
 */
// var qr1 = document.getElementsByClassName("fa fa-qq");
// var qr2 = document.getElementsByClassName("fa fa-weibo");
// var qr3 = document.getElementsByClassName("fa fa-weixin");
// $qr1.on("click",function () {
//     qr1.style.backgroundImage = "../img/pic1.JPG";
// })

$(".fa-weibo").hover(function(){
    $(".qr-weibo").stop().fadeIn(1000);
    $(".qr-qq,.qr-wechat").stop().fadeOut(0);
    $(".code_wrap").css("z-index",200);

},function(){
    $(".qr-weibo").stop().fadeOut(500);
    $(".code_wrap").css("z-index",50);

});

$(" .fa-qq").hover(function(){
    $(".qr-qq").stop().fadeIn(1000);
    $(".qr-weibo,.qr-wechat").stop().fadeOut(0);
    $(".code_wrap").css("z-index",200);

},function(){
    $(".qr-qq").stop().fadeOut(500);
    $(".code_wrap").css("z-index",50);

});
$(".fa-weixin").hover(function(){
    $(".qr-weixin").stop().fadeIn(1000);
    $(".qr-weibo,.qr-qq").stop().fadeOut(0);
    $(".code_wrap").css("z-index",200);

},function(){
    $(".qr-weixin").stop().fadeOut(500);
    $(".code_wrap").css("z-index",1);

});
$(".qr-weibo,.qr-qq,.qr-weixin").hover(function(){
    $(this).stop().fadeIn(0);
    $(".code_wrap").css("z-index",200);
},function(){
    $(this).stop().fadeOut(500);
    $(".code_wrap").css("z-index",50);
});
