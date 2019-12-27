$(function(){
    // 头部
    $(window).scroll(function(){
        if($(this).scrollTop()>=30){
            $(".a-aheader").addClass("a-aheaderbg");
            $(".a-header").addClass("a-changeheader");
        }else{
            $(".a-header").removeClass("a-changeheader");
            $(".a-aheader").removeClass("a-aheaderbg");
        }
    })
    //头部登录、注册、我的易果跳转
    var phone=window.sessionStorage.getItem("phone");
    var pass=window.sessionStorage.getItem("password");
    if(phone===null){
    }else{
        $("#a-login").text(phone);
        $("#a-login").attr("href","../hxy/myfruit.html");
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
    $(".a-myyiguo a").click(function(){
        if($("#a-sign").text()=="[退出]"){
            $(".a-myyiguo a").attr("href","../hxy/myfruit.html")
        }else{
            $(".a-myyiguo a").attr("href","javascript:void(0)")
        }
    })
    $("#a-mobileyiguo").click(function(){
        if($("#a-sign").text()=="[退出]"){
            $("#a-mobileyiguo").attr("href","../hxy/myfruit.html")
        }else{
            $("#a-mobileyiguo").attr("href","javascript:void(0)")
        }
    })
    $("#a-shoppings").click(function(){
        if($("#a-sign").text()=="[退出]"){
            $("#a-mobileyiguo").attr("href","..wsl/h-cart-none.html")
        }else{
            $("#a-mobileyiguo").attr("href","../wsl/h-shopping.html")
        }
    })
    //配送地址
    $(".a-cityTab span").mouseenter(function(){
        $(this).addClass("active").siblings().removeClass("active") ;
        $(".a-cityList").css("display", "block").not($(".a-cityList").eq($(this).index())).css("display","none") ;
        $(".a-cityList .a-cities").click(function(){
            var cityarray=[[['小金县','理县','若尔盖县','壤塘县','马尔康县','黑水县','金川县','红原县','茂县','阿坝县','松藩县','九寨沟县','汶川县'],
                ['阿拉善右旗','额济纳旗','阿拉善左旗'],
                ['镇宁布依族苗族自治县','平坝区','西秀区','普定县','关岭布依族苗族自治县','平坝县','紫云苗族布依族自治县'],
                ['汤阴县','内黄县','林州区','龙安区','殷都区','北关区','安阳新区','滑县','文峰区','安阳县'],
                ['潜山县','岳西县','望江县','迎江区','宜秀区','郊区','太湖县','大观区','枞阳县','怀宁县','桐城市','宿松县'],
                ['高新区','海城市','千山区','铁西区','台安县','岫岩满族自治县','立山区','铁东区']],
            [['镇赉县','洮南市','通榆县','洮北区','大安市'],['南江县','巴州区','平昌县','恩阳区','通江县'],
                ['无棣市','邹平市','滨城市','阳信县','北海新区','惠民县','博兴县','沾化区','沾化县'],
                ['溪湖区','桓仁满族自治县','明山区','南芬区','本溪满族自治县','平山区'],
                ['乌拉特中旗','临河区','乌拉特后旗','杭锦后旗','乌拉特前旗','五原县','磴口县'],
                ['景泰县','平川区','会宁县','白银区','靖远县'],
                ['右江区','那坡县','凌云县','靖西县','田林县','德保县','乐业县','隆林各族自治县','平果县','田阳县','西林县','田东县'],
                ['龙子湖区','蚌山区','淮上区','固镇县','五河县','高新区','怀远县','禹会区'],
                ['威宁彝族回族苗族自治县','黔西县','纳雍县','赫章县','金沙县','大方县','七星关区','织金县'],
                ['龙陵县','昌宁县','隆阳区','腾冲县','施甸县'],
                ['银海区','合浦县','海城区','铁山港区'],
                ['博野县','高开区','望都县','定州市','安新县','高碑店市','清苑区','徐水区','涞源县','容城县','徐水县','易县','曲阳县','蠡县','顺平县','涞水县','满城区','南市区','唐县','高新区','高阳县','安国市','雄安新县','雄县','定兴县','满城县','新市区','涿州市','竞秀区','阜平县','清苑县','莲池区','北市区'],
                ['九原区','昆都仑区','白云矿区','石拐区','达尔汗茂明安联合旗','青山区','土默特右旗','白云鄂博矿区','东河区','固阳县'],
                ['江源区','浑江区','靖宇县','八道江区','长白朝鲜族自治县','江源县','临江市','抚松县'],
                ['海淀区','宣武区','石景山区','门头沟区','大兴区','通州区','昌平区','西城区','丰台区','顺义区','朝阳区','东城区','房山区','崇文区'],
                ['延庆区','柔怀区','平谷区','密云区']],
            [['朝阳区','双塔区','北票市','喀喇沁左翼蒙古族自治县','龙城区','凌源市','建平县'],
                ['崇明县'],
                ['慈溪市'],
                ['宁明县','大新县','扶绥县','凭祥市','江州市','江州区','天等县','龙州县'],
                ['桃源县','石门县','武陵区','汉寿县','鼎城区','灃县','临灃县','津市市','安乡县'],
                ['全椒县','凤阳县','天长市','来安县','定远县','明光市','琅琊区','南谯区'],
                ['永兴县','宜章县','资兴市','临武县','苏仙区','安仁县','汝城县','桂阳县','北湖区','桂东县','嘉禾县'],
                ['城区','长子县','沁源县','潞城市','黎城县','郊区','长治县','壶关县','武乡县','屯留县','襄垣县','平顺县','沁县'],
                ['姚安县','牟定县','武定县','永仁县','大姚县','元谋县','南华县','双柏县','禄丰县','楚雄县'],
                ['武侯区','郫县','崇州市','龙泉驿区','双流区','金牛区','金堂县','大邑县','高新南区','天府新区','简阳市','温江区','青白江区','青羊区','都江堰市','郫都区','彭州市','新都区','邛崃市','新津县','成华区','高新西区','浦江县','锦江区','双流县','高新区'],
                ['宽城满族自治县','围场满族蒙古自治县','隆化县','鹰手营子矿区','承德县','丰宁满族自治县','兴隆县','滦平县','双桥区','双滦区','平泉县'],
                ['阿鲁科尔沁旗','宁城县','巴林左旗','翁牛特旗','巴林右旗','红山区','松山区','元宝山区','临西县','喀喇沁旗','克什克腾旗','敖汉旗'],
                ['常熟市'],
                ['农安县','九台市','南关区','经济开发区','汽车产业区','九台区','二道区','朝阳区','长春新区','兴隆综合保税区','汽车产业开发区','宽城区','绿园区','开发区','净月区','双阳区','德惠市','榆树市','高新区'],
                ['溧阳市','天宁区','武进区','高新区','金坛市','新北区','戚墅堰区','钟楼区','金坛区'],
                ['青阳县','东至县','石台县','贵池区'],
                ['宁乡县','望城县','湘江新区','开福区','长沙县','天心区','岳麓区','芙蓉区','雨花区','浏阳市','望城区'],
                ['居巢区','庐江县','含山县'],
                ['河间市','孟村回族自治县','沧县','青县','海兴县','黄骅市','任丘市','新华区','渤海新区','盐山县','泊头市','东光县','肃宁县','吴桥县','运河区','临港经济开发区','献县','南皮县'],
                ['湘桥区','潮安区','潮安县','饶平县','枫溪区'],
                ['大渡口区','璧山区','南川区','武隆县','彭水','綦江区','九龙坡区','双桥区','渝北区','南岸区','潼南区','涪陵区','城口区','大足区','丰都县','巫山县','黔江区','巫溪县','永川区','巴南区','铜梁区','万盛区','江北区','开县','长寿区','奉节县','垫江县','万州区','江津区','北培区','酉阳','梁平县','石柱','云阳县','渝中区','合川区','忠县','秀山','沙坪坝区','荣昌区']],
            [['元宝区','东港市','宽甸满族自治县','振兴区','凤城市','振安区'],
                ['开江县','宣汉县','渠县','通川区','万源市','达川区','大竹县','达县'],
                ['常平镇','谢岗镇','黄江镇','石排镇','南城街道','企石镇','东坑镇','东城街道','横沥镇','莞城街道','东莞市','石龙镇','大朗镇','清溪镇','寮步镇','茶山镇','万江街道','樟木头镇','石碣镇','桥头镇'],
                ['肇州县','红岗区','让胡路区','林甸县','龙凤区','杜尔伯特蒙古族自治县','萨尔图区','大同区','肇源县','高新区'],
                ['广饶县','垦利县','河口区','东营区','利津县','垦利区'],
                ['陵县','平原县','夏津县','宁津县','禹城市','德城区','陵城区','临邑县','乐陵市','庆云县','齐河县','武城县'],
                ['灵丘县','广灵县','南郊区','阳高县','左云县','大同县','城区','矿区','新荣区','天镇县','浑源县'],
                ['德钦县','维西僳僳族自治县','香格里拉县'],
                ['旅顺口区','甘井子区','开发区','长海县','普兰店区','经济开发区','高新区','瓦房店市','庄河市','普兰店市','金普新区','中山区','沙河口区','金州区','西岗区'],
                ['安定区','渭源县','陇西县','临洮县','岷县','通渭县','漳县'],
                ['陇川县','梁河县','盈江县','瑞丽市','芒市','潞西市'],
                ['南涧彝族自治县','鹤庆县','漾濞彝族自治县','弥渡县','云龙县','永平县','祥云县','大理市','巍山彝族回族自治县','洱源县','剑川县','宾川县'],
                ['丹阳市'],
                ['呼玛县','塔河县','漠河县']],
            [['梁子湖区','鄂城区','华容区'],
                ['利川市','宣恩县','鹤峰县','建始县','巴东县','咸丰县','来凤县','恩施市'],
                ['准格尔旗','鄂托克旗','东胜区','杭锦旗','达拉特旗','乌审旗','鄂托克前旗','伊金霍洛旗']]]
            var i=$(this).parent("dd").parent("dl").index() ;
            var citiesnum=Math.floor($(this).index()/5);
            $(".a-cityarea").remove();
            $("dl").eq(i).children().children(".a-append").eq(citiesnum).after(`<div class="a-cityarea"></div>`);
            for(var j=0; j<cityarray[i][$(this).index()].length; j++){
                $(".a-cityarea").append(`<a>${$(cityarray)[i][$(this).index()][j]}</a>`);     
            }
            var hottext=$(this).text() ;
                $(".a-cityarea a").click(function(){
                $(".a-city").text(hottext);
            })
        })
    })
    //图片滑动效果
    $(".a-imgSlide img ,.a-types-content img").mouseenter(function(){ 
        $(this).animate({"left":3},50) ;  
    });
    $(".a-imgSlide img ,.a-types-content img").mouseout(function(){ 
        $(this).animate({"left":0},50) ;  
    });
   //楼层高亮效果
    $(window).scroll(function(){
        if($(this).scrollTop()>=500&&$(this).scrollTop()<=4500){
            $(".a-floorNav").show();
            var height=Math.floor(($(this).scrollTop()-650 )/463);
            $(".a-floorNav em").css("display", "block").not($(".a-floorNav em").eq(height)).css("display","none") ;   
            $(".a-floorNav b").css("display", "none").not($(".a-floorNav b").eq(height)).css("display","block");  
        }else{
            $(".a-floorNav").hide();
        }
        $(".a-floorNav a").mouseover(function(){
            $(".a-floorNav em").eq($(this).index()).css("display", "block") ;
            $(".a-floorNav b").eq($(this).index()).css("display", "none") ;
        });
        $(".a-floorNav a").mouseout(function(){
            $(".a-floorNav em").eq($(this).index()).css("display", "none") ;
            $(".a-floorNav b").eq($(this).index()).css("display", "block") ;
        });
        
        $(".a-floorNav a").click(function(){
            var m=$(this).index() ;
            $(window).scrollTop(m*495+650);
            console.log($(window).scrollTop());
        })
    })
    //回到顶部
    $(".a-navbarBack").hide() ;
    $(window).scroll(function () {
        var scrollTop=$("html").scrollTop() ;
        if (scrollTop<=650) {
            $(".a-navbarBack").fadeOut();
        } else {
            $(".a-navbarBack").fadeIn();
        }
    })
    $(".a-navbarBack").click(function () {
        $("html").animate({
            scrollTop:"0"
        },1000)
    })

})                             