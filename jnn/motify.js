//修改密码第一步
   var btn1=document.getElementById("b-change");
   var img=document.getElementsByClassName("b-img")[0];
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
   var verify=document.getElementsByClassName("b-verify")[0];
   var email=document.getElementById("b-email");
   var i2=document.getElementById("b-ii2");
   var i1=document.getElementById("b-ii1");
   var span2=document.getElementById("b-spann2");
   var span1=document.getElementById("b-spann1");
   var next=document.getElementsByClassName("b-next")[0].firstElementChild;
   var step1=document.getElementsByClassName("b-step")[0];
   var step2=document.getElementsByClassName("b-step1")[0];
   var step3=document.getElementsByClassName("b-step2")[0];
   var star=document.getElementsByClassName("b-star")[0];
   var a = /^1[3|4|5|6|7|8|9][0-9]\d{4,8}$/
   var c=/^[\w.]{6,20}$/;
   step3.style.display="none";
   verify.onblur=function(){
       if(verify.value==""){                           
           i2.className="b-iempty";
           span2.innerHTML="验证码不能为空";
           span2.style.color="#444";
       }
   }
   email.onblur=function(){
       if(email.value==""){
           i1.className="b-iempty";
           span1.innerHTML="请输入你的手机号或邮箱";
           span1.style.color="#444";
       }
   }
    next.onclick=function(){
        if(verify.value!=img.innerHTML){
                i2.className="b-ierror";
                span2.innerHTML="校验码错误";
                span2.style.color="#f60000";
                email.value=="";
                verify.value==""
                back()
            }else if(a.test(email.value)==false){
                i1.className="b-ierror";
                span1.innerHTML="您输入手机号/邮箱不存在";
                span1.style.color="#f60000"; 
            }else{
            $.ajax({
                    type:"GET",
                    url:"http://localhost/yiguo/jnn/motify.php",
                    data:{
                        "email":$("#b-email").val(),
                    }, 
                    dataType:"jsonp",
                    success:function(data){
                        console.log(1111)
                        console.log(data)
                        if(data==JSON.stringify(1)){
                            step1.style.display="none";
                            step2.style.display="block";
                            var m=email.value.toString().slice(0,3);
                            var n=email.value.toString().slice(7,11);
                            star.innerHTML=m+"*****"+n;
                        }else {
                            console.log(data)
                            console.log(3333)
                            email.value="";
                            verify.value=""
                            back();
                            i1.className="b-ierror";
                            span1.innerHTML="您输入手机号/邮箱不存在";
                            span1.style.color="#f60000"; 
                        }
                    }
            })
        }
    }
  //修改密码第二步
       var next1=document.getElementById("b-next1")
       var msg=document.getElementsByClassName("b-msg")[0];
       var write=document.getElementById("b-write");
       var code='1234567890';
       function getcode1(n){
           return Math.floor(Math.random()*n)
       }
       msg.onclick=function(){
           back1()
       }
       function back1(){
           var str1='';
           for(var i=0;i<6;i++){
               var ran=getcode1(code.length);
               str1+=code.charAt(ran)
           }
           write.value=str1;
       }
    next1.onclick=function(){
        if(write.value==""){
            alert("请输入验证码")
        }else{
            step2.style.display="none";
            step3.style.display="block";
        }
    }
    //修改密码第三步
       var new1=document.getElementsByClassName("b-new1")[0];
       var new2=document.getElementsByClassName("b-new2")[0];
       var i3=document.getElementById("b-ii3");
       var i4=document.getElementById("b-ii4");
       var span3=document.getElementById("b-spann3");
       var span4=document.getElementById("b-spann4");
       var next2=document.getElementById("b-next2");
       var step4=document.getElementsByClassName("b-step3")[0];
       new1.onblur=function(){
           if(new1.value==""){
               i3.className="b-ierror";
               span3.innerHTML="请输入密码";
               span3.style.color="#f60000";
           }else if(c.test(new1.value)==false&&this.value!=""){
               i3.className="b-ierror";
               span3.innerHTML="密码不能小于6位";
               span3.style.color="#f60000";
           }else{
               i3.className="";
               span3.innerHTML="";
           }
       }
       new2.onblur=function(){
           if(new2.value==""){
               i4.className="b-ierror";
               span4.innerHTML="请输入密码";
               span4.style.color="#f60000";
           }else if(new2.value!=new1.value){
               i4.className="b-ierror";
               span4.innerHTML="两次密码不一致";
           }else{
               i4.className="";
               span4.innerHTML="";
           }
       }
       next2.onclick=function(){
           if(new1.value!=""&&new2.value!=""){
                $.ajax({
                    type:"GET",
                    url:"http://localhost/yiguo/jnn/motify1.php",
                    data:{
                        "email":$("#b-email").val(),
                        "ps":$("#b-new").val()
                    }, 
                    dataType:"jsonp", 
                    success:function(data){
                        console.log(data)
                        console.log($("#b-new").val())
                        console.log(data==$("#b-new").val())
                        if(data==$("#b-new").val()){
                            step3.style.display="none";
                            step4.style.display="block";
                        }else {
                            i3.className="b-ierror";
                            span3.innerHTML="密码重置失败";
                            span3.style.color="#f60000";
                        }
                        
                    }
                })
           }
       }