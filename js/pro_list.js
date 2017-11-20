/**
 * Created by Administrator on 2017/11/19.
 */
//排序按钮点击效果
var i=1;
$(".sorting li").on("tap",function(){
    $(this).addClass("on").siblings().removeClass("on");
        $(".cansort").find("img").each(function(){$(this)[0].src="img/pro_list_arrowdown.png";})
        if($(this)[0].className=="cansort on"){
            $(this).find("img")[0].src="img/pro_list_arrowdown_on.png";
            i++;
            if(i%2){
                $(this).find("img")[0].src="img/pro_list_arrowup_on.png";
            }
        }
})
