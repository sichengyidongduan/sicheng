/**
 * Created by Administrator on 2017/11/19.
 */
$("label").on("tap",function(){
    //全选按钮全选、取消效果
    if($(this).children("input")[0].className=="selectall"){
        $(".select").prop("checked",$(".selectall").prop("checked"));
    }
    changelabel();
})
function changelabel(){
    var i=0;
    //选中的select变样式
    $(".select").each(function(ind){
        if($(this).prop("checked")){
            $("label").eq(ind).css({"background":"url('img/shop_cart_select.jpg') no-repeat 0 0","background-size":"0.18rem 0.18rem"});
            i++;
        }else{
            $("label").eq(ind).css({"background":"url('img/pay_03.png') no-repeat 0 0","background-size":"0.18rem 0.18rem"});
        }
    })
    //如果都选中，全选按钮就选中
    if(i==$(".select").length){
        $(".selectall").prop("checked","checked");
    }else{
        $(".selectall").prop("checked",false);
    }
    //选中全选按钮变样式
    if($(".selectall").prop("checked")){
        $(".selectall").parent("label").css({"background":"url('img/shop_cart_select.jpg') no-repeat 0 center","background-size":"0.18rem 0.18rem"});
    }else{
        $(".selectall").parent("label").css({"background":"url('img/shop_cart_selectall.png') no-repeat 0 center","background-size":"0.18rem 0.18rem"});
    }
}

//件数改变时，价格改变
$(".num").on("change",numchange);
function numchange(){
    var unit_price=33.5;
    $(this).parent().next().text("￥"+unit_price*$(this).val());
    totalPrice();
}
$(".reduce").on("tap",function(){
    var unit_price=33.5;
    $(this).parent().next().text("￥"+unit_price*$($(this)).next().val());
    totalPrice();
})
$(".add").on("tap",function(){
    var unit_price=33.5;
    $(this).parent().next().text("￥"+unit_price*$($(this)).prev().val());
    totalPrice();
})

//选中的商品计价
$("label").on("tap",function(){
    totalPrice();
})

//计算总价
function totalPrice(){
    var price=0;
    var num=0;
    $(".select").each(function(ind){
        if($(this).prop("checked")){
            price+=parseFloat($(".pro_list>li").eq(ind).find(".price").text().slice(1));
            num+=parseInt($(".pro_list>li").eq(ind).find(".num").val())
        }
    })
    $(".total_price").text("￥"+price+"（共"+num+"件）");
}

//删除商品
$(".del").on("tap",function(){
   $(this).parents(".right").parent().remove();
    totalPrice();
})

//点击结算
$(".toCalculate").on("tap",function(){
    if($(".total_price").text().match(/\d/g)[1]==0){
        alert("请选择需结算的商品！")
    }else{
        location.href="order.html";
    }
})















