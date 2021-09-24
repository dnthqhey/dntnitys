

   //리사이징 할때마다 새로고침
    var lastWidth = $(window).width();
    $(window).resize(function() {
        if ($(window).width() != lastWidth) {
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });

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

   

//----------------------------섹션이동 시 리모콘에 하이라이트
$(document).scroll(function() {
    var scrolltop = $(window).scrollTop();
    $("section").each(function() {
        if (scrolltop >= $(this).offset().top) {
            $("span[data-id=" + $(this).attr('class') + "]").addClass('on').siblings().removeClass('on');
        } else if (scrolltop >= $(".section5").offset().top + 130) {
            $("span[data-id=footer]").addClass('on').siblings().removeClass('on');
        } else if (scrolltop <= $(".section1").offset().top - 50) { //비주얼에서는 불 안들어오게
            $("span[data-id=section1]").removeClass('on');
        };
    });
});




//이페이지에 적용된 스크롤리모콘은 각영역의 top = $(window).scrollTop()일때를 구현, 미리 켜지는 경우는 따로따로 값을 입력해야한다.


// -------카운팅 ---------------------


counting();


// 정수 카운팅
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
}


// 소수점 카운팅
function counting2() {
    $('.counting2').each(function() {
        let $this = $(this),
            countTo = $this.text();
        // 속성값으로 소수점을 쓸 수 없어서 해당 태그에 텍스트로 원하는 수치 입력, 스크립트에서 변수로 받기
        // 초기값 0을 여기서 미리설정하기
        $({
            countNum: 0
        }).animate({
            countNum: countTo
        }, {
            duration: 2000,
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
counting2();
// function numberWithCommas(x) {
//     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }
// 3자리마다 ,콤마찍는 함수


// $(".card").click(function () {
//     $(".active-txt").addClass(".on");
//     // nav에 on클래스 추가/삭제
// });다만들고 나서..


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
// 버튼순차적으로 불들어오게 하기
// var wrap = 4;
// var now = 0;
// (function start1() {
//     $(".wrap>div").eq(0).addClass("on");
//     $(".map").addClass("on");
//     $(".mapp").removeClass("on");
//     var increase = setInterval(function() {
//         (function slide1() {
//             now = now == wrap ? 0 : now += 1;
//             $(".wrap>div").eq(now).addClass("on");
//         }, 500);
//        })();
//     if (now >= $(".wrap>div").eq(4)) {
//         clearInterval(increase);
//     }
//     if (now == $(".wrap>div").eq(4)) {
//         $(".mapp").css({
//             "display": "none"
//         });
//     }
// })();


// 팝업
$('.popbt').click(function() {
    $('.popup').show();
});
$('.popup >.close').click(function() {
    $('.popup').hide();
});

// //팝업 드래그앤드롭
// $(".popup").onmousedown = function(event) {
//     // (1) absolute 속성과 zIndex 프로퍼티를 수정해 공이 제일 위에서 움직이기 위한 준비를 합니다.
//     $(".popup").style.position = 'absolute';
//     $(".popup").style.zIndex = 500;

//     // 현재 위치한 부모에서 body로 직접 이동하여
//     // body를 기준으로 위치를 지정합니다.
//     document.body.append(".popup");

//     // 공을 pageX, pageY 좌표 중앙에 위치하게 합니다.
//     function moveAt(pageX, pageY) {
//         $(".popup").style.left = pageX - ball.offsetWidth / 2 + 'px';
//         $(".popup").style.top = pageY - ball.offsetHeight / 2 + 'px';
//     }

//     // 포인터 아래로 공을 이동시킵니다.
//     moveAt(event.pageX, event.pageY);

//     function onMouseMove(event) {
//         moveAt(event.pageX, event.pageY);
//     }

//     // (2) mousemove로 공을 움직입니다.
//     document.addEventListener('mousemove', onMouseMove);

//     // (3) 공을 드롭하고, 불필요한 핸들러를 제거합니다.
//     $(".popup").onmouseup = function() {
//         document.removeEventListener('mousemove', onMouseMove);
//         $(".popup").onmouseup = null;
//     };

// };


// AOS.init();
AOS.init({
    disable: function() {
        var maxWidth = 641;
        return window.innerWidth < maxWidth;
    }
});
//모바일에서 AOS를 사용하고 싶지 않을때


