//-----------------------------gnv/nav
$(document).ready(function(){
     //리사이징 할때마다 새로고침
     var lastWidth = $(window).width();
     $(window).resize(function(){
         if($(window).width()!=lastWidth){
             location.reload();
             lastWidth = $(window).width();
             return false;
         }
     });
    $("nav > div > ul").hide();
    // nav의 하위메뉴 숨기고 시작
    if($(window).width() > 640){
        $("nav > div").hover(function(){
            $(this).addClass("on");
            $("nav > div").not(this).removeClass("on");
            $(this).children("ul").slideToggle(300);
            //this의 자식 요소를 슬라이드다운
            $("nav > div").not(this).children("ul").slideUp(300);
            //this와 관계없는 자식 요소를 슬라이드업
        });
    }

    else if($(window).width() < 641){
        // 모바일메뉴 open/close
        $(".mMenuBt").click(function(){
            $(".gnb").addClass("on");
            // .gnb에 on클래스 추가/삭제    
        });
        $(".mCloseBt").click(function(){
            $(".gnb").removeClass("on");
            // .gnb에 on클래스 추가/삭제
        });

        //모바일 .gnb 탭스타일
        // 구글 뒤져봐도 선생님거 젤 짧: 웹디자인기능사!
        $(".gnb > div > span").click(function(){ 
            $(this).addClass('on').siblings().removeClass('on');
            $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
        });

        //nav 하위메뉴 slideToggle
        $("nav > div").click(function(){
            $(this).addClass("on");
            $("nav > div").not(this).removeClass("on");
            $(this).children("ul").slideToggle(300);
            //this의 자식 요소를 슬라이드다운
            $("nav > div").not(this).children("ul").slideUp(300);
            //this와 관계없는 자식 요소를 슬라이드업
        });
    }
    // scroll top 버튼
    $(".topp").click(function(){
        $("html, body").animate({
            scrollTop : 0
        }, 1000);
    });
});
//-----------------------------ifrme이 ie에서 z-index가 동작하지 않을때 사용
// function fixPDFzIndexIssue (idToFix) {
//     if(!idToFix) return "Please provide the id of the div to fix";

//     var $divToFix = $('#' + idToFix);

//     $divToFix.wrap("<div class='top'></div>");

//     $(".top").append("<iframe src='about:blank' class='cover'>");
// }

// ---------------------------------------------------

