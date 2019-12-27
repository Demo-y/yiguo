$(function(){
    //商品图片切换
    $(".f-conImg img").mouseover(function(){
        $(".f-contentImg img").eq($(this).index()).addClass("picture").fadeIn().siblings().removeClass("picture").hide();
    })
    //商品数量加减
    var num=$(".f-conBtn1 input").val()
    $(".f-minu").click(function(){
        if( $(".f-conBtn1 input").val()<=1){
            $(".f-conBtn1 input").val("1")

        }else{
            $(".f-conBtn1 input").val(--num);
        }
    })
    $(".f-add").click(function(){
        $(".f-conBtn1 input").val(++num);
    })
    //用户评论切换
    $(".f-hotList span").click(function(){
        $(this).addClass("f-green").siblings().removeClass("f-green");
        $(".f-hotContent").eq($(this).index()).removeClass("f-hotContent1").siblings(".f-hotContent").addClass("f-hotContent1");
    })
    $(".f-listBox span").click(function(){
        $(this).addClass("f-on").siblings().removeClass("f-on");
        $(".f-discuss .f-discuss1").eq($(this).index()).removeClass("f-personDis").siblings().addClass("f-personDis")
    })
     //评论导航固定定位
    var Height=document.body.scrollHeight;
    $(window).scroll(function(){
        if($(window).scrollTop()>=1065){
           $(".f-hotList").addClass("f-hotFixed")
           $(".f-append").css("display","block")
        }else{
            $(".f-hotList").removeClass("f-hotFixed")
            $(".f-append").css("display","none")
        }
    })
    //f-food tab切换
    $(".f-Menu1 a").click(function(){
        $(this).addClass("f-fcolor").siblings().removeClass("f-fcolor");
    })
    //f-food 喜欢人数
    $(".f-fLike i").click(function(){
            var number=$(this).siblings("span").html();
            $(this).siblings("span").html(++number);
        })

    //猜你喜欢 
    $(".d-commodity ul li").click(function(){
        localStorage.setItem("pit",$(this).children(".d-pic").html());
        localStorage.setItem("tit",$(this).children(".d-comname").children("a").html()); 
        console.log($(this).children(".d-pic").html())
        console.log($(this).children(".d-comname").children("a").html())
    })
     if(localStorage.pit){
        $(".f-browse").css({"display":"block"})
        $(".f-browse .f-Left2").append(`
        <li>
            <div class="f-leftImg">
                <i class="f-dustbin"></i>
                ${localStorage.getItem("pit")}
            </div>
            <div class="f-leftDetail">
                <a href="javascript:void(0)">
                <b>${localStorage.getItem("tit")}</b>
                </a>
            </div>
        </li>
        `)
      }
    if($(".f-browse .f-Left2 li").lenght==0){
        $(".f-browse").css({"display":"none"})
    }
    $(".f-browse h5>span").click(function(){
        $(".f-browse .f-Left2 li").lenght=0;
        $(".f-browse").css({"display":"none"})
        localStorage.clear();
    })
    $(".f-Left2 li .f-dustbin").click(function(){
        $(".f-Left2 li").eq($(this).index()).remove()
        $(".f-browse").css({ "display": "none" })
        localStorage.removeItem("pit")
        localStorage.removeItem("tit")
    })
    //确认登录
    $(".f-peoplePro a").click(function(){
        if($(".a-siteNavRight li a").html()=="[登录]"){
            alert("请登录!");
        }else{
            window.location.href="../hxy/myfruit.html"
        }
    })
    var phone=window.sessionStorage.getItem("phone");
    var pass=window.sessionStorage.getItem("password");
    if(phone===null){
    }else{
        $("#a-login").text(phone);
        $("#a-sign").text("[退出]");
    }
    $("#a-sign").click(function(){
        if($("#a-sign").text()=="[退出]"){
            $("#a-sign").attr("href","javascript:void(0)")
            $("#a-sign").text("[注册]");
            $("#a-login").text("[登录]");
            sessionStorage.clear() ;
        }
    })
})
