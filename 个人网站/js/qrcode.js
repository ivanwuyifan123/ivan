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
    $(".qr-weibo").fadeIn(500);
    $(".qr-qq,.qr-wechat").fadeOut(0);
    $(".code_wrap").css("z-index",200);

},function(){
    $(".qr-weibo").fadeOut(0);
    $(".code_wrap").css("z-index",50);

});

$(" .fa-qq").hover(function(){
    $(".qr-qq").fadeIn(500);
    $(".qr-weibo,.qr-wechat").fadeOut(0);
    $(".code_wrap").css("z-index",200);

},function(){
    $(".qr-qq").fadeOut(0);
    $(".code_wrap").css("z-index",50);

});
$(".fa-weixin").hover(function(){
    $(".qr-weixin").fadeIn(500);
    $(".qr-weibo,.qr-qq").fadeOut(0);
    $(".code_wrap").css("z-index",200);

},function(){
    $(".qr-weixin").fadeOut(0);
    $(".code_wrap").css("z-index",1);

});
$(".qr-weibo,.qr-qq,.qr-weixin").hover(function(){
    $(this).fadeIn(0);
    $(".code_wrap").css("z-index",200);
},function(){
    $(this).fadeOut(500);
    $(".code_wrap").css("z-index",50);
});
