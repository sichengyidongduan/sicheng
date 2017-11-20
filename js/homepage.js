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

//侧边栏
$(".mune_icon").on("tap",function(){
    $(".sideMune").toggleClass("on")
})
















