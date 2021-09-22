$(document).ready(function() {
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
});


//----------------------------섹션이동 시 리모콘에 하이라이트
$(document).scroll(function() {
    var scrolltop = $(window).scrollTop();
    $("section").each(function() {
        if (scrolltop >= $(this).offset().top) {
            $("span[data-id=" + $(this).attr('class') + "]").addClass('on').siblings().removeClass('on');
        } else if (scrolltop >= $(".section5").offset().top + 130) {
            $("span[data-id=footer]").addClass('on').siblings().removeClass('on');
        } else if(scrolltop <= $(".section1").offset().top -50) {
            $("span[data-id=section1]").removeClass('on');
        };
    });
});

//이페이지에 적용된 스크롤리모콘은 각영역의 top = $(window).scrollTop()일때를 구현, 미리 켜지는 경우는 따로따로 값을 입력해야한다.


// -------카운팅 ---------------------

$(function() {
    counting();

});
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
        $({ countNum: 0 }).animate({ countNum: countTo }, {
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
