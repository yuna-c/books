//gnb-menu
$(function(){
    
    $(".gnb > .gnb-area > li").hover(
        function(){
            $(this).parent().parent().stop().animate({height:280},400);
            $(this).parents(".gnb").next(".gnb-bg").stop().animate({height:200}, 400);
        },
        function(){
            $(this).find("li").addClass("active");
            $(this).parent().parent().stop().animate({height:60}, 400);
            $(this).parents(".gnb").next(".gnb-bg").stop().animate({height:0}, 400);
        }
    )


    //tab-type2
    $('.tab-type2 ul > li').on('click', function(){
        var $this = $(this);
        $tab = $this.parents('.tab-type2'),
        thisIndex = $tab.children().children().index($this);

        $this.addClass('selected').siblings().removeClass('selected');

        if( $tab.find('li').length == $tab.parent().children('.tab-content').length){
            $tab.parent().children('.tab-content').hide().eq(thisIndex).show();
        }
    });

    //top-btn
    $('.btn-top').scrollToFixed({
        limit : function(){
            var limit = $('#footer').offset().top - $(this).outerHeight(true) - 100;
            return limit;
        }
    });
    
    //quick 
    $('.quick-content').scrollToFixed({
        marginTop : 100,
        limit : function(){
            var limit = $('body').offset().top - $(this).outerHeight(true) - 20;
            //outerHeight 셀렉터 요소의 바깥쪽 높이, 마진 포함 보기 | $( 셀렉터 ).outerHeight()  
            //$( 셀렉터 ).offset()  -  해당 셀렉터 요소의 top, left 위치값을 알아냅니다.
            //- 값은 객체 형태로 반환됩니다.
            //- $( 셀렉터 ).offset().left  -  left 값
            //- $( 셀렉터 ).offset().top  -  top 값

            return limit;
        }
    });

    // 과목 탭 selected
    $('.tab-type li a').on('click', function(){
        $(this).parent().addClass('selected').siblings().removeClass('selected');
    });

    //visual-content-banner
    var swiper = new Swiper('.visual-banner', { // .swiper-container
        slidesPerView: 2, 
        centeredSlides: true, 
        paginationClickable: true,
        loop: true,
        autoplay : {
            delay: 3000,
            isableOnInteraction: true, 
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {  
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
        // slideToClickedSlide: true,
    });

    var swiper = new Swiper('.visual1-banner', { 
        slidesPerView: 1, 
        centeredSlides: true, 
        paginationClickable: true,
        loop: true,
        autoplay : {
            delay: 3000,
            isableOnInteraction: true, 
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {  
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    
    //slide-section1
    var swiper = new Swiper('.main-banner1', { // .swiper-container
        slidesPerView: 1, 
        centeredSlides: true, 
        paginationClickable: true,
        loop: true,
        autoplay : {
            delay: 3000,
            isableOnInteraction: true, 
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {  
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // slideToClickedSlide: true,
    });

    
    //quick-content
    var swiper = new Swiper('.quick-slide', { 
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {                                
            delay: 3000,                           
            disableOnInteraction: false,           
        }, 
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

     //tab
    // $('.tab-type li, .tab-area1 li').on("click", function(){
    //     $(this).addClass("selected").siblings().removeClass("selected");
    // });  



    //tab0 
    // $('.tab-type li').on('click', function(){
    //     var $tab = $(this).parents('.tab-type');
    //     var objIndex = $tab.children('a').index(this);

    //     $tab.children('a').removeClass('selected').eq(objIndex).addClass('selected');

    //     if( $tab.children('a').length == $tab.parent().children('.tab-content').length ){
    //         $tab.parent().children('.tab-content').hide().eq(objIndex).show();
    //     }
    // });

    
    //tab-area
    // $('.tab-area li a').on("click", function(){
    //     $(this).parent().addClass("selected").siblings().removeClass("selected");
    // });

});



//scrollAni(이동하고싶은class);
function scrollAni(pos){
    var posTop = $(pos).offset();
    $('html, body').animate({scrollTop : posTop.top}, 500);
}

function scrollAniOption(pos, height, obj){
    var tabIndex = $(obj).parent().children().index($(obj));
    var posTop = $(pos).eq(tabIndex).offset();
    var height = height;

    $('html, body').animate({scrollTop : posTop.top - height}, 500);
}

//증가 감소 버튼
function fnChangeCount(pObj, tblBasketIdx) {
    var f_parents = pObj.parents('.btn-count');
    var f_input = f_parents.find('input');
    var f_span = f_parents.find('span');
    var f_count = parseInt(f_span.text());

    if (pObj.hasClass('btn-minus')) {
        --f_count;

        if (f_count < 1) return;
    } else {
        if (f_count >= 20) {
            alert("최대 구매수량은 20권 입니다");
            return;
        }
        ++f_count;
    }

    f_input.attr('value', f_count);
    f_span.text(f_count);
}

// onclick="fnChangeCount(jQuery(this), '<%=tblBasketIdx%>');

//전체 선택
function checkAll() {
    if ($("#checkPayment").is(':checked')) {
        $("input[name=tblBasketIdx]").prop("checked", true);
    } else {
        $("input[name=tblBasketIdx]").prop("checked", false);
    }
}

