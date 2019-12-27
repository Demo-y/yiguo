     
$(function(){ 
    var phone=window.sessionStorage.getItem("phone");  
    $(".c-user-tel").html(phone)
    $(".c-safe-a1").html(phone.slice(0,3)+"****"+phone.slice(7,11)) 
    // 我的订单
    $(".c-message").eq(0).click(function(){
        $(".c-right").empty()
        $(".c-message").siblings().removeClass("c-color")
        $(".c-message").eq(0).addClass("c-color")
        $(".c-top a").siblings().removeClass("c-mine")
        $(".c-top i").eq(1).removeClass("c-next")
        $(".c-top a").eq(2).html("我的订单").addClass("c-mine")
        $(".c-right").append(`
            <div class="c-order">
                <div class="c-order-title">
                    我的订单
                    <div class="c-order-rigth">
                        <select name="" id="">
                            <option value="">近一个月的订单</option>
                            <option value="">三个月内订单</option>
                            <option value="">近5年订单</option>
                            <option value="">历史订单</option>
                        </select> 
                        <select name="" id="" class="c-order-list">
                            <option value="">全部状态</option>
                            <option value="">进行中</option>
                            <option value="">已确认</option>
                            <option value="">等待发货</option>
                            <option value="">等待收货</option>
                            <option value="">已完成</option>
                            <option value="">已取消</option>
                        </select>
                    </div>
                </div>
                <div class="c-order-li">
                    <span class="c-order-message">订单信息</span>
                    <span class="c-order-message1">实付金额</span>
                    <span class="c-order-message1">订单状态</span>
                    <span class="c-order-message1">操作</span>
                </div>
                <div class="c-order-content">
                    亲爱的易果用户，您目前尚无记录呦～
                    <a href="">快去逛逛吧</a>～
                </div> 
            </div> 
        `)
    })
    //我的优惠券
    $(".c-message").eq(1).click(function(){
        $(".c-right").empty()
        $(".c-message").siblings().removeClass("c-color")
        $(".c-message").eq(1).addClass("c-color")
        $(".c-top a").siblings().removeClass("c-mine")
        $(".c-top i").eq(1).removeClass("c-next")
        $(".c-top a").eq(2).html("我的优惠券").addClass("c-mine")
        $(".c-right").append(`
        <div class="c-coupon">
            <div class="c-coupon-title">
                我的优惠券
                <a>关于会员礼发放调整的通知</a>    
            </div>
            <div class="c-coupon-tab">
                <span class="c-coupon-on">未使用优惠券</span>
                <span>已使用优惠券</span>
                <span>已过期优惠券</span>
            </div>
            <div class="c-changetab"> 
                <div class="c-coupon-content">
                    <div class="c-couponList">
                        <div class="c-couponPrice">
                            30<span class="c-couponcost">元</span>
                            <span class="c-cost">满<b>99.00</b>元</span> 
                        </div>
                        <div class="c-fr">
                            <p>
                                <b>【优惠券】</b>
                                新人好礼：全网满99减30元券(特殊商品及卡券除外）
                            </p>
                            <span>截止日期：2019/09/30</span>
                        </div>
                    </div>
                    <div class="c-couponList">
                        <div class="c-couponPrice">
                            50<span class="c-couponcost">元</span>
                            <span class="c-cost">满<b>188.00</b>元</span> 
                        </div>
                        <div class="c-fr">
                            <p>
                                <b>【优惠券】</b>
                                新人好礼：全网满188减50元券(特殊商品及卡券除外）
                            </p>
                            <span>截止日期：2019/10/07</span>
                        </div>
                    </div>
                    <div class="c-couponList">
                        <div class="c-couponPrice">
                            50<span class="c-couponcost">元</span>
                            <span class="c-cost">满<b>199.00</b>元</span> 
                        </div>
                        <div class="c-fr">
                            <p>
                                <b>【优惠券】</b>
                                仅限专场商品满199减50
                            </p>
                            <span>截止日期：2019/09/30</span>
                        </div>
                    </div>
                    <div class="c-couponList">
                        <div class="c-couponPrice">
                            100<span class="c-couponcost">元</span>
                            <span class="c-cost">满<b>299.00</b>元</span> 
                        </div>
                        <div class="c-fr">
                            <p>
                                <b>【优惠券】</b>
                                【优惠券】仅限大闸蟹部分商品满299减100
                            </p>
                            <span>截止日期：2019/12/31</span>
                        </div>
                    </div>
                    <div class="c-currencyPage">
                        <span class="c-switchPage">上一页</span>
                        <a class="c-pageNow">1</a>
                        <span class="c-switchPage">下一页</span>
                        <span class="c-allPage">共 1页</span>
                        <span class="c-pageTarget">到第<input type="text" value=1 class="c-pageIpt">页</span> 
                        <button class="c-pageOk">确定</button> 
                    </div>   
                </div>
                <div class="c-coupon-content">
                    <div class="c-tab-con">
                        <table cellspacing=0> 
                            <tr class="c-tabth">
                                <td width="12%">优惠券代码</td>
                                <td width="8%">面值</td>
                                <td width="40%">优惠券描述</td>
                                <td width="10%">截止日期</td>
                                <td width="10%">使用时间</td>
                            </tr>   
                            <tr class="c-tabth1">
                                <td>记录为空</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="c-coupon-content">
                    <div class="c-tab-con">
                        <table cellspacing=0 class="c-changetab"> 
                            <thead>
                                <tr class="c-tabth">
                                    <td width="12%">优惠券代码</td>
                                    <td width="8%">面值</td> 
                                    <td width="10%">需消费金额</td>
                                    <td width="40%">优惠券描述</td>
                                    <td width="10%">使用时间</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Q1909202103</td>
                                    <td>¥10</td>
                                    <td>¥10.00</td>
                                    <td>10元优惠券（限选择工行e支付作为支付方式时使用）</td>
                                    <td>2019-09-22</td>
                                </tr>
                                <tr>
                                    <td>Q1909132071</td>
                                    <td>¥20</td>
                                    <td>¥0.00</td>
                                    <td>工行e支付专享文旦柚3kg礼盒装20元优惠券</td>
                                    <td>2019-09-15</td>
                                </tr>
                                <tr>
                                    <td>Q1909102059</td>
                                    <td>¥50</td>
                                    <td>¥239.00</td>
                                    <td>礼盒商品满239减50</td>
                                    <td>2019-09-16</td>
                                </tr>
                                <tr>
                                    <td>Q1909052038</td>
                                    <td>¥50</td>
                                    <td>¥188.00</td>
                                    <td>专场满188减50（仅部分商品可用）</td>
                                    <td>2019-09-15</td>
                                </tr>
                                <tr>
                                    <td>Q1909072049</td>
                                    <td>¥60</td>
                                    <td>¥0.00</td>
                                    <td>仅限佳沛巨无霸金果3.3kg原箱(22-25个)使用 券后189元</td>
                                    <td>2019-09-11</td>
                                </tr>
                                <tr>
                                    <td>Q1909062044</td>
                                    <td>¥30</td>
                                    <td>¥0.00</td>
                                    <td>工行e支付专享突尼斯石榴9个礼盒装(270-320g/个)30元券</td>
                                    <td>2019-09-08</td>
                                </tr>
                                <tr>
                                    <td>Q1908281989</td>
                                    <td>¥60</td>
                                    <td>¥0.00</td>
                                    <td>仅限佳沛巨无霸金果3.3kg原箱(22-25个)使用 券后189元</td>
                                    <td>2019-09-11</td>
                                </tr>
                                <tr>
                                    <td>Q1908181951</td>
                                    <td>¥10</td>
                                    <td>¥10.00</td>
                                    <td>10元优惠券（限选择工行e支付作为支付方式时使用）</td>
                                    <td>2019-08-18</td>
                                </tr>
                                <tr>
                                    <td>Q1908151928</td>
                                    <td>¥50</td>
                                    <td>¥249.00</td>
                                    <td>甜蜜红包满249减50（部分商品不可用）</td>
                                    <td>2019-08-23</td>
                                </tr>
                                <tr>
                                    <td>Q1908151927</td>
                                    <td>¥30</td>
                                    <td>¥149.00</td>
                                    <td>清爽红包满149减30（仅部分商品可用）</td>
                                    <td>2019-08-23</td>
                                </tr>
                                <tr>
                                    <td>Q1908151930</td>
                                    <td>¥40</td>
                                    <td>¥99.00</td>
                                    <td>仅限天润部分酸奶使用，满99可减40元</td>
                                    <td>2019-08-17</td>
                                </tr>
                                <tr>
                                    <td>Q1908121921</td>
                                    <td>¥40</td>
                                    <td>¥99.00</td>
                                    <td>适用于天润部分商品，满99可减40元</td>
                                    <td>2019-08-13</td>
                                </tr>
                                <tr>
                                    <td>Q1908081909</td>
                                    <td>¥20</td>
                                    <td>¥99.00</td>
                                    <td>适用于部分快手料理商品，满99可减20元</td>
                                    <td>2019-08-16</td>
                                </tr>
                            </tbody> 
                        </table>
                        <table cellspacing=0 class="c-changetab"> 
                            <thead>
                                <tr class="c-tabth">
                                    <td width="12%">优惠券代码</td>
                                    <td width="8%">面值</td> 
                                    <td width="10%">需消费金额</td>
                                    <td width="40%">优惠券描述</td>
                                    <td width="10%">使用时间</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Q1908071897</td>
                                    <td>¥50</td>
                                    <td>¥249.00</td>
                                    <td>全网满249可用（部分商品不可用）</td>
                                    <td>2019-08-16</td>
                                </tr>
                                <tr>
                                    <td>Q1908051892</td>
                                    <td>¥20</td>
                                    <td>¥0.00</td>
                                    <td>仅限购买美心流心奶黄月饼，下单后立减20元</td>
                                    <td>2019-08-12</td>
                                </tr>
                                <tr>
                                    <td>Q1908051891</td>
                                    <td>¥50</td>
                                    <td>¥249.00</td>
                                    <td>全网商品满249减50（部分商品不参加）</td>
                                    <td>2019-08-07</td>
                                </tr>
                                <tr>
                                    <td>Q1908021889</td>
                                    <td>¥20</td>
                                    <td>¥99.00</td>
                                    <td>适用于部分酸奶产品，满99元可减20元</td>
                                    <td>2019-08-09</td>
                                </tr>
                                <tr>
                                    <td>Q1907261870</td>
                                    <td>¥30</td>
                                    <td>¥149.00</td>
                                    <td>适用于部分啤酒及小龙虾产品，用券满149减30元</td>
                                    <td>2019-08-02</td>
                                </tr>
                                <tr>
                                    <td>Q1907241862</td>
                                    <td>¥40</td>
                                    <td>¥199.00</td>
                                    <td>全网满199减40（除卡券、产地直发、特惠商品外）</td>
                                    <td>2019-07-29</td>
                                </tr>
                                <tr>
                                    <td>Q1907231857</td>
                                    <td>¥20</td>
                                    <td>¥99.00</td>
                                    <td>购买天润系列产品可满99减20</td>
                                    <td>2019-07-26</td>
                                </tr>
                                <tr>
                                    <td>Q1907231856</td>
                                    <td>¥300</td>
                                    <td>¥799.00</td>
                                    <td>澳洲和牛799-300</td>
                                    <td>2019-08-12</td>
                                </tr>
                                <tr>
                                    <td>Q1907231854</td>
                                    <td>¥50</td>
                                    <td>¥249.00</td>
                                    <td>全网满249减50（除卡券、产地直发、特惠商品外））</td>
                                    <td>2019-07-29</td>
                                </tr>
                                <tr>
                                    <td>Q1907151836</td>
                                    <td>¥150</td>
                                    <td>¥299.00</td>
                                    <td>仅限专场商品299减150</td>
                                    <td>2019-07-22</td>
                                </tr>
                                <tr>
                                    <td>Q1907091804</td>
                                    <td>¥100</td>
                                    <td>¥0.00</td>
                                    <td>GEE WHIZ手工莱尼尔樱桃，用券立减100元，券后价599元</td>
                                    <td>2019-07-11</td>
                                </tr>
                                <tr>
                                    <td>Q1907051802</td>
                                    <td>¥100</td>
                                    <td>¥259.00</td>
                                    <td>专场活动商品满259减100</td>
                                    <td>2019-07-15</td>
                                </tr>
                                <tr>
                                    <td>Q1907031790</td>
                                    <td>¥100</td>
                                    <td>¥259.00</td>
                                    <td>专场商品满259减100</td>
                                    <td>2019-07-08</td>
                                </tr>
                            </tbody> 
                        </table>
                        <table cellspacing=0 class="c-changetab"> 
                            <thead>
                                <tr class="c-tabth">
                                    <td width="12%">优惠券代码</td>
                                    <td width="8%">面值</td> 
                                    <td width="10%">需消费金额</td>
                                    <td width="40%">优惠券描述</td>
                                    <td width="10%">使用时间</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Q1907021779</td>
                                    <td>¥50</td>
                                    <td>¥0.00</td>
                                    <td>猫山王榴莲礼盒装专享，用券立减50元，券后价349元</td>
                                    <td>2019-07-29</td>
                                </tr>
                                <tr>
                                    <td>Q1906271770</td>
                                    <td>¥50</td>
                                    <td>¥249.00</td>
                                    <td>全网满249减50（除卡券、产地直发、特惠商品外）</td>
                                    <td>2019-06-30</td>
                                </tr>
                                <tr>
                                    <td>Q1906221761</td>
                                    <td>¥50</td>
                                    <td>¥249.00</td>
                                    <td>全网商品满249减50(除卡券、产地直发、特惠商品外)</td>
                                    <td>2019-06-30</td>
                                </tr>
                                <tr>
                                    <td>Q1906141749</td>
                                    <td>¥40</td>
                                    <td>¥239.00</td>
                                    <td>全网满239减40（除卡券、产地直发、特惠商品外）</td>
                                    <td>2019-06-20</td>
                                </tr>
                                <tr>
                                    <td>Q1906121747</td>
                                    <td>¥30</td>
                                    <td>¥199.00</td>
                                    <td>全网满199减30（卡券、产地直发、特惠商品除外）</td>
                                    <td>2019-06-14</td>
                                </tr>
                                <tr>
                                    <td>Q1906101740</td>
                                    <td>¥60</td>
                                    <td>¥299.00</td>
                                    <td>全网满299减60（除卡券、产地直发、特惠商品外）</td>
                                    <td>2019-06-20</td>
                                </tr>
                                <tr>
                                    <td>Q1906041717</td>
                                    <td>¥50</td>
                                    <td>¥259.00</td>
                                    <td>满259减50（除卡券、产地直发、特惠商品外）</td>
                                    <td>2019-06-10</td>
                                </tr>
                                <tr>
                                    <td>Q1907231856</td>
                                    <td>¥300</td>
                                    <td>¥799.00</td>
                                    <td>澳洲和牛799-300</td>
                                    <td>2019-06-30</td>
                                </tr>
                                <tr>
                                    <td>Q1905271698</td>
                                    <td>¥60</td>
                                    <td>¥299.00</td>
                                    <td>全网满299减60（除特惠、组合、卡券商品外）</td>
                                    <td>2019-06-04</td>
                                </tr> 
                            </tbody> 
                        </table> 
                    </div>
                    <div class="c-currencyPage">
                        <span class="c-switchPage1">上一页</span>
                        <a class="c-page1 c-pageNow1">1</a>
                        <a class="c-page1">2</a>
                        <a class="c-page1">3</a>
                        <span class="c-switchPage2">下一页</span>
                        <span class="c-allPage1">共 3页</span>
                        <span class="c-pageTarget">到第<input type="text" class="c-pageIpt1" value="1">页</span>
                        <button class="c-pageOk">确定</button> 
                    </div> 
                </div>
            </div>
        </div>
        `)
        $(".c-coupon-content").eq(1).css("display","none")
        $(".c-coupon-content").eq(2).css("display","none")
        $(".c-tab-con table").eq(2).css("display","none")
        $(".c-tab-con table").eq(3).css("display","none")
        $(".c-coupon-tab span").click(function(){ 
            $(".c-coupon-tab span").siblings().removeClass("c-coupon-on") 
            $(this).addClass("c-coupon-on") 
            $(".c-coupon-content").eq($(this).index()).css("display","block").siblings().css("display","none")
            $(".c-page1").click(function(){ 
                $(".c-tab-con table").eq($(this).index()).css("display","table").siblings().css("display","none")
                $(this).addClass("c-pageNow1").siblings().removeClass("c-pageNow1"); 
            })
            // 上一页
            $(".c-switchPage1").click(function(){ 
                if($(".c-pageNow1").html()==1) {
                    $(".c-tab-con table").eq(1).css("display","table").siblings().css("display","none")
                }
                if($(".c-pageNow1").html()==2) {
                    $(".c-page1").eq(0).addClass("c-pageNow1").siblings().removeClass("c-pageNow1");
                    $(".c-tab-con table").eq(1).css("display","table").siblings().css("display","none")
                }
                if($(".c-pageNow1").html()==3) {
                    $(".c-page1").eq(1).addClass("c-pageNow1").siblings().removeClass("c-pageNow1");
                    $(".c-tab-con table").eq(2).css("display","table").siblings().css("display","none") 
                }
            })
            // 下一页
            $(".c-switchPage2").click(function(){ 
                if($(".c-pageNow1").html()==2) {
                    $(".c-page1").eq(2).addClass("c-pageNow1").siblings().removeClass("c-pageNow1");
                    $(".c-tab-con table").eq(3).css("display","table").siblings().css("display","none")
                }
                if($(".c-pageNow1").html()==1) {
                    $(".c-page1").eq(1).addClass("c-pageNow1").siblings().removeClass("c-pageNow1");  
                    $(".c-tab-con table").eq(2).css("display","table").siblings().css("display","none")
                } 
                if($(".c-pageNow1").html()==3) { 
                    $(".c-tab-con table").eq(3).css("display","table").siblings().css("display","none") 
                }
            })
            // 点击确定按钮
            $(".c-pageOk").click(function(){
                if($(".c-pageIpt1").val()>=3) {
                    $(".c-pageIpt1").val("3")
                    $(".c-page1").eq(2).addClass("c-pageNow1").siblings().removeClass("c-pageNow1");
                    $(".c-tab-con table").eq(3).css("display","table").siblings().css("display","none") 
                }
                if($(".c-pageIpt1").val()==2) {
                    $(".c-page1").eq(1).addClass("c-pageNow1").siblings().removeClass("c-pageNow1");
                    $(".c-tab-con table").eq(2).css("display","table").siblings().css("display","none")
                }
                if($(".c-pageIpt1").val()<=1) {
                    $(".c-pageIpt1").val("1") 
                    $(".c-tab-con table").eq(1).css("display","table").siblings().css("display","none")
                }  
            })
        })
            
    })
    // // 我的悠币 
    $(".c-message").eq(2).click(function(){
        $(".c-right").empty()
        $(".c-message").siblings().removeClass("c-color")
        $(".c-message").eq(2).addClass("c-color")
        $(".c-top a").siblings().removeClass("c-mine")
        $(".c-top i").eq(1).removeClass("c-next")
        $(".c-top a").eq(2).html("我的悠币").addClass("c-mine")
        $(".c-right").append(`
            <div class="c-currencyMine">
                <div class="c-order-title">
                    我的悠币
                </div>
                <div class="c-currencyContent">
                    当前可用悠币：
                    <b>140.00</b>个
                    <a href="" class="c-forGoods">兑换商品</a>
                    <a href="../myy/BusinessQualification.html" class="c-howGain">如何获取悠币</a>
                </div>
                <div class="c-orderGain">
                    <span class="c-currencyOn">获取明细</span>
                    <div class="c-orderSelect">
                        <select name="" id="" class="c-orderSelect1">
                            <option value="全部">全部</option>
                            <option value="支出悠币">支出悠币</option>
                            <option value="获取悠币">获取悠币</option>
                        </select> 
                        <select name="" id="" class="c-order-list">
                            <option value="近一个月记录">近一个月记录</option>
                            <option value="近三个月内记录">近三个月内记录</option>
                            <option value="全部记录">全部记录</option> 
                        </select>
                    </div>
                </div> 
                <div  class="c-minetab">
                    <table cellspacing=0>
                        <tr class="c-tabHead">
                            <td width="10%">序号</td>
                            <td width="25%">日期</td>
                            <td width="15%">收支</td>
                            <td width="15%">来源</td>
                            <td width="20%">详情</td>
                            <td width="15%">账户悠币余额</td> 
                        </tr>
                        <tbody class="c-tbody">
                            <tr>
                                <td>1</td>
                                <td>2019-09-26 14:54:18</td>
                                <td>+10.00个</td>
                                <td>登录送悠币</td>
                                <td></td>
                                <td>140.00</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>2019-09-25 12:15:57</td>
                                <td>+10.00个</td>
                                <td>登录送悠币</td>
                                <td></td>
                                <td>130.00</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>2019-09-24 11:57:20</td>
                                <td>+10.00个</td>
                                <td>登录送悠币</td>
                                <td></td>
                                <td>120.00</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>2019-09-23 18:29:03</td>
                                <td>+10.00个</td>
                                <td>登录送悠币</td>
                                <td></td>
                                <td>110.00</td>
                            </tr>
                        </tbody> 
                    </table> 
                    <div class="c-currencyPage">
                        <span class="c-switchPage">上一页</span>
                        <a class="c-pageNow">1</a>
                        <span class="c-switchPage">下一页</span>
                        <span class="c-allPage">共 1页</span>
                        <span class="c-pageTarget">到第<input type="text" value=1 class="c-pageIpt">页</span> 
                        <button class="c-pageOk">确定</button> 
                    </div>
                </div>
                <div  class="c-minetab">
                    <table cellspacing=0> 
                        <tr class="c-tabHead">
                            <td width="10%">序号</td>
                            <td width="25%">日期</td>
                            <td width="15%">收支</td>
                            <td width="15%">来源</td>
                            <td width="20%">详情</td>
                            <td width="15%">账户悠币余额</td> 
                        </tr>  
                        <tr class="c-tabth1">
                            <td>记录为空</td>
                        </tr>
                    </table> 
                </div> 
            </div>
        `) 
        $(".c-minetab").eq(1).css("display","none")
        $(".c-orderSelect1").change(function(){
            console.log($(this).val())
            if($(this).val()=="全部"){
                $(".c-minetab").eq(1).css("display","none")
            }
            if($(this).val()=="支出悠币") {
                $(".c-minetab").eq(1).css("display","block")
                $(".c-minetab").eq(0).css("display","none") 
            }
            if($(this).val()=="获取悠币") {
                $(".c-minetab").eq(0).css("display","block") 
                $(".c-minetab").eq(1).css("display","none") 
            }
        })
    })
    // 我的礼品兑换券
    $(".c-message").eq(3).click(function(){
        $(".c-right").empty()
        $(".c-message").siblings().removeClass("c-color")
        $(".c-message").eq(3).addClass("c-color")
        $(".c-top a").siblings().removeClass("c-mine")
        $(".c-top i").eq(1).removeClass("c-next")
        $(".c-top a").eq(2).html("我的礼品兑换券").addClass("c-mine")
        $(".c-right").append(`
            <div class="c-gift">
                <h2>提货券操作公告</h2>
                <p>尊敬的易果用户们：</p>
                <br>
                <p>受春节快递停送影响，部分提货券节前配送日期截止至1月30日，节后2月11日起恢复配送，烦请您提前做好年货准备。</p>
                <br>
                <p>值此新春佳节之际，易果生鲜全体员工，祝您新春愉快、阖家欢乐，诸事顺利。</p>
                <br>
                <p>如需了解提货券详情烦请致电：021-22303535</p>
                <br>
                <p>请扫以下二维码进行提货券兑换</p>
                <br>
                <img src="https://img05.yiguoimg.com/d/web/180907/00283/114823/voucheraddress.png" alt="">
            </div>
        `)
    })
    // 购买过的商品
    $(".c-message").eq(4).click(function(){
        $(".c-right").empty()
        $(".c-message").siblings().removeClass("c-color")
        $(".c-message").eq(4).addClass("c-color")
        $(".c-top a").siblings().removeClass("c-mine")
        $(".c-top i").eq(1).removeClass("c-next")
        $(".c-top a").eq(2).html("购买过的商品").addClass("c-mine")
        $(".c-right").append(`
            <div class="c-purchased">
                <div class="c-order-title">
                    购买过的商品
                </div>
                <div class="c-purchasedCar"> 
                    <label for="all">
                        <input type="checkbox" id="all">
                        全选
                    <label>
                    <a class="c-trolley">
                        <i></i>
                        加入购物车
                    </a>
                </div>
                <table cellspacing=0>
                    <tr>
                        <td width="38px"></td> 
                        <td class="c-productName">商品名称</td>
                        <td width="140px">商品价格</td>
                        <td width="100px">操作</td>
                    </tr>
                </table>
                <div class="c-trolleyContent">记录为空</div>
            </div>
        `)
        $(".c-trolley").click(function(){
            $(".c-myFruit").append(` 
                <div class="c-dailogcolor"></div>
                    <div class="c-dailog">
                        <div class="c-dailogtit">
                            <i></i>
                            提示
                        </div>
                        <div class="c-dailogcon"> 
                            <p>未选中商品</p>
                            <button>确定</button>
                        </div>
                    </div> 
            `)
            $(".c-dailogcon button").click(function(){
                $(".c-dailog").css("display","none");
                $(".c-dailogcolor").removeClass("c-dailogcolor")
            })
        })
    })
    // 我的收藏
    $(".c-message").eq(5).click(function(){
        $(".c-right").empty()
        $(".c-message").siblings().removeClass("c-color")
        $(".c-message").eq(5).addClass("c-color")
        $(".c-top a").siblings().removeClass("c-mine")
        $(".c-top i").eq(1).removeClass("c-next")
        $(".c-top a").eq(2).html("我的收藏").addClass("c-mine")
        $(".c-right").append(`
            <div class="c-purchased">
                <div class="c-order-title">
                    我的收藏
                </div>
                <div class="c-purchasedCar"> 
                    <label for="all">
                        <input type="checkbox" id="all">
                        全选
                    <label>
                    <a class="c-trolley">取消收藏</a>
                    <a class="c-trolley">
                        <i></i>
                        加入购物车
                    </a>
                </div>
                <table cellspacing=0>
                    <tr>
                        <td width="38px"></td> 
                        <td class="c-productName">商品名称</td>
                        <td width="140px">商品价格</td>
                        <td width="100px">操作</td>
                    </tr>
                </table>
                <div class="c-trolleyContent">记录为空</div>
            </div>
        `)
        $(".c-trolley").click(function(){ 
            $(".c-myFruit").append(` 
                <div class="c-dailogcolor"></div>
                <div class="c-dailog">
                    <div class="c-dailogtit">
                        <i></i>
                        提示
                    </div>
                    <div class="c-dailogcon"> 
                        <p>未选中商品</p>
                        <button>确定</button>
                    </div>
                </div> 
            `)
            $(".c-dailogcon button").click(function(){
                $(".c-dailog").css("display","none");
                $(".c-dailogcolor").removeClass("c-dailogcolor")
            })
        }) 
    })
    // 评论商品
    $(".c-message").eq(6).click(function(){
        $(".c-right").empty()
        $(".c-message").siblings().removeClass("c-color")
        $(".c-message").eq(6).addClass("c-color")
        $(".c-top a").siblings().removeClass("c-mine")
        $(".c-top i").eq(1).removeClass("c-next")
        $(".c-top a").eq(2).html("评论商品").addClass("c-mine")
        $(".c-right").append(`
            <div class="c-comment">
                <div class="c-order-title">
                    评论商品
                </div>
                <div class="c-commentContent">
                    客户自完成订单后10天内，均可对订单商品进行评论，有效评论可获5枚悠币奖励；超过评论有效期未评论，商品评论自动默认好评，不再奖励悠币。
                    <a href="../myy/BusinessQualification.html">查看悠币说明</a>
                </div>
                <div class="c-goods">
                    <span class="c-commenton1">
                        待评论商品
                    </span>
                    <span>
                        已评论商品
                    </span>
                </div>
                <div class="c-commentonContent">
                    <p>您还没有待评价商品</p>
                    <p>您还没有评价过商品</p>
                </div>
            </div>
        `)
        $(".c-commentonContent p").eq(1).css("display","none")
        $(".c-goods span").click(function(){
            $(this).addClass("c-commenton1").siblings().removeClass("c-commenton1"); 
            $(".c-commentonContent p").eq($(this).index()).css("display","block").siblings().css("display","none")
        })
    })
    // 卡包余额
    $(".c-message").eq(7).click(function(){
        $(".c-right").empty()
        $(".c-message").siblings().removeClass("c-color") 
        $(".c-top a").siblings().removeClass("c-mine")
        $(".c-top i").eq(1).removeClass("c-next")
        $(".c-top a").eq(2).html("账户余额").addClass("c-mine")
        $(".c-right").append(`
            <div class="c-account">
                <p>为提供更好的服务及更安全的使用环境，我们已将易果账户全面升级，原账户余额将全数转为等额礼品卡。</p>
                <br>
                <p>
                    您可继续在
                    <a href="../fm/index.html">www.yiguo.com</a>
                    使用礼品卡支付功能或请前往易果手机客户端体验。
                </p>
                <br>
                <p>温馨提示：如需查询预存款余额（已升级为卡包余额），您可点击“我的易果”查看“卡包余额”了解余额使用情况。</p> 
            </div>
            <br>
            <div class="c-code">
                <img src="http://static01.yiguo.com/utaste/images/header/qrcode_app.jpg" alt="">
                <br>
                <p>扫码下载移动APP</p>
                <br>
                <img src="http://static01.yiguo.com/utaste/images/header/qrcode_wechat.jpg" alt="">
                <br>
                <p>微信扫一扫</p>
            </div>
        `)
    })
    // 个人资料
    $(".c-message").eq(8).click(function(){
        $(".c-right").empty()
        $(".c-message").siblings().removeClass("c-color")
        $(".c-message").eq(8).addClass("c-color")
        $(".c-top a").siblings().removeClass("c-mine")
        $(".c-top i").eq(1).removeClass("c-next")
        $(".c-top a").eq(2).html("个人资料").addClass("c-mine")
        $(".c-right").append(`
            <div class="c-data">
                <div class="c-order-title">
                    个人资料
                </div> 
                <p class="c-dataBasic">基本信息</p> 
                <div class="c-dataPhoto">
                    <div class="c-datalabel">头像</div>
                    <img class="c-dataright1" src="http://static01.yiguo.com/utaste/images/Avatar.jpg">
                </div> 
                <div class="c-dataPhoto">
                    <div class="c-datalabel">真实姓名</div>
                    <div class="c-dataright">
                        <input type="text" placeholder="请输入您的真实姓名" class="c-dataipt">
                        <span class="c-namelength">
                            <i></i>
                            <span>长度不能超过10个汉字<span>
                        </span>
                    </div>  
                </div> 
                <div class="c-dataPhoto">
                    <div class="c-datalabel">用户名</div>
                    <div class="c-dataright">${phone}</div>
                </div>
                <div class="c-dataPhoto">
                    <div class="c-datalabel">手机</div>
                    <div class="c-dataright">
                        <span>${phone.slice(0,3)}****${phone.slice(7,11)}</span>
                        <span class="c-fruitAPP">（修改绑定手机请在易果APP上操作）</span>
                        <div>
                            <img src="http://static01.yiguo.com/www/images/header/qrcode_app.jpg" alt="" class="c-fruitimg">
                        </div>
                    </div>
                </div>
                <div class="c-dataPhoto">
                    <div class="c-datalabel">邮箱</div>
                    <div class="c-dataright2">
                        <span class="c-noemail">未验证</span>
                        <a class="c-dataemail">邮箱验证</a>
                    </div>
                </div>
                <p class="c-dataBasic">选项信息</p> 
                <div class="c-dataPhoto">
                    <div class="c-datalabel">性别</div>
                    <div class="c-dataright">
                        <input type="radio" name="sex" id="man" checked>
                        <label for="man">男</label>
                        <input type="radio" name="sex" id="girl">
                        <label for="girl">女</label>
                    </div>
                </div>
                <div class="c-dataPhoto">
                    <div class="c-datalabel">生日</div>
                    <div class="c-dataright">
                        <select name="" id="" class="c-year">
                            <option value="">请选择</option> 
                        </select>
                        年
                        <select name="" id=""  class="c-mouth">
                            <option value="">请选择</option>
                            <option value="1" selected>1</option> 
                        </select>
                        月
                        <select name="" id="" class="c-day"> 
                            <option value="">请选择</option>
                        </select>
                        日
                    </div> 
                </div>
                <div class="c-dataright">
                    <button>确&nbsp;&nbsp;&nbsp;认</button>
                </div>
            </div>
        `)
        for(var i=1900; i<2020; i++) {
            $(".c-dataright .c-year").append(`
                <option value="${i}">${i}</option> 
            `)
        }
        for(var i=2; i<13; i++) {
            $(".c-dataright .c-mouth").append(`
                <option value="${i}">${i}</option> 
            `)
        }
        $(".c-year").change(function() {
            $(".c-day").empty()
            $(".c-day").append(` 
                <option value="">请选择</option> 
            `)
            for(var i=1; i<32; i++) {
                $(".c-day").append(`
                    <option value="${i}">${i}</option> `)
            } 
        })
        $(".c-mouth").change(function(){ 
            if($(".c-year").val()%4==0 && $(this).val()==2) { 
                $(".c-day").empty()
                $(".c-day").append(` 
                    <option value="">请选择</option> 
                `)
                for(var i=1; i<30; i++) {
                    $(".c-day").append(`
                        <option value="${i}">${i}</option> `)
                } 
            } else if($(this).val()==2) {
                $(".c-day").empty()
                $(".c-day").append(` 
                    <option value="">请选择</option> 
                `)
                for(var i=1; i<29; i++) {
                    $(".c-day").append(`
                        <option value="${i}">${i}</option> `)
                } 
            } else if($(this).val()==1||$(this).val()==3||$(this).val()==5||$(this).val()==7||$(this).val()==8||$(this).val()==10||$(this).val()==12) {
                $(".c-day").empty()
                $(".c-day").append(` 
                    <option value="">请选择</option> 
                `)
                for(var i=1; i<30; i++) {
                    $(".c-day").append(`
                        <option value="${i}">${i}</option> `)
                } 
            } else {
                $(".c-day").empty()
                $(".c-day").append(` 
                    <option value="">请选择</option> 
                `)
                for(var i=1; i<31; i++) {
                    $(".c-day").append(`
                        <option value="${i}">${i}</option> `)
                } 
            }  
        })
        $(".c-dataipt").blur(function() { 
            if($(".c-dataipt").val().length>10) {
                $(".c-namelength span").html("最大长度不能超过10")
            }else if($(".c-dataipt").val()=="") {
                $(".c-namelength span").html("必填")
            }else {
                $(".c-namelength").empty()
            }
        })
        $(".c-dataright button").click(function(){
                if($(".c-dataipt").val()==""){
                $(".c-namelength span").html("必填")
            }
        }) 
        $(".c-noemail").click(function(){ 
            $(".c-noemail").css("display","none")
            $(".c-dataright2").prepend(`
                <input type="text" name="" id="">
            `) 
            $(".c-dataright2 input").blur(function(){ 
                $(".c-dataright2 .c-namelength").empty()
                if($(".c-dataright2 input").val()=="") {
                    $(".c-dataright2").append(
                        `<span class="c-namelength">
                            <i></i>
                            <span>必填<span>
                        </span>`
                    )
                }else {
                    var str3 = $(".c-noemail input").val();
                    var patt3 = /^\w{1,}@[0-9 a-z A-Z]{2,}.[a-z A-Z]{2,4}$/; 
                    console.log( patt3.test(str3) )
                    if(patt3.test(str3)==false) {
                        $(".c-dataright2").append(
                            `<span class="c-namelength">
                                <i></i>
                                <span>请输入正确格式的邮箱<span>
                            </span>`
                        ) 
                    }
                }
                
            })   
            $(".c-dataemail").click(function(){
                $(".c-dataright2 .c-namelength").empty()
                if($(".c-dataright2 input").val()=="") {
                    $(".c-dataright2").append(
                        `<span class="c-namelength">
                            <i></i>
                            <span>必填<span>
                        </span>`
                    )
                }else {
                    $(".c-myFruit").append(` 
                        <div class="c-dailogcolor"></div>
                        <div class="c-dailog">
                            <div class="c-dailogtit">
                                <i></i>
                                提示
                            </div>
                            <div class="c-dailogcon"> 
                                <p>邮箱格式不正确！</p>
                                <button>确定</button>
                            </div>
                        </div> 
                    `)
                    $(".c-dailogcon button").click(function(){
                        $(".c-dailog").css("display","none");
                        $(".c-dailogcolor").removeClass("c-dailogcolor")
                    }) 
                }  
            })  
        })
    })
    // 账号安全
    $(".c-message").eq(9).click(function(){
        $(".c-right").empty()
        $(".c-message").siblings().removeClass("c-color")
        $(".c-message").eq(9).addClass("c-color")
        $(".c-top a").siblings().removeClass("c-mine")
        $(".c-top i").eq(1).removeClass("c-next")
        $(".c-top a").eq(2).html("账号安全").addClass("c-mine")
        $(".c-right").append(`
            <div class="c-ID">
                <div class="c-order-title">
                    账号安全
                </div>  
                <div class="c-IDtitle"> 
                    <img src="img/c-3.jpg" alt="">  
                    <div class="c-IDphoto"></div> 
                    <span class=c-IDusername>${phone}</span>
                    <a href="" class="c-IDedit">
                        <i></i>
                        修改
                    </a>
                </div>
                <div class="c-idlist">
                    <div class="c-field">
                        <i class="c-fieldpass"></i>
                        密码修改
                    </div> 
                    <div class="c-supply">
                        <span class="c-red">经常的更换您的账号密码，并且不要和其他账号共用同一个密码</span>
                    </div>
                    <div class="c-operate">
                        <a class="c-operatealter">修改密码</a>
                    </div> 
                </div>
                <div class="c-idlist">
                    <div class="c-field">
                        <i class="c-fieldemail"></i>
                        支付密码
                    </div> 
                    <div class="c-supply">
                        <span>使用礼品卡进行支付时要求输入支付密码，建议不要设置成为登录密码或与其他应用共用的密码。</span>
                    </div>
                    <div class="c-operate">
                        <a class="c-operateset">设置密码</a>
                    </div> 
                </div>
                <div class="c-idlist">
                    <div class="c-field">
                        <i class="c-fieldemail"></i>
                        邮箱验证
                    </div> 
                    <div class="c-supply">
                        <span>邮箱将是您的有效身份证，在保证安全的同时还可以提供密码找回，消息推送服务</span>
                    </div>
                    <div class="c-operate">
                        <a  class="c-white">修改邮箱</a>
                    </div> 
                </div>
                <div class="c-idlist">
                    <div class="c-field">
                        <i class="c-fieldpass"></i>
                        手机验证
                    </div> 
                    <div class="c-supply">
                        <span>
                            验证手机后您可以收到易果推送的短信及密码找回服务
                            <br>
                            您验证的手机：
                            <span class="c-supplytel">${phone.slice(0,3)}****${phone.slice(7,11)}</span>
                        </span>
                    </div>
                    <div class="c-operate">
                        <a  class="c-white">修改手机</a>
                    </div> 
                </div>
            </div> 
        `)
        // 修改密码
        $(".c-operatealter").click(function(){
            $(".c-right").empty()
            $(".c-top a").eq(2).html("")
            $(".c-right").append(`
                <div class="c-alter">
                    <div class="c-altertit">修改密码</div>
                    <div class="c-alterlist">
                        <div class="c-altersafe">
                            <div class="c-altersafel">旧密码</div>
                            <div class="c-altersafer">
                                <input class="c-alteript" type="password" name="" id="c-alteript" placeholder="6-20位字母、符号或数字">
                                <span class="c-alterkey"></span> 
                            </div>
                        </div>
                        <div class="c-altersafe">
                            <div class="c-altersafel">新密码</div>
                            <div class="c-altersafer">
                                <input class="c-alteript" type="password" name="" id="c-alteript" placeholder="6-20位字母、符号或数字">
                                <span class="c-alterkey"></span> 
                            </div>
                        </div>
                        <div class="c-altersafe">
                            <div class="c-altersafel">确认密码</div>
                            <div class="c-altersafer">
                                <input class="c-alteript" type="password" name="" id="c-alteript" placeholder="再次输入密码">
                                <span class="c-alterkey"></span> 
                            </div>
                        </div>
                        <div class="c-altersafe"> 
                            <div class="c-altersafer">
                                <button>确认</button>
                            </div>
                        </div> 
                    </div> 
                </div> 
            `)  
            $(".c-alteript").eq(0).blur(function(){  
                if($(this).val()=="") {
                    $(".c-alterkey").eq(0).html("必填")
                }else {
                    $(".c-alterkey").eq(0).html("")
                }
            })
            $(".c-alteript").eq(1).blur(function(){  
                if($(this).val()=="") {
                    $(".c-alterkey").eq(1).html("必填")
                }else {
                    $(".c-alterkey").eq(1).html("")
                }
            })
            $(".c-alteript").eq(2).blur(function(){  
                if($(this).val()=="") {
                    $(".c-alterkey").eq(2).html("必填")
                }else {
                    $(".c-alterkey").eq(2).html("")
                }
            })
            $(".c-altersafer button").click(function() {
                if($(".c-alteript").eq(1).val()!=$(".c-alteript").eq(2).val()) {
                    $(".c-alterkey").eq(2).html("两次输入密码不一致")
                }
            })
        })
        // 设置支付密码
        $(".c-operateset").click(function() { 
            $(".c-right").empty()
            $(".c-top a").eq(2).html("")
            $(".c-right").append(`
                <div class="c-alter">
                    <div class="c-altertit">设置支付密码</div>
                    <div class="c-alterlist">
                        <p class="c-altertimer">
                            验证码已发送到您尾号 ${phone.slice(7,11)} 的手机，
                            <a class="c-time">请等待...(60)秒</a>
                            或
                            <a class="c-changephone">更换手机</a> 
                        </p>
                        <div class="c-altersafe">
                            <div class="c-altersafel">短信验证码</div>
                            <div class="c-altersafer">
                                <input class="c-alteript" type="text" name="" id="c-alteript1" placeholder="短信验证码">
                            </div>
                        </div>
                        <div class="c-altersafe">
                            <div class="c-altersafel">6位支付密码</div>
                            <div class="c-altersafer">
                                <input class="c-alteript" type="password" name="" id="c-alteript" placeholder="6位数字密码" >
                            </div>
                        </div>
                        <div class="c-altersafe">
                            <div class="c-altersafel">确认密码</div>
                            <div class="c-altersafer">
                                <input class="c-alteript" type="password" name="" id="c-alteript" placeholder="再次输入密码" maxlength=6>
                            </div>
                        </div>
                        <div class="c-altersafe"> 
                            <div class="c-altersafer">
                                <button>确认</button>
                            </div>
                        </div> 
                    </div> 
                </div> 
            `)  
            var i = 60;
            var timer = setInterval(function() {
                i--;
                $(".c-time").empty();
                $(".c-time").html("请等待...("+i+")秒")
                if(i==0) {
                    clearInterval(timer)
                    $(".c-time").html("重新发送")
                }
            },1000) 
        })
        // 修改手机
        $(".c-white").click(function() {
            $(".c-right").empty() 
            $(".c-message").siblings().removeClass("c-color")
            $(".c-message").eq(8).addClass("c-color")
            $(".c-top a").siblings().removeClass("c-mine")
            $(".c-top i").eq(1).removeClass("c-next")
            $(".c-top a").eq(2).html("个人资料").addClass("c-mine")
            $(".c-right").append(`
                <div class="c-data">
                    <div class="c-order-title">
                        个人资料
                    </div> 
                    <p class="c-dataBasic">基本信息</p> 
                    <div class="c-dataPhoto">
                        <div class="c-datalabel">头像</div>
                        <img class="c-dataright1" src="http://static01.yiguo.com/utaste/images/Avatar.jpg">
                    </div> 
                    <div class="c-dataPhoto">
                        <div class="c-datalabel">真实姓名</div>
                        <div class="c-dataright">
                            <input type="text" placeholder="请输入您的真实姓名" class="c-dataipt">
                            <span class="c-namelength">
                                <i></i>
                                <span>长度不能超过10个汉字<span>
                            </span>
                        </div>  
                    </div> 
                    <div class="c-dataPhoto">
                        <div class="c-datalabel">用户名</div>
                        <div class="c-dataright">${phone}</div>
                    </div>
                    <div class="c-dataPhoto">
                        <div class="c-datalabel">手机</div>
                        <div class="c-dataright">
                            <span>${phone.slice(0,3)}****${phone.slice(7,11)}</span>
                            <span class="c-fruitAPP">（修改绑定手机请在易果APP上操作）</span>
                            <div>
                                <img src="http://static01.yiguo.com/www/images/header/qrcode_app.jpg" alt="" class="c-fruitimg">
                            </div>
                        </div>
                    </div>
                    <div class="c-dataPhoto">
                        <div class="c-datalabel">邮箱</div>
                        <div class="c-dataright2">
                            <span class="c-noemail">未验证</span>
                            <a class="c-dataemail">邮箱验证</a>
                        </div>
                    </div>
                    <p class="c-dataBasic">选项信息</p> 
                    <div class="c-dataPhoto">
                        <div class="c-datalabel">性别</div>
                        <div class="c-dataright">
                            <input type="radio" name="sex" id="man" checked>
                            <label for="man">男</label>
                            <input type="radio" name="sex" id="girl">
                            <label for="girl">女</label>
                        </div>
                    </div>
                    <div class="c-dataPhoto">
                        <div class="c-datalabel">生日</div>
                        <div class="c-dataright">
                            <select name="" id="" class="c-year">
                                <option value="">请选择</option> 
                            </select>
                            年
                            <select name="" id=""  class="c-mouth">
                                <option value="">请选择</option>
                                <option value="1" selected>1</option> 
                            </select>
                            月
                            <select name="" id="" class="c-day"> 
                                <option value="">请选择</option>
                            </select>
                            日
                        </div> 
                    </div>
                    <div class="c-dataright">
                        <button>确&nbsp;&nbsp;&nbsp;认</button>
                    </div>
                </div>
            `)
            for(var i=1900; i<2020; i++) {
                $(".c-dataright .c-year").append(`
                    <option value="${i}">${i}</option> 
                `)
            }
            for(var i=2; i<13; i++) {
                $(".c-dataright .c-mouth").append(`
                    <option value="${i}">${i}</option> 
                `)
            }
            $(".c-year").change(function() {
                $(".c-day").empty()
                $(".c-day").append(` 
                    <option value="">请选择</option> 
                `)
                for(var i=1; i<32; i++) {
                    $(".c-day").append(`
                        <option value="${i}">${i}</option> `)
                } 
            })
            $(".c-mouth").change(function(){ 
                if($(".c-year").val()%4==0 && $(this).val()==2) { 
                    $(".c-day").empty()
                    $(".c-day").append(` 
                        <option value="">请选择</option> 
                    `)
                    for(var i=1; i<30; i++) {
                        $(".c-day").append(`
                            <option value="${i}">${i}</option> `)
                    } 
                } else if($(this).val()==2) {
                    $(".c-day").empty()
                    $(".c-day").append(` 
                        <option value="">请选择</option> 
                    `)
                    for(var i=1; i<29; i++) {
                        $(".c-day").append(`
                            <option value="${i}">${i}</option> `)
                    } 
                } else if($(this).val()==1||$(this).val()==3||$(this).val()==5||$(this).val()==7||$(this).val()==8||$(this).val()==10||$(this).val()==12) {
                    $(".c-day").empty()
                    $(".c-day").append(` 
                        <option value="">请选择</option> 
                    `)
                    for(var i=1; i<30; i++) {
                        $(".c-day").append(`
                            <option value="${i}">${i}</option> `)
                    } 
                } else {
                    $(".c-day").empty()
                    $(".c-day").append(` 
                        <option value="">请选择</option> 
                    `)
                    for(var i=1; i<31; i++) {
                        $(".c-day").append(`
                            <option value="${i}">${i}</option> `)
                    } 
                } 
            })
            $(".c-dataipt").blur(function() { 
                if($(".c-dataipt").val().length>10) {
                    $(".c-namelength span").html("最大长度不能超过10")
                }else if($(".c-dataipt").val()=="") {
                    $(".c-namelength span").html("必填")
                }else {
                    $(".c-namelength").empty()
                }
            })
            $(".c-dataright button").click(function(){
                if($(".c-dataipt").val()==""){
                    $(".c-namelength span").html("必填")
                }
            }) 
            $(".c-noemail").click(function(){ 
                $(".c-noemail").css("display","none")
                $(".c-dataright2").prepend(`
                    <input type="text" name="" id="">
                `) 
                $(".c-dataright2 input").blur(function(){ 
                    $(".c-dataright2 .c-namelength").empty()
                    if($(".c-dataright2 input").val()=="") {
                        $(".c-dataright2").append(
                            `<span class="c-namelength">
                                <i></i>
                                <span>必填<span>
                            </span>`
                        )
                    }else {
                        var str3 = $(".c-noemail input").val();
                        var patt3 = /^\w{1,}@[0-9 a-z A-Z]{2,}.[a-z A-Z]{2,4}$/; 
                        console.log( patt3.test(str3) )
                        if(patt3.test(str3)==false) {
                            $(".c-dataright2").append(
                                `<span class="c-namelength">
                                    <i></i>
                                    <span>请输入正确格式的邮箱<span>
                                </span>`
                            ) 
                        }
                    }
                    
                })   
                $(".c-dataemail").click(function(){
                    $(".c-dataright2 .c-namelength").empty()
                    if($(".c-dataright2 input").val()=="") {
                        $(".c-dataright2").append(
                            `<span class="c-namelength">
                                <i></i>
                                <span>必填<span>
                            </span>`
                        )
                    }else {
                        $(".c-myFruit").append(` 
                            <div class="c-dailogcolor"></div>
                            <div class="c-dailog">
                                <div class="c-dailogtit">
                                    <i></i>
                                    提示
                                </div>
                                <div class="c-dailogcon"> 
                                    <p>邮箱格式不正确！</p>
                                    <button>确定</button>
                                </div>
                            </div> 
                        `)
                        $(".c-dailogcon button").click(function(){
                            $(".c-dailog").css("display","none");
                            $(".c-dailogcolor").removeClass("c-dailogcolor")
                        }) 
                    }  
                })  
            })
        })
    })
    // 收货地址管理
    $(".c-message").eq(10).click(function(){
        $(".c-right").empty()
        $(".c-message").siblings().removeClass("c-color")
        $(".c-message").eq(10).addClass("c-color")
        $(".c-top a").siblings().removeClass("c-mine")
        $(".c-top i").eq(1).removeClass("c-next")
        $(".c-top a").eq(2).html("收货地址管理").addClass("c-mine")
        $(".c-right").append(`
            <div class="c-address">
                <div class="c-order-title">
                    收货地址管理
                </div> 
                <div class="c-addressContent">
                    <button class="c-newaddress">新增收货地址</button>
                    您已创建
                    <span class="c-addressnum">0</span>
                    个收货地址，最多可创建
                    <span class="c-addressnum">20</span>
                    个
                </div>  
            </div>  
        `)  
        // 新增收货地址   
        $(".c-newaddress").click(function() {   
            $("#c-modalname").val(""); 
            $("#c-modalphone").val(""); 
            $("#c-modalprivnce").val("选择省份"); 
            $("#c-modalcity").empty();
            $("#c-modalcity").append(`
                <option value="选择城市">选择城市</option>
            `)
            $("#c-modalarea").empty();
            $("#c-modalarea").append(`
                <option value="选择区域">选择区域</option>
            `)
            $("#c-modalarea").removeClass("c-modalmust1")
            $("#c-modaldetail").val(""); 
            $(".c-modalcontrols input").val(""); 
            $(".c-modalcontrols a").removeClass("c-selected")
            $(".c-modalmust, .c-modalmust4, .c-modalmust3").html("")
            $(".c-myFruit").append(` 
                <div class="c-dailogcolor"></div> 
            `) 
            $(".c-dailog1").show()  
            $(".c-dailog1").animate({top:"50%"})
            $(".c-shuttit").click(function() {
                $(".c-dailog1").css("display","none");
                $(".c-dailogcolor").removeClass("c-dailogcolor")
            }) 
            // 收货人姓名
            $("#c-modalname").blur(function() {
                if( $("#c-modalname").val().length>20) {
                    $("#c-modalname").addClass("c-modalmust4")
                    $(".c-modalmust").eq(0).html("最大长度不能超过20")  
                }else if( $("#c-modalname").val()=="") {
                    $("#c-modalname").addClass("c-modalmust4")
                    $(".c-modalmust").eq(0).html("必填")  
                } else {
                    $(".c-modalmust").eq(0).html("") 
                    $("#c-modalname").removeClass("c-modalmust4")
                } 
            })
            // 手机号码
            $("#c-modalphone").blur(function() {
                var test = $("#c-modalphone").val()
                var patt = /^[1][0-9]{10}$/
                if(!patt.test(test)) {
                    if(test=="") {
                        $("#c-modalphone").addClass("c-modalmust4")
                        $(".c-modalmust").eq(1).html("必填")
                    }else {
                        $("#c-modalphone").addClass("c-modalmust4")
                        $(".c-modalmust").eq(1).html("手机格式错误")
                    } 
                } else {
                    $(".c-modalmust").eq(1).html("") 
                    $("#c-modalphone").removeClass("c-modalmust4")
                }
            })
             // 收货地址
            var provinces = new Array("上海","上海(郊区)","北京","北京(郊区)","天津","浙江","江苏","河北","广东","甘肃","贵州","河南","广西","湖北","海南","湖南","黑龙江","江西","吉林","福建","辽宁","宁夏","内蒙古","青海","四川","陕西","山东","山西","安徽","新疆","西藏","云南","重庆");
            
            var citys = [["黄浦区","南汇区","嘉定区","虹口区","松江区","卢湾区","杨浦区","静安区","徐汇区","青浦区","闸北区","金山区","奉贤区","闵行区","长宁区","宝山区","浦东新区","普陀区"],
            ["崇明县"],
            ["宣武区","海淀区", "石景山区", "门头沟区", "通州区", "西城区", "丰台区", "顺义区", "崇文区", "昌平区", "朝阳区", "东城区", "房山区", "大兴区"],
            ["延庆县"," 怀柔区", "密云区", "平谷区"],
            ["河东区","静海县","北辰区","津南区","河西区","大港区","宁河县","红桥区","西青区","东丽区","武清区","南开区","宝坻区","滨海新区","蓟县","和平区","河北区"],
            ["绍兴市","丽水市","海宁市","嘉兴市","嵊州市","诸暨市","奉化市","金华市","义乌市","台州市","舟山市","上虞市","衢州市","温州市","余姚市","桐乡市","慈溪市","湖州市","杭州市","宁波市"],
            ["盐城市","徐州市","仪征市","常熟市","张家港市","江阴市","南通市","镇江市","泰州市","句容市","常州市","宿迁市","扬州市","连云港市","太仓市","吴江市","淮安市","宜兴市","丹阳市","南京市","苏州市","昆山市","无锡市"],
            ["承德市","保定市","衡水市","秦皇岛市","张家口市","邯郸市","沧州市","燕郊","邢台市","唐山市","廊坊市","石家庄市"],
            ["惠州市","佛山市","梅州市","珠海市","湛江市","中山市","茂名市","广州市","肇州市","潮州市","汕尾市","河源市","清远市","东莞市","阳江市","深圳市","揭阳市","韶关市","云浮市","江门市"],
            ["酒泉市","金昌市","武威市","临夏","陇南市","张掖市","甘南","平凉市","天水市","嘉峪关市","兰州市","白银市","庆阳市","定西市"],
            ["黔东南","黔南布依族苗族自治州","贵阳市","毕节","铜仁","黔南","六盘水市","遵义市","安顺市","黔东南苗族侗族自治州","黔西南","黔西南布依族苗族自治州"],
            ["漯河市","郑州市","商丘市","洛阳市","新乡市","平顶山市","信阳市","许昌市","南阳市","周口市","鹤壁市","驻马店市","三门峡市","开封市","濮阳市","焦作市","安阳市"],
            ["防城港市","桂林市","柳州市","玉林市","贵港市","北海市","钦州市","百色市","河池市","来宾市","贺州市","梧州市","崇左市","南宁市"],
            ["随州市","松滋市","鄂州市","神农架林区","孝感市","仙桃市","省直辖","潜江市","荆州市","武汉市","天门市","恩施土家族苗族自治州","黄石市","宜昌市","襄阳市","黄冈市","十堰市","荆门市","咸宁市"],
            ["省直辖","三亚市","海口市","琼海市"],
            ["永州市","岳阳市","湘西土家族苗族自治州","衡阳市","湘潭市","怀化市","张家界市","长沙市","常德市","株洲市","娄底市","郴州市","益阳市"],
            ["大庆市","绥化市","牡丹江市","双鸭山市","黑海市","齐齐哈尔市","大兴安岭","伊春市","七台河市","哈尔滨市","鸡西市","佳木斯市","鹤岗市"],
            ["九江市","新余市","上饶市","南昌市","鹰潭市","赣州市","抚州市","吉安市","景德镇市","宜春市","萍乡市"],
            ["白城市","通化市","吉林市","辽源市","松原市","延边朝族自治州","白山市","四平市","长春市"],
            ["三明市","漳州市","泉州市","南平市","厦门市","宁德市","福州市","莆田市","龙岩市"],
            ["沈阳市","阜新市","盘锦市","朝阳市","铁岭市","辽阳市","本溪市","葫芦岛市","鞍山市","营口市","抚顺市","丹东市","锦州市","大连市"],
            ["石嘴山市","中卫市","银川市","吴忠市","固原市"],
            ["乌兰察布","兴安","呼和浩特市","阿拉善","乌海市","赤峰市","通辽市","呼伦贝尔","巴彦淖尔","锡林郭勒","包头市","鄂尔多斯"],
            ["海南","海北","西宁市","海东","海西","黄南","玉树","果洛"],
            ["眉山市","内江市","凉山彝族自治州","达州市","资阳市","宜宾市","南充市","广安市","绵阳市","广元市","泸州市","攀枝花市","阿坝藏族羌族自治州","甘孜藏族自治州","成都市","乐山市","遂宁市","德阳市","雅安市","自贡市","巴中市",],
            ["安康市","榆林市","铜川市","汉中市","杨凌市","延安市","咸阳市","宝鸡市","商洛市","渭南市","西安市"],
            ["威海市","德州市","济宁市","淄博市","济南市","莱芜市","菏泽市","滨州市","日照市","青岛市","枣庄市","东营市","烟台市","聊城市","潍坊市","泰安市","临沂市"],
            ["临汾市","朔州市","太原市","晋城市","长治市","晋中市","大同市","吕梁市","阳泉市","运城市","忻州市"],
            ["宿州市","滁州市","合肥市","芜湖市","黄山市","阜阳市","安庆市","巢湖市","亳州市","蚌埠市","马鞍山市","淮南市","淮北市","六安市","铜陵市","池州市","宣城市"],
            ["喀什地区","阿克苏地区","直辖行政单位","阿拉尔市","省直辖","哈密地区","克孜勒苏柯尔克孜自治州","吐鲁番地区","昌吉回族自治州","五家渠市","石河子市","克拉玛依市","乌鲁木齐市","阿勒泰地区","图木舒克市","巴音郭楞蒙古自治州","伊犁哈萨克自治州","塔城地区","和田地区"],
            ["拉萨市","山南地区","昌都地区","阿里地区","那曲地区","日喀则地区","林芝地区"],
            ["楚雄彝族自治州","西双版纳傣族自治州","玉溪市","思茅市","普洱市","临沧市","保山市","德宏傣族景颇族自治州","大理白族自治州","红河哈尼族彝族自治州","昆明市","曲靖市","迪庆藏族自治州","昭通市","丽江市","怒江傈僳族自治州","文山壮族苗族自治州"],
            ["永川区","江津区","大渡口区","南川区","武隆区","纂江区","双桥区","渝北区","南岸区","城口县","大足区","丰都县","巫山区","巫溪县","铜梁区","万盛区","奉节县","垫江县","万州区","北碚区","梁平县","石柱","云阳县","渝中区","合川区","忠县","沙坪坝区","荣昌区","江北区","酉阳","九龙坡区","秀山","开县","璧山区","长寿区","黔江区","彭水","巴南区","潼南区","涪陵区"]]
            
            var areas = [[["黄浦区"],["南汇区"],["嘉定区"],["虹口区"],["松江区"],["卢湾区"],["杨浦区"],["静安区"],["徐汇区"],["青浦区"],["闸北区"],["金山区"],["奉贤区"],["闵行区"],["长宁区"],["宝山区"],["浦东新区"],["普陀区"]],
            [["崇明县"]],
            [["宣武区"],["海淀区"], ["石景山区"],[ "门头沟区"], ["通州区"], ["西城区"], ["丰台区"], ["顺义区"], ["崇文区"],[ "昌平区"], ["朝阳区"], ["东城区"], ["房山区"], ["大兴区"]],
            [["延庆县"],[" 怀柔区"], ["密云区"], ["平谷区"]],
            [["河东区"],["静海县"],["北辰区"],["津南区"],["河西区"],["大港区"],["宁河县"],["红桥区"],["西青区"],["东丽区"],["武清区"],["南开区"],["宝坻区"],["滨海新区"],["蓟县"],["和平区"],["河北区"]],
            [["嵊州市","新昌县","上虞区","上虞市","越城区","柯桥区","诸暨市","绍兴县"],["遂昌县","青田县","云和县","松阳县","龙泉市","景宁县","莲都区","景宁畲族自治县","庆元县","缙云县"],["海宁市"],["南湖区","嘉善县","平湖市","海宁市","嘉善市","秀城区","桐乡市","海盐县","秀洲市"],["嵊州市"],["诸暨市"],["奉化市"],["金东区","浦江县","武义县","义乌市","婺城区","东阳市","永康市","兰溪市","磐安县"],["义乌市"],["路桥区","仙居县","玉环县","椒江区","天台县","黄岩区","温岭市","三门县","临海市"],["岱山县","普陀区","嵊泗县","定海区"],["上虞市"],["开化县","龙游县","柯城区","江山市","常山县","衢江区"],["永嘉县","瑞安市","瓯海区","乐清市","龙湾区","鹿城区","洞头县","苍南县","平阳县","洞头县","泰顺县"],["余姚市"],["桐乡市"],["慈溪市"],["长兴县","德清县","吴兴区","南浔区","安吉县"],["临安市","桐庐县","建德市","富阳区","富阳市","淳安县","高新区","西湖区","滨江区","余杭区","上城区","江干区","萧山区","下城区","拱墅区"],["余姚市","高新区","慈溪市","象山县","奉化区","北仑区","宁海县","奉化市","杭州湾新区","江东区","鄞州区","海曙区","江北区","镇海区"]],
            [["阜宁县","大丰市","建湖县","射阳县","亭湖区","响水县","滨海县","大丰区","盐都区","东台市"],["睢宁县","高新区","铜山县","云龙区","鼓楼区","泉山区","邳州区","沛县","贾汪区","铜山区","丰县","新沂市","九里区","软件园"],["仪征市"],["常熟市"],["张家港市"],["江阴市"],["海门市","通州市","海安县","如东县","通州市","崇川区","启东市","经济技术开发区","港闸区","如皋市"],["扬中市","润州区","丹徒区","句容市","镇江新区","京口区","丹阳市","丹徒新区"],["高港区","兴化市","靖江市","姜堰区","泰兴市","海陵区"],["句容市"],["溧阳区","新北区","钟楼区","金坛区","武进区","戚墅堰区","金坛市","高新区","天宁区"],["沭阳县","宿城区","泗阳县","高新区","宿豫区","泗洪县"],["广陵区","刊江区","经济开放区","维扬区","江都区","宝应县","仪征市","高邮市"],["东海县","徐圩新区","赣榆区","连云区","连云新城","海州区","新海新区","新浦区","灌南区","赣榆县","灌云县"],["太仓市"],["吴江市"],["洪泽县","淮阴区","涟水县","楚州区","清河区","金湖县","淮安区","清江浦区","盱眙县","洪泽区","青浦区"],["宜兴市"],["丹阳市"],["高新区","高淳区","江北新区","栖霞区","浦口区","雨花台区","六合区","溧水区","江宁区","高淳县","玄武区","下关区","鼓楼区","秦淮区","白下区","建邺区"],["吴江市","张家港市","苏州新区","太仓市","吴江区","平江区","相城区","虎丘区","姑苏区","沧浪区","金阊区","吴中区","工业园区"],["昆山市"],["新吴区","宜兴市","江阴市","梁溪区","滨湖区","崇安区","锡山区","北塘区","惠山区","新区","南长区"]],
            [["宽城满族自治县","围场满族蒙古族自治区","隆化县","承德县","滦平县","兴隆县","平泉县","鹰手营子矿区","丰宁满族自治县","双滦区","双桥区"],["博野县","高开区","安新县","高碑店市","涞源县","徐水县","易县","顺平县","涞水县","满城区","高阳县","雄县","唐县","徐水区","望都县","定州市","满城县","清苑区","高新区","莲池区","北市区","容城县","定兴县","阜平县","竞秀区","南市区","新市区","涿州市","清苑县","曲阳县","蠡县","安国市","雄安新区"],["饶阳县","武强县","阜城县","安平县","故城县","桃城区","冀州区","武邑县","景县","枣强县","深州市"],["卢龙县","青龙满族自治县","抚宁县","抚宁区","海港区","昌黎县","北戴河新区","北戴河区","山海关区"],["宣化县","尚义县","万全区","怀安县","怀来县"],["涉县","曲周县","鸡泽县"],["河间县","青县","海兴县","盐山县"],["燕郊"],["南宫市","沙河市","邢台县","南和县"],["路南县","玉田县"],["固安县","经济开发区"],["无极县","正定县"]],
            [["惠东县","龙门县"],["顺德区","南海区"],["五华县","丰顺区"],["香洲区","斗门区"],["吴川区","雷州区"],["龙湖区","金平区"],["东凤镇","东升镇"],["电白区","化州市"],["天河区","东山区"],["广宁县","四会市"],["湘桥县","潮安县"],["城区","陆河县"],["紫金县","龙川县"],["清城区","清新区"],["常平镇","谢岗镇"],["阳东县","阳春市"],["南山区","罗湖区"],["揭东县","揭西县"],["仁化县","曲江区"]],
            [["玉门市","瓜州县"],["永昌县","金川区"],["凉州区","古浪县"],["康乐县","临夏县"],["康县","文县"],["甘州区","民乐县"],["夏河县","合作市"],["灵台县","华亭县"],["秦安县","秦城区"],["五一区","胜利区"],["城关区","红古区"],["平川区","白银区"],["正宁县","镇原县"],["安定区","陇西区"]],
            [["黄平县"],["独山县","惠水县"],["小河区","花溪区"],["大方县","织金县"],["思南县","万山区"],["麻江县"],["钟山区","盘县"],["余庆县","仁怀市"],["平坝县","平坝区"],["黄平县","雷山县"],["台江县"],["安龙县","兴仁县"]],
            [["源汇区","舞阳县"],["二七区","荥阳市"],["民权县","夏邑县"],["吉利区","西工区"],["卫滨区","辉县市"],["宝丰县","石龙区"],["息县","淮滨县"],["襄城县","许昌县"],["西峡县","桐柏县"],["东新区","西华县"],["鹤山区","山城区"],["西平县","上蔡县"],["卢氏县","灵宝市"],["龙亭区","尉氏县"],["南乐县","华龙区"],["武陟县","济源市"],["林州市","安阳县"]],
            [["港口区"],["临桂区"],["城中区"],["玉东新区"],["桂平市"],["银海区"],["灵山县"],["乐业县"],["凤山县"],["象州县"],["昭平县"],["蝶山区"],["大新县"],["兴宁区"]],
            [["广水市"],["松滋市"],["梁子湖区"],["神农架林区"],["大悟县"],["仙桃市"],["省直辖"],["潜江市"],["洪湖市"],["东西湖区"],["天门市"],["鹤峰县"],["经济开发区"],["点军区"],["谷城县"],["蕲春县"],["竹山县"],["掇刀区"],["崇阳县"]],
            [["省直辖"],["乐东黎族自治县"],["美兰区"],["琼海市"]],
            [["道县"],["平江县"],["永顺县"],["衡阳县"],["邵东县"],["岳塘区"],["会同县"],["桑植县"],["宁乡县"],["汉寿县"],["炎陵县"],["双峰县"],["永兴县"],["安化县"]],
            [["肇州县"],["明水县"],["东安区"],["尖山区"],["北安市"],["拜泉县"],["塔河县"],["友好区"],["桃山区"],["南岗区"],["鸡东县"],["桦川县"],["兴安区"]],
            [["瑞昌市"],["分宜县"],["横峰县"],["红谷滩新区"],["高新区"],["瑞金市"],["南城县"],["新干县"],["浮梁县"],["靖安县"],["芦溪县"]],
            [["镇赉县"],["东昌区"],["丰满区"],["西安区"],["乾安县"],["延吉市"],["浑江区"],["双辽市"],["九台市"]],
            [["沙县"],["龙海市"],["鲤城区"],["顺昌县"],["同安区"],["寿宁县"],["晋安区"],["涵江区"],["武平县"]],
            [["康平县"],["新邱区"],["大洼区"],["朝阳县"],["银州区"],["白塔区"],["南芬区"],["绥中县"],["立山区"],["大石桥市"],["西市区"],["抚顺县"],["东港市"],["太和区"],["金普新区"]],
            [["惠农区"],["海原县"],["永宁县"],["盐池县"],["隆德县"]],
            [["化德县"],["突泉县"],["赛罕区"],["阿拉善右旗"],["元宝山区"],["奈曼旗"],["牙克石市"],["磴口县"],["多伦县"],["九原区"],["鄂托克旗"]],
            [["共和县"],["祁连县"],["城中区"],["乐都区"],["乌兰县"],["尖扎县"],["杂多县"],["久治县"]],
            [["丹棱县"],["市中区"],["会理县"],["达川区"],["安岳县"],["屏山县"],["西充县"],["广安区"],["高新区"],["旺苍县"],["江阳区"],["米易县"],["九寨沟县"],["康定县"],["郫县"],["犍为县"],["经济开发区"],["罗江县"],["名山县"],["沿滩区"],["南江县"]],
            [["旬阳县"],["府谷县"],["印台区"],["宁强县"],["杨凌市"],["志丹县"],["高新区"],["太白县"],["商州区"],["大荔县"],["碑林区"]],
            [["荣成市"],["夏津县"],["汶上县"],["高新区"],["章丘区"],["莱城区"],["鄄城县"],["无棣县"],["五莲县"],["黄岛区"],["高新区"],["广饶县"],["长岛县"],["东昌府区"],["高密市"],["泰山区"],["沂水县"]],
            [["曲沃县"],["右玉县"],["娄烦县"],["高平市"],["长子县"],["榆次区"],["灵丘县"],["石楼县"],["平定县"],["闻喜县"],["忻府区"]],
            [["经济开发区"],["全椒县"],["蜀山区"],["南陵县"],["黄山区"],["颍东区"],["岳西县"],["庐江县"],["利辛县"],["淮上区"],["含山县"],["田家庵区"],["烈山区"],["舒城县"],["义安区"],["石台县"],["旌德县"]],
            [["叶城县"],["阿瓦提县"],["直辖行政单位"],["阿拉尔市"],["省直辖"],["哈密市"],["阿合奇县"],["托克逊县"],["呼图壁县"],["精河县"],["五家渠市"],["石河子市"],["白碱滩区"],["东山区"],["布尔津县"],["图木舒克市"],["和静县"],["伊宁县"],["乌苏市"],["洛浦县"]],
            [["墨竹工卡县"],["琼结县"],["江达县"],["改则县"],["聂荣县"],["萨迦县"],["米林县"]],
            [["姚安县"],["楚雄彝族自治州"],["华宁县"],["翠云区"],["思茅区"],["临翔区"],["昌宁县"],["梁河县"],["永平县"],["红河县"],["呈贡区"],["会泽县"],["德钦县"],["永善县"],["古城区"],["福贡县"],["砚山县"]],
            [["永川区"],["江津区"],["大渡口区"],["南川区"],["武隆区"],["纂江区"],["双桥区"],["渝北区"],["南岸区"],["城口县"],["大足区"],["丰都县"],["巫山区"],["巫溪县"],["铜梁区"],["万盛区"],["奉节县"],["垫江县"],["万州区"],["北碚区"],["梁平县"],["石柱"],["云阳县"],["渝中区"],["合川区"],["忠县"],["沙坪坝区"],["荣昌区"],["江北区"],["酉阳"],["九龙坡区"],["秀山"],["开县"],["璧山区"],["长寿区"],["黔江区"],["彭水"],["巴南区"],["潼南区"],["涪陵区"]]]
            for(var i=0;i<provinces.length;i++){
                $("#c-modalprivnce").append("<option value='"+provinces[i]+"'>"+provinces[i]+"</option>")
            }
            $("#c-modalprivnce").change(function(){
                $("#c-modalcity").html("<option value='选择城市'>选择城市</option>")
                $("#c-modalarea").html("<option value='选择区域'>选择区域</option>") 
                //填充市列表
                for(var i=0;i<citys[$("#c-modalprivnce option:selected").index()-1].length;i++){
                    $("#c-modalcity").append("<option value='"+citys[$("#c-modalprivnce option:selected").index()-1][i]+"'>"+citys[$("#c-modalprivnce option:selected").index()-1][i]+"</option>")
                }   
            })
            $("#c-modalcity").change(function(){
                $("#c-modalarea").html("<option value='选择区域'>选择区域</option>") 
                for(var i=0;i<areas[$("#c-modalprivnce option:selected").index()-1][$("#c-modalcity option:selected").index()-1].length;i++){
                    $("#c-modalarea").append("<option value='"+areas[$("#c-modalprivnce option:selected").index()-1][$("#c-modalcity option:selected").index()-1][i]+"'>"+areas[$("#c-modalprivnce option:selected").index()-1][$("#c-modalcity option:selected").index()-1][i]+"</option>")
                }
            }) 
            $("#c-modalarea").change(function() {
                if($("#c-modalarea").val()=="选择区域") {
                $("#c-modalarea").addClass("c-modalmust4")
                $(".c-modalmust").eq(2).html("必填") 
                } else {
                    $("#c-modalarea").removeClass("c-modalmust4")
                    $(".c-modalmust").eq(2).html("") 
                }
            }) 
            // 详细地址  
            $("#c-modaldetail").blur(function() {
                if($("#c-modaldetail").val()!="") {
                    $(".c-modalmust").eq(3).html("") 
                }
            }) 
            // 邮政编码
            $("#c-modalemail").blur(function() {
                var test = $("#c-modalemail").val()
                var patt = /^[0-9]{0,}$/
                if(!patt.test(test)) {
                    $("#c-modalemail").addClass("c-modalmust4")
                    $(".c-modalmust2").html("格式错误")
                    $(".c-modalmust2").addClass("c-modalmust4")
                }else {
                    $(".c-modalmust2").html("")
                    $("#c-modalemail").removeClass("c-modalmust4")
                }
            }) 
            // 点击保存 
            $(".c-modalcontrols a").click(function() {
                $(".c-modalcontrols a").siblings().removeClass("c-selected")
                $(this).addClass("c-selected")
            })
            $(".c-modalcontrols button ").off('click').on('click',function() { 
                if($(".c-modalcontrols #c-modalname").val()=="") { 
                    $(".c-modalmust").eq(0).html("必填") 
                }
                if($(".c-modalcontrols #c-modalphone").val()=="") { 
                    $(".c-modalmust").eq(1).html("必填") 
                }
                if($(".c-modalcontrols #c-modaldetail").val()=="") { 
                    $(".c-modalmust").eq(3).html("必填") 
                }
                if($("#c-modalarea").val("选择区域")) { 
                    $("#c-modalarea").addClass("c-modalmust1")
                    $(".c-modalmust").eq(2).html("必填")  
                }
                if($(".c-modalcontrols a").hasClass("c-selected")==false) { 
                    $(".c-modalcontrols .c-modalmust3").html("必填") 
                }
                if($(".c-modalmust").html()==""&&$(".c-modalcontrols a").hasClass("c-selected")){
                    $(".c-dailog1").css("display","none");
                    $(".c-dailogcolor").removeClass("c-dailogcolor")  
                    if($(".c-addresslist").length==0) { 
                        $(".c-address").append(` 
                            <div class="c-addresslist"> 
                                <ul>
                                    <li>
                                        <dl>
                                            <dt>
                                                <div class="c-name">
                                                    ${$("#c-modalname").val()}
                                                    <div class="c-del">×</div>
                                                </div>
                                            </dt>
                                            <dd>
                                                <span>收货人:</span>
                                                ${$("#c-modalname").val()}
                                            </dd>
                                            <dd>
                                                <span>所在地区:</span>
                                                ${$("#c-modalprivnce").val() }
                                                ${$("#c-modalcity").val() }
                                                ${$("#c-modalarea").val() }
                                            </dd>
                                            <dd>
                                                <span>地址:</span>
                                                ${$("#c-modaldetail").val()}
                                            </dd>
                                            <dd>
                                                <span>手机:</span>
                                                ${$("#c-modalphone").val().slice(0,3)}
                                                ****
                                                ${$("#c-modalphone").val().slice(7,11)}
                                            </dd>
                                        </dl>
                                        <div class="c-modalbtns">
                                            <a class="c-modaldefault">设为默认地址</a>
                                            <a class="c-modaledit">编辑</a>
                                        </div>   
                                    </li>
                                </ul>
                            </div>
                            <div class="c-currencyPage">
                                <span class="c-switchPage">上一页</span>
                                <a class="c-pageNow">1</a>
                                <span class="c-switchPage">下一页</span>
                                <span class="c-allPage">共 1页</span>
                                <span class="c-pageTarget">到第<input type="text" value=1 class="c-pageIpt">页</span> 
                                <button class="c-pageOk">确定</button> 
                            </div> 
                        `)
                    } else { 
                        $(".c-currencyPage").before(` 
                            <div class="c-addresslist"> 
                                <ul>
                                    <li>
                                        <dl>
                                            <dt>
                                                <div class="c-name">
                                                    ${$("#c-modalname").val()}
                                                    <div class="c-del">×</div>
                                                </div>
                                            </dt>
                                            <dd>
                                                <span>收货人:</span>
                                                ${$("#c-modalname").val()}
                                            </dd>
                                            <dd>
                                                <span>所在地区:</span>
                                                ${$("#c-modalprivnce").val() }
                                                ${$("#c-modalcity").val() }
                                                ${$("#c-modalarea").val() }
                                            </dd>
                                            <dd>
                                                <span>地址:</span>
                                                ${$("#c-modaldetail").val()}
                                            </dd>
                                            <dd>
                                                <span>手机:</span>
                                                ${$("#c-modalphone").val().slice(0,3)}
                                                ****
                                                ${$("#c-modalphone").val().slice(7,11)}
                                            </dd>
                                        </dl>
                                        <div class="c-modalbtns">
                                            <a class="c-modaldefault">设为默认地址</a>
                                            <a class="c-modaledit">编辑</a>
                                        </div>   
                                    </li>
                                </ul>
                            </div>
                        `)
                    }
                    var a = $(".c-addresslist").length 
                    $(".c-addressnum").eq(0).html(a) 
                    $(".c-address").on("click", ".c-name .c-del", function(){
                        $(".c-myFruit").append(` 
                            <div class="c-dailogcolor"></div>
                            <div class="c-dailog">
                                <div class="c-dailogtit">
                                    <i></i>
                                    提示
                                </div>
                                <div class="c-dailogcon"> 
                                    <p>您确定要删除？</p>
                                    <div class="c-btnbox">
                                        <a class="c-boxOK">确定</a>
                                        <a class="c-boxcancel">取消</a>
                                    </div>
                                </div>
                            </div> 
                        `) 
                        var ok=$(this);
                        $(".c-btnbox .c-boxOK").click(function() {
                            ok.parent().parent().parent().parent().parent().remove()
                            $(".c-dailog").css("display","none");
                            $(".c-dailogcolor").removeClass("c-dailogcolor");  
                            var a = $(".c-addresslist").length   
                            var b = $(".c-addressnum").eq(0).html()
                            $(".c-addressnum").eq(0).html(b-1) 
                            if(b==1) {
                                $(".c-addresslist").remove();
                                $(".c-currencyPage").remove();
                                $(".c-addressnum").eq(0).html("0")
                            } 
                        })  
                        $(".c-btnbox .c-boxcancel").click(function() {
                            $(".c-dailog").css("display","none");
                            $(".c-dailogcolor").removeClass("c-dailogcolor")
                        })      
                    })  
                    $(".c-modalbtns .c-modaldefault").click(function() {
                        $(".c-myFruit").append(` 
                            <div class="c-dailogcolor"></div>
                            <div class="c-dailog">
                                <div class="c-dailogtit">
                                    <i></i>
                                    提示
                                </div>
                                <div class="c-dailogcon"> 
                                    <p>确定设为默认地址？</p>
                                    <div class="c-btnbox">
                                        <a class="c-boxOK">确定</a>
                                        <a class="c-boxcancel">取消</a>
                                    </div>
                                </div>
                            </div> 
                        `) 
                        $(".c-btnbox .c-boxOK").click(function() {
                            $(".c-dailog").css("display","none");
                            $(".c-dailogcolor").removeClass("c-dailogcolor")
                            $(".c-name").append(`
                                <span class="c-defaultadd">默认地址</span>
                            `)
                            $(".c-modalbtns .c-modaldefault").html("")
                            $(".c-btnbox .c-boxOK").css("display","none")
                        })
                        $(".c-btnbox .c-boxcancel").click(function() {
                            $(".c-dailog").css("display","none");
                            $(".c-dailogcolor").removeClass("c-dailogcolor")
                        })
                    })
                    $(".c-modalbtns .c-modaledit").click(function() {
                        $(".c-myFruit").append(` 
                            <div class="c-dailogcolor"></div> 
                        `) 
                        $(".c-dailog1").show()  
                        $(".c-dailog1").animate({top:"50%"})
                        $(".c-shuttit").click(function() {
                            $(".c-dailog1").css("display","none");
                            $(".c-dailogcolor").removeClass("c-dailogcolor")
                        }) 
                    })
                }
            })
        })
    })
    // 企业福利入口
    $(".c-message").eq(11).click(function(){
        $(".c-right").empty() 
        $(".c-message").siblings().removeClass("c-color")
        $(".c-top i").eq(1).removeClass("c-next")
        $(".c-top a").siblings().removeClass("c-mine")
        $(".c-top a").eq(2).html("升级为企业账号").addClass("c-mine")
        $(".c-right").append(`
            <div class="c-firm">
                <div class="c-order-title">
                    企业福利专区
                </div> 
                <p class="c-firmtit">开通企业福利，尽享员工关爱。企业编号请咨询部门负责人或企业HR。</p>
                <div class="c-firmgroup">
                    <div class="c-firmlabel">
                        企业编号：
                    </div>
                    <div class="c-firmright">
                        <input type="text" name="" id="" placeholder="必填" class="c-firmtxt">
                    </div>
                </div>
                <div class="c-firmgroup">
                    <div class="c-firmlabel">
                        姓名：
                    </div>
                    <div class="c-firmright">
                        <input type="text" name="" id="" placeholder="必填" class="c-firmtxt">
                    </div>
                </div>
                <div class="c-firmgroup">
                    <div class="c-firmlabel">
                        验证方式：
                    </div>
                    <div class="c-firmright"> 
                        <label for="">
                            <input type="radio" name="mail" id="mail" checked class="c-firmradio">
                            企业邮箱
                        </label>
                        <label for="tel">
                            <input type="radio" name="mail" id="tel" class="c-firmradio">
                            手机号
                        </label>
                    </div>
                </div>
                <div class="c-firmgroup">
                    <div class="c-firmlabel">
                        企业邮箱：
                    </div>
                    <div class="c-firmright">
                        <input type="text" name="" id="" placeholder="必填" class="c-firmtxt">
                    </div>
                </div>
                <div class="c-firmgroup"> 
                    <div class="c-firmright">
                        <input type="checkbox" name="c-read" id="c-read" class="c-firmradio">
                        <label for="c-read">我已阅读并同意</label>
                        <a class="c-firmdeal">《易果企业认证协议》</a>
                    </div>
                </div>
                <div class="c-firmif">
                    <div class="c-firmgroup">
                        如果您所在的企业暂未加入易果企业服务平台，请联系HR加入吧。
                        <br> 
                        <br>
                        致电请拨打：400-623-0621 或发邮件至：services@yiguo.com
                    </div>
                </div>
                <div class="c-firmgroup"> 
                    <div class="c-firmright"> 
                        <button class="c-firmbtn">开通企业福利</button>
                    </div>
                </div>
            </div> 
        `)
        $(".c-firmdeal").click(function(){
            $(".c-myFruit").append(` 
                <div class="c-dailogcolor"></div>
                <div class="c-protocol">
                    <div class="c-protocoltit"> 
                        易果企业认证协议
                    </div>
                    <div class="c-protocolcon"> 
                        <p><strong>1、 员工福利账户是指：</strong></p>
                        <p>员工注册易果账户，用于企业以及企业工会向员工发放福利，该账户经过企业认证后作为员工福利账户。</p>
                        <p class="c-protocoltit2"><strong>2、 公司向员工账户发放的福利为：</strong></p>
                        <p>为员工福利账户预充值一定比例的款项（以下简称“预存款”）、易果提货券、优惠券等，员工使用员工福利账户消费应当合法、合理，并遵循如下规则：</p>
                        <p>① 员工福利账户中的所有福利均仅用于易果网（www.yiguo.com）消费，员工也可自行向员工福利账户进行充值。</p>
                        <p>② 员工福利账户中的所有福利不产生任何孳息，不得提现，不得转让；如遇特殊情况，请与企业HR相关人员联系。</p>
                        <p>③ 员工福利账户中的所有金额（包括但不限于：企业发放福利及员工自行充值款项等）均不得提现。</p>
                        <p>④ 易果提货券须在有效期内使用，逾期作废。如遇缺货，易果网将提供等价值商品供员工选择换货；</p>
                        <p>⑤ 如遇商品质量问题可按照一般用户的售后服务规则享受换货服务。</p>
                        <p>⑥ 如需退货或因其他特殊情况需要退款，该款项将统一退回至员工福利账户中，不退至员工私人银行账户及/或支付宝账户。</p>
                        <div class="c-protocolbtn"> 
                            <button class="c-agr">同意并继续</button>
                        </div>
                    </div>
                </div> 
            `)
            $(".c-agr").click(function(){
                $(".c-protocol").css("display","none");
                $(".c-dailogcolor").removeClass("c-dailogcolor")
                $("#c-read").attr("checked","checked")
            })
        }) 
    })
    // 在线退换货
    $(".c-message").eq(12).click(function(){
        $(".c-right").empty() 
        $(".c-message").siblings().removeClass("c-color")
        $(".c-top i").eq(1).removeClass("c-next")
        $(".c-top a").siblings().removeClass("c-mine")
        $(".c-top a").eq(2).html("在线退换货").addClass("c-mine")
        $(".c-right").append(`
        <div class="c-change">
            <div class="c-change-title">
                <span class="c-on">申请退换货</span>
                <span>退换货记录</span>
            </div> 
            <div class="c-apply">
                <p>您目前没有可申请退换货的订单</p>
            </div>
            <div class="c-content">
                <div class="c-record">
                    <div class="c-record-left">
                        自订单签收时间48小时内，您可以申请在线提交退换货申请（除特殊商品外，详见退换货政策）
                    </div>
                    <div class="c-record-right">
                        <select name="" id="">
                            <option value="">近一个月的记录</option>
                            <option value="">全部记录</option>
                            <option value="">退货记录</option>
                            <option value="">换货记录</option>
                        </select>
                    </div>
                    <table class="c-tab" cellspacing=0>
                        <tr class="c-tab-head">
                            <td>订单号</td>
                            <td>退换货类型</td>
                            <td class="c-tabname">商品名称</td>
                            <td>状态</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <table class="c-tab-list">
                                <tr>
                                    <td>您没有提交过退换货申请</td>  
                                </tr>
                            </table>
                        </tr>
                    </table>
                </div> 
            </div>
        </div>  
        `)  
        $(".c-change-title span").click(function(){ 
            $(".c-change-title span").siblings().removeClass("c-on")
            $(this).addClass("c-on")  
        })
        $(".c-change-title span").eq(0).click(function(){
            $(".c-apply").css("display","block")
            $(".c-record").css("display","none")
        })
        $(".c-change-title span").eq(1).click(function(){
            $(".c-apply").css("display","none")
            $(".c-record").css("display","block")
        })
    })
    // 商品投诉
    $(".c-message").last().click(function(){
        $(".c-right").empty()
        $(".c-message").siblings().removeClass("c-color")
        $(".c-top a").siblings().removeClass("c-mine")
        $(".c-top i").eq(1).removeClass("c-next")
        $(".c-top a").eq(2).html("商品投诉").addClass("c-mine")
        $(".c-right").append(`
        <div class='c-complain-title'>投诉建议</div> 
        <h1>
            您如果对我们的产品和服务不满意或有好的建议，请您联系
            <a href="../fm/index.html" class="c-relation">在线客服</a>
            我们的客服专员将会为您提供最优质的服务!
        </h1>
        `)
    }) 
}) 