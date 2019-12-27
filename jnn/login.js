$(document).ready(function(){
    var login=document.getElementsByClassName("b-BTN")[0];
    var LOGIN=document.getElementsByClassName("b-LOGIN")[0];
    var error=document.getElementById("b-error");
    var verify=document.getElementsByClassName("b-verify1")[0];
    var content=document.getElementsByClassName("b-content")[0];
    var span1=document.getElementsByClassName("b-people")[0];
    var span2=document.getElementsByClassName("b-key1")[0];
    var span3=document.getElementsByClassName("b-key2")[0];
    var phone=document.getElementById("b-phone");
    var pswd=document.getElementById("b-pswd");

//验证是否自动登陆
    var phone3=window.localStorage.getItem("phone");
    var pass3=window.localStorage.getItem("password");
    if(phone3!=""){
        phone.value=phone3;
        pswd.value=pass3;
    }

//随机验证码
    var btn1=document.getElementsByClassName("b-change")[0];
    var img=document.getElementsByClassName("b-img1")[0];
    var code='qwertyuiopasdgfhjklzxcvbnm1234567890';
    function getcode(n){
        return Math.floor(Math.random()*n)
    }
    btn1.onclick=function(){
        back()
    }
    function back(){
        var str='';
        for(var i=0;i<4;i++){
            var ran=getcode(code.length);
            str+=code.charAt(ran)
        }
        img.innerHTML=str;
    }
    back()

//点击时验证
    login.onclick=function(){
        if(verify.value!=img.innerHTML){
            error.className="b-error1";
            error.innerHTML="请输入正确的验证码";
            img.style.top=227+"px";
            content.style.height=467+"px";
            span1.style.top=106+"px";
            span2.style.top=166+"px";
            span3.style.top=228+"px";
            LOGIN.style.height=520+"px";
        }else if(phone.value==""){
            error.className="b-error1";
            error.innerHTML="登录名不能为空";
            img.style.top=227+"px";
            content.style.height=467+"px";
            span1.style.top=106+"px";
            span2.style.top=166+"px"
            span3.style.top=228+"px";
            LOGIN.style.height=520+"px";
        }else if(pswd.value==""){
            error.className="b-error1";
            error.innerHTML="密码不能为空";
            img.style.top=227+"px";
            content.style.height=467+"px";
            span1.style.top=106+"px";
            span2.style.top=166+"px";
            span3.style.top=228+"px";
            LOGIN.style.height=520+"px";
        }else{
            $.ajax({
                type:"GET",
                url:"http://localhost/yiguo/jnn/login.php",
                data:{
                    "phone1":$("#b-phone").val(),
                    "pass":$("#b-pswd").val()
                }, 
                dataType:"jsonp", 
                success:function(data){
                    $("#b-error").html("");
                    if(data==JSON.stringify(1)){
                        var auto=document.getElementsByClassName("b-btn")[0];
                        if(auto.checked==true){//自动登录
                            var pvalue=phone.value;
                            var psvalue=pswd.value;
                            window.localStorage.setItem('phone',pvalue);
                            window.localStorage.setItem('password',psvalue);
                        }else {
                            window.localStorage.removeItem('phone');
                            window.localStorage.removeItem('password');
                         }
                            window.sessionStorage.setItem('phone',phone.value);
                            window.sessionStorage.setItem('password',pswd.value);
                            window.location.href='../fm/index.html';
                    }else {
                        error.className="b-error1";
                        $("#b-error").html("账户或密码错误");
                        img.style.top=227+"px";
                        content.style.height=467+"px";
                        span1.style.top=106+"px";
                        span2.style.top=166+"px";
                        span3.style.top=228+"px";
                        LOGIN.style.height=520+"px";
                        back()
                    }
                }
            })
        } 
    }

//第三方登录
    $(".b-qq,.b-mic").click(function(){
        $(".b-cover").css({"display":"block"})
            $(".b-X").click(function(){
                $(".b-cover").css({"display":"none"})
            })
        })
    })