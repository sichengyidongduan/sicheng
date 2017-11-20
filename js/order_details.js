/**
 * Created by Administrator on 2017/11/19.
 */
$(".order_nav").on("tap","li",function(){
    $(".list_box").children().eq($(this).index()).show().siblings().hide();
    $(this).addClass("on").siblings().removeClass("on");
})