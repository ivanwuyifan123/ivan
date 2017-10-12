/**
 * Created by admin on 2017/10/11.
 */
$(function () {
    var nowIndex = 0;
    var timer;
    var $lis = $("#tabs1 li");
    $lis.on("mouseover",function () {
        nowIndex = $(this).index();
        // console.log(nowIndex);
        changeImg();
    });
    $("#prev").on("click", function () {
        nowIndex--;
        if(nowIndex == -1){
            nowIndex = $lis.length - 1;
        }
        changeImg();
    });
    $("#next").on("click", function (){
        nowIndex++;
        if(nowIndex == $lis.length){
            nowIndex = 0;
        }
        changeImg();
    });
    play();

    $("#owl-demo1").hover(function () {
        clearInterval(timer);
    }, function () {
        play();
    });
    function play() {
        timer = setInterval(function () {
            $("#next").trigger("click");
        },2000);
    }
    function changeImg() {
        $lis.eq(nowIndex).addClass("selected").siblings().removeClass("selected");
        $("#tupian img").eq(nowIndex).addClass("selected").siblings().removeClass("selected");
    }
});