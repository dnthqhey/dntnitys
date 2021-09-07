$(function() {
    
    $('.vertical-slider').slick({
        arrows: false,
        dots: true,
        infinite: false,
        vertical: true,
        verticalSwiping: true,
    });

     // 모바일메뉴 open/close
     $(".mMenuBt").click(function () {
        $("nav").addClass("open");
        // nav에 open클래스 추가/삭제
    });
    $(".mCloseBt").click(function () {
        $("nav").removeClass("open");
        // nav에 open클래스 추가/삭제
    });
    if ($(window).width() < 641) {
        // 모바일용 아코디언 메뉴
        $(".mSnb").hide();
        // .mSnb를 숨기고 시작
        $(".gnbMenu > .title").click(function () {
            $(this).next().slideToggle(300);
            //this 다음 요소를 슬라이드다운
            $(".gnbMenu > .title").not(this).next().slideUp(300);
            return false;
            // a href="#"일때 갈곳이 없으면 무조건 페이지 상단(처음)으로 이동하는데
            // 클릭한 다음 링크기능을 수행못하도록 return false;를 입력
        });
    }

    //스크롤감지,돌아가는 pagination
    var angle = 0;
    var pangle = 360;
    $(".vertical-slider").mousewheel(function(e) {
        if (e.deltaY < 0) {
            if ($(this).slick("slickCurrentSlide") == $(this).find(".slide").length - 1) {
                return
            }
            e.preventDefault();//기본동작그만
            $(this).slick("slickNext");
            angle = angle == pangle ? 360 : angle += 60;
        } else {
            if ($(this).slick("slickCurrentSlide") == 0) {
                return
            }
            e.preventDefault();
            $(this).slick("slickPrev");
            angle = angle == pangle ? 0 : angle -= 60;
        }
        $(".slick-dots").css("transform", "rotate(" + angle + "deg)");
        return
    });
    // 페이징 클릭시 돌아가는 모션
    var paging = $('.slick-dots li');
    $(paging).click(function() {
        var rotateAngle = $(this).index() * 60 + 'deg';
        $(".slick-dots").css("transform", "rotate(" + rotateAngle + ")");
    });
});