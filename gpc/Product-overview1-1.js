$(function(){
    $("#d-dj1").click(function(){
        $("#d-bgi1").css("background-position","-10px 0");
        $("#d-bgi3").css("background-position","0 0");
            $("#d-bgi2").css("background-position","30px 0");
            $("#d-dj1").css("background-color","#eaeaea").siblings().css("background-color","#fff");
    })
    var num = 0;
    $("#d-dj2").click(function(){
        num=num+1;
        if(num%2==0){
            $("#d-bgi2").css("background-position","-39px 0");
            $("#d-bgi1").css("background-position","0 0");
            $("#d-bgi3").css("background-position","0 0");
            $("#d-dj2").css("background-color","#eaeaea").siblings().css("background-color","#fff");
        }else{
            $("#d-bgi2").css("background-position","-29px 0");
            $("#d-bgi1").css("background-position","0 0");
            $("#d-bgi3").css("background-position","0 0");
            $("#d-dj2").css("background-color","#eaeaea").siblings().css("background-color","#fff");
        }
    })
    $("#d-dj3").click(function(){
        $("#d-bgi3").css("background-position","-10px 0");
        $("#d-bgi1").css("background-position","0 0");
            $("#d-bgi2").css("background-position","30px 0");
            $("#d-dj3").css("background-color","#eaeaea").siblings().css("background-color","#fff");
    })
})


