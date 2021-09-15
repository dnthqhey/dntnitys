//리사이징 할때마다 새로고침
var lastWidth = $(window).width();
$(window).resize(function() {
    if ($(window).width() != lastWidth) {
        location.reload();
        lastWidth = $(window).width();
        return false;
    }
});


$(function() {
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

  

// scroll top 버튼
$(".topp").click(function(){
    $("html, body").animate({
        scrollTop : 0
    }, 1000);
});

    //-----------------------------우측 스크롤버튼
    $(".scroll span").each(function() {
        var thisOffset = $("." + $(this).data('id')).offset().top;

        $(this).click(function() {
            $("html, body").animate({
                scrollTop: thisOffset
            }, 1000);
            $(this).addClass('on');
        });
    });


    // 팝업
    $('.popbt').click(function() {
        $('.popup').show();
    });
    $('.popup >.close').click(function() {
        $('.popup').hide();
    });


    // 탭메뉴 가로형
    $(".tab ul li").click(function() {
        $(this).addClass('on')
            .siblings().removeClass('on');
        $("#" + $(this).data('id')).addClass('on')
            .siblings().removeClass('on');
    });
});
// 정수 카운팅
function counting() {
    $('.counting').each(function() {
        var $this = $(this), //이름을 그냥 $this로 만듬
            countTo = $this.attr('data-count');
            //시작 숫자와 종료숫자를 비교한다
        $({
            countNum: $this.text()
        }).animate({
            countNum: countTo
        }, {
            duration: 2000,
            easing: 'linear',
            //easing은 움직임효과로 swing과 linear를 적용할수 있다
            step: function() {
                $this.text(Math.floor(this.countNum));
            }, //Math.floor 정수만 가능 but 난 소수점있어..
            complete: function() {
                $this.text(this.countNum);
            }
        });
    });
    // 소수점 카운팅
    $('.counting2').each(function() {
        var $this = $(this),
            countTo = $this.text();
        // 속성값으로 소수점을 쓸 수 없어서 해당 태그에 텍스트로 원하는 수치 입력, 스크립트에서 변수로 받기
        // 초기값 0을 여기서 미리설정하기
        $({
            countNum: 0
        }).animate({
            countNum: 2.5 // 소수리셋이 어려워서 고정값 적용
            // countNum: countTo
        }, {
            duration: 1000,
            easing: 'linear',
            step: function() {
                // 소수점아래 수 정리 메서드 .toFixed(n) 사용하기
                $this.text(this.countNum.toFixed(1));
            },
            complete: function() {
                $this.text(this.countNum.toFixed(1));
            }
        });
    });
}
counting();

//----------------------------섹션이동 시 리모콘에 하이라이트
$(document).scroll(function() {
    var scrolltop = $(window).scrollTop();
    $("section").each(function() {
        if (scrolltop >= $(this).offset().top) {
            $("span[data-id=" + $(this).attr('class').split(' ')[0] + "]").addClass('on').siblings().removeClass('on');
            $(this).addClass('on').siblings().removeClass('on');
            
        } else if (scrolltop >= $(".section5").offset().top + 130) {
            $("span[data-id=footer]").addClass('on').siblings().removeClass('on');
        } else if (scrolltop <= $(".section1").offset().top - 50) { //비주얼에서는 불 안들어오게
            $(".visual").addClass('on').siblings().removeClass('on'); //비주얼에서 온이 켜지게 따로 써줌 리모콘에서 비주얼이 포함안되있으니까
            $("span[data-id=section1]").removeClass('on');         
        };
    });
    //-----------------------------카운팅 트리거
    if($(".visual").hasClass("on")){
        counting();
    }else{
        $(".counting").text('0');
    }
});



// 향교슬라이드
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,

    pagination: { // 페이징 설정
        el: ".swiper-pagination",
        clickable: true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,

        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
    freeMode: {
        enabled: true,
    },
});

// AOS.init();
AOS.init({
    disable: function() {
        var maxWidth = 641;
        return window.innerWidth < maxWidth;
    }
});
//모바일에서 AOS를 사용하고 싶지 않을때
