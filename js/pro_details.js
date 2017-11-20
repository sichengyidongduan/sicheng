/**
 * Created by duodi on 2017/11/16.
 */
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});



//商品详情、累计评价
$(".btn li").on("tap",function(){
    $(".main").children().eq($(this).index()).show().siblings().hide();
    $(this).addClass("on").siblings().removeClass("on");
})

//点击购买
$(".toBuy").on("tap",function(){
    location.href="order.html";
})



