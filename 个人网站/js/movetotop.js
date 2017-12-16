// var goTop =document.getElementById('totop-link');
// goTop.onclick = function () {
//     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//     var timer = setInterval(function () {
//         window.scrollTo(0,scrollTop-=20);
//         if (scrollTop <= 0){
//             clearInterval(timer);
//         }
//     },30)
// }
// var x=window.screenLeft?window.screenLeft: window.screenX ;
// var $a,$b,$c;

// (d < 768)?$a='scrollTop"':a='scrollLeft';
// (d < 768)?$b='top':b='left - 200';
// (d < 768)?$c='html,body':c='div';
var a;
(document.body.offsetWidth < 768)?string.replace(/div/g,"html,body"):a=0;
(document.body.offsetWidth < 768)?string.replace(/scrollLeft/g,"scrollTop"):a=0;
(document.body.offsetWidth < 768)?string.replace(/left/g,"top"):a=0;

$(".toSkills").on("click",function () {
    if($('#chapterskills').offset().left != 200){
        $("div").stop().animate({
            scrollLeft: $("#chapterskills").offset().left - 200
        }, (500))
    }
});
$(".toAbout").on("click",function () {
    if($('#chapterabout').offset().left != 200) {
        $("div").stop().animate({
            scrollLeft: $("#chapterabout").offset().left - 200
        }, (500))
    }
});
$(".toIntroduction").on("click",function () {
    if($('#chapterintroduction').offset().left != 200) {
        $("div").stop().animate({
            scrollLeft: $("#chapterintroduction").offset().left - 200
        }, 500);
    }
});
$(".toExperience").on("click",function () {
    if($('#chapterexperience').offset().left != 200) {
        $("div").stop().animate({
            scrollLeft: $("#chapterexperience").offset().left - 200
        }, (500))
    }
});
// $(".toEducation").on("click",function () {
//     if($('#chaptereducation').offset().left != 200) {
//         $("div").stop().animate({
//             scrollLeft: $("#chaptereducation").offset().left - 200
//         }, (500))
//     }
// });
$(".toContact").on("click",function () {
    if($('#chapterskills').offset().left != 200) {
        $("div").stop().animate({
            scrollLeft: $("#chaptercontact").offset().left - 563
        }, (500))
    }
});
$(".totop-link").on("click",function () {
    $("html,body").animate({
        scrollTop:$(".introduction").offset().top
    },(800))
});
$(".toEducation").click(function(){
    var $lefty = $(this).next();
        $lefty.animate({
        left:parseInt($lefty.css('.toEducation'),10)==0 ? -$lefty.outerWidth() : 0
    });
});
