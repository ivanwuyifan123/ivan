/**
 * Created by admin on 2017/8/14.
 */
$(function () {
    $("inputSearch").on("focus",function () {
        if(this.value == this.defaultValue){
            this.value = ""
        }
    }).on("blur",function () {
        if(this.value == ""){
            this.value = this.defaultValue;
        }
    })
});
$("#nav li").hover(function () {
    $(this) .children(".jnNav").show();
},function () {
    $(this) .children(".jnNav").hide();
});