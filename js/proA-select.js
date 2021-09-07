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
    //-----------------------------모바일메뉴
    // 모바일메뉴 open/close
    $(".mMenuBt").click(function() {
        $("nav").addClass("open");
        // nav에 open클래스 추가/삭제
    });
    $(".mCloseBt").click(function() {
        $("nav").removeClass("open");
        // nav에 open클래스 추가/삭제
    });
    if ($(window).width() < 641) {
        // 모바일용 아코디언 메뉴
        $(".mSnb").hide();
        // .mSnb를 숨기고 시작
        $(".gnbMenu > .title").click(function() {
            $(this).next().slideToggle(300);
            //this 다음 요소를 슬라이드다운
            $(".gnbMenu > .title").not(this).next().slideUp(300);
            return false;
            // a href="#"일때 갈곳이 없으면 무조건 페이지 상단(처음)으로 이동하는데
            // 클릭한 다음 링크기능을 수행못하도록 return false;를 입력
        });
    }
    //-----------------------------스크롤버튼
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
// 카운팅
function counting() {
    $('.counting').each(function() {
        var $this = $(this), //이름을 그냥 $this로 만들
            countTo = $this.attr('data-count');
        $({
            countNum: $this.text()
        }).animate({
            countNum: countTo
            //시작 숫자와 종료숫자를 비교한다
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
    $('.countingFixed').each(function() {
        var $this = $(this),
            countTo = $this.text();
        // 속성값으로 소수점을 쓸 수 없어서 해당 태그에 텍스트로 원하는 수치 입력, 스크립트에서 변수로 받기
        // 초기값 0을 여기서 미리설정하기
        $({
            countNum: 0
        }).animate({
            countNum: countTo
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
    // 카운팅

    counting();



    var scrolltop = $(window).scrollTop();
    $("section").each(function() {
        if (scrolltop >= $(this).offset().top) {
            $("span[data-id=" + $(this).attr('id') + "]").addClass('on').siblings().removeClass('on');
            $(this).addClass('on').siblings().removeClass('on'); //애니메이션 작동 section트리거 on이켜지도록
        } else if (scrolltop >= $(".section5").offset().top + 130) {
            $("span[data-id=footer]").addClass('on').siblings().removeClass('on');
        } else if (scrolltop <= $(".section1").offset().top - 50) { //비주얼에서는 불 안들어오게
            $(".visual").addClass('on').siblings().removeClass('on'); //비주얼에서 온이 켜지게 따로 써줌 리모콘에서 비주얼이 포함안되있으니까
            $("span[data-id=section1]").removeClass('on');         
        };
    });
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
