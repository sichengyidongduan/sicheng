/**
 * Created by duodi on 2017/11/14.
 */
var cliH;
function getH(){
    return window.innerHeight||document.body.clientHeight;
}
cliH=getH();
var section=document.querySelector("section");
section.style.height=cliH+"px";

var flag1=false, flag2=false, flag3=false, flag4=false, flag5=false, flag6=false;
//会员名验证：6-18位字母，数子或下划线组成
$(".username").on("blur",function(){
    var reg=/^\w{6,18}$/g
    if(!reg.test($(this).val())){
        $(".usernameTip").css("visibility","visible");
        flag1=false;
    }else{
        $(".usernameTip").css("visibility","hidden");
        flag1=true;
    }
})
//手机号验证：
$(".phone").on("blur",function(){
    var reg=/^1(3|4|5|7|8)\d{9}$/;
    if(!reg.test($(this).val())){
        $(".phoneTip").css("visibility","visible");
        flag2=false;
    }else{
        $(".phoneTip").css("visibility","hidden");
        flag2=true;
    }
})
//邮箱验证
$(".email").on("blur",function(){
    var reg=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if(!reg.test($(this).val())){
        $(".emailTip").css("visibility","visible");
        flag3=false;
    }else{
        $(".emailTip").css("visibility","hidden");
        flag3=true;
    }
})
//密码验证
$(".passward").on("blur",function(){
    if($(this).val().replace(/\s+/g,"")==""){
        $(".passwordTip").css("visibility","visible");
        flag4=false;
    }else{
        $(".passwordTip").css("visibility","hidden");
        flag4=true;
    }
})
//密码确认验证
$(".confirmPass").on("blur",function(){
    var password=$(".passward").val();
   if($(this).val()!=password){
       $(".confirmPassTip").css("visibility","visible");
       flag5=false;
   }else{
       $(".confirmPassTip").css("visibility","hidden");
       flag5=true;
   }
})
//验证码切换
$(".code_right").on("tap",function(){
    var str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var n=4,s="",code=[];
    for(var i=0;i<n;i++){
        var rand=Math.floor(Math.random()*str.length);
        s+=str.charAt(rand);
    }
    code.push(s);
    $(this).text(code);
})
//验证码核对
$(".code").on("blur",function(){
    var code_right=$(".code_right").text().toLowerCase();
    if($(this).val().toLowerCase()!=code_right){
        $(".codeTip").css("visibility","visible");
        flag6=false;
    }else{
        $(".codeTip").css("visibility","hidden");
        flag6=true;
    }
})
//点击checkbox
$("label").on("tap",function(){
    check();
})
function check(){
    console.log($("input[type=checkbox]").is(":checked"))
    if($("input[type=checkbox]").is(":checked")){
        $("label").css("background",'url("img/register_check_03.png") no-repeat left center');
    }else{
        $("label").css("background",'url("img/register_check01.png") no-repeat left center');
    }
}
//点击注册
$("input[type=button]").on("tap",function(){
    if(flag1&&flag2&&flag3&&flag4&&flag5&&flag6&&$("input[type=checkbox]").is(":checked")){
        var userName=$(".username").val();
        var phone=$(".phone").val();
        var email=$(".email").val();
        var passward=$(".passward").val();
        var userInfo={
            name:userName,
            password:passward,
            phone:phone,
            email:email
        }
        saveUser(userInfo);
        location.href="login.html";
    }else{
        alert("请核对信息填写完整！");
    }
})
//写入本地存储
function saveUser(userInfo){
    localStorage.userInfo=JSON.stringify(userInfo);
}


