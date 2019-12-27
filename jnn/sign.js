//随机生成验证码
var btn1=document.getElementsByClassName("b-page")[0];
var img=document.getElementById("b-img2");
var code='好魑魅魍魉你贷款电脑卡扩大看面相每次到就公司代码';
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
            var phone=document.getElementsByClassName("b-call")[0];
            var verify=document.getElementById("b-verify");
            var password=document.getElementById("b-password");
            var again=document.getElementById("b-again");
            var invite=document.getElementById("b-invite");
            var picture=document.getElementById("b-picture");
            var agree=document.getElementById("agree")
            var btn=document.getElementsByClassName("b-bottom")[0];
            var gets=document.getElementsByClassName("b-get")[0];
            var span1=document.getElementById("b-span1");
            var span2=document.getElementById("b-span2");
            var span3=document.getElementById("b-span3");
            var span4=document.getElementById("b-span4");
            var i1=document.getElementById("b-i1");
            var i2=document.getElementById("b-i2");
            var i3=document.getElementById("b-i3");
            var i4=document.getElementById("b-i4");
            var a = /^1[3|4|5|6|7|8|9][0-9]\d{4,8}$/
            var b=/^[0-9]{6}$/;
            var c=/^[\w.]{6,20}$/;
            // var d=/^[\u4E00-\u9FA5]{4}$/;正则表达式规定为汉字
            //获取手机验证码规范格式
            // verify.onblur=function(){
            //     if(b.test(verify.value)==false){
            //         i2.className="b-ierror";
            //         span2.innerHTML="请正确输入验证码";
            //         span2.style.color="#f60000";
            //     }else{
            //         i2.className="b-isuccess";
            //         span2.innerHTML="";
            //     }
            //     // if(verify.value==""){
            //     //     i2.className="b-iempty";
            //     //     span2.innerHTML="验证码不能为空";
            //     //     span2.style.color="#444";
            //     // }
            // }
            //规范密码格式
            again.onblur=function(){
                if(c.test(password.value)==false&&this.value!=""){
                    i3.className="b-ierror";
                    span3.innerHTML="密码不能小于6位";
                    span3.style.color="#f60000";
                }else if(password.value==this.value){
                    i3.className="b-isuccess";
                    span3.innerHTML="";
                }else{
                    i3.className="b-ierror";
                    span3.innerHTML="两次密码不一致";
                }
                if(password.value==""||this.value==""){
                    i3.className="b-iempty";
                    span3.innerHTML="密码不能为空";
                    span3.style.color="#444";
                }
            }
            agree.onclick=function(){
                if(agree.checked==true){
                    btn.children[0].style.background="#008842";
                }else{
                    btn.children[0].style.background="#808080";
                }
            }
            //判断图形验证码
            var code11='1234567890';
                function getcode2(n){
                    return Math.floor(Math.random()*n)
            } 
            function back2(){
                var str2='';
                for(var i=0;i<6;i++){
                    var ran=getcode2(code11.length);
                    str2+=code11.charAt(ran)
                }
                verify.value=str2;
            }
            gets.onclick=function(){
                if(picture.value!=img.innerHTML){
                    i2.className="b-ierror";
                    span2.innerHTML="图形验证码错误";
                    span2.style.color="#f60000";
                }
                if(picture.value==""){
                    i2.className="b-ierror";
                    span2.innerHTML="请输入图形验证码";
                    span2.style.color="#f60000";
                    }else if(phone.value==""){
                    i2.className="b-ierror";
                    span2.innerHTML="手机号已经存在";
                    span2.style.color="#f60000";
                    }else{
                        back2()
                    }
            }
            //点击注册同时判断
            btn.children[0].onclick=function(){
                if(agree.checked==false){
                    i4.className="b-ierror";
                    span4.innerHTML="请接受服务协议";
                    span4.style.color="#f60000";
                }else{
                    span4.innerHTML="";
                    i4.className="";
                    if(phone.value==""){
                        i1.className="b-iempty";
                        span1.innerHTML="手机号不能为空";
                        span1.style.color="#444";
                    }else if(password.value==""||this.value==""){
                        i3.className="b-iempty";
                        span3.innerHTML="密码不能为空";
                        span3.style.color="#444";
                    }else if(verify.value==""){
                        i2.className="b-iempty";
                        span2.innerHTML="验证码不能为空";
                        span2.style.color="#444";
                    }else if(a.test(phone.value)==false){
                            i1.className="b-ierror";
                            span1.innerHTML="手机号格式不正确";
                            span1.style.color="#f60000";
                    }else if(picture.value==""){
                            i1.className="b-ierror";
                            span1.innerHTML="请输入图形验证码";
                            span1.style.color="#f60000";
                    }else{
                        $.ajax({
                        type:"GET",
                        url:"http://localhost/yiguo/jnn/sign-in.php",
                        data:{
                            "phone2":$("#b-phone2").val(),
                            "pwd2":$("#b-password").val()
                        }, 
                        dataType:"jsonp", 
                        success:function(data){
                            // console.log(1111)
                            // console.log(data)
                            // console.log(data==JSON.stringify(1))
                            if(data==JSON.stringify(1)){
                                console.log(data)
                                console.log(3333)
                                i2.className="b-ierror";
                                span2.innerHTML="手机号已经存在";
                                span2.style.color="#f60000";
                            }else {
                                console.log('成功')
                                window.location.href='success.html';
                            }
                        }
                })
                }
                }
                
            }
         //协议政策   
            $(document).ready(function(){
            $("#b-deal").click(function(){
                $(".b-doc").addClass("b-doc1")
                $(".b-off,.b-continue>span").click(function(){
                    $(".b-doc").removeClass("b-doc1")
            })

            })
            $("#b-private").click(function(){
                // console.log(22222)
                $(".b-doc2").addClass("b-doc1")
                $(".b-off2,.b-continue2>span").click(function(){
                    $(".b-doc2").removeClass("b-doc1")
                    // console.log(3333)
            })

            })
            })