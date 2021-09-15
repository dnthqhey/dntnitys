new Swiper(".thumbSlide5", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 5,
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        waitForTransition: false
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    allowTouchMove: false
});
new Swiper(".mainSlide5", {
    loop: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -400]
        },
        next: {
            translate: ["75%", "500px", 0]
        }
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        waitForTransition: false
    },
    navigation: {
        nextEl: ".mainSlide4 .swiper-button-next",
        prevEl: ".mainSlide4 .swiper-button-prev",
    },
    allowTouchMove: false
});

var swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    freeMode: {
        enabled: true,
    },
    navigation: {
        nextEl: ".z.swiper-button-next",
        prevEl: ".z.swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 2,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
        },
    },
});


var swiper5 = new Swiper(".mySwiper5", {
    slidesPerView: 1,
    spaceBetween: 20,

    navigation: {
        nextEl: ".a.swiper-button-next",
        prevEl: ".a.swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 20,

        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,

        },
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    freeMode: {
        enabled: true,
    },
});

new Swiper('.swiper-container.swipe2', { 
    autoplay: {delay: 2000},
    loop: true,
    direction: 'vertical',
});
// new Swiper('.swiper-container.swipe3', { 
//     autoplay: {delay: 2000},
//     loop: true,
//     direction: 'vertical',
// });


//----------------------------카운팅
function counting() {
    // 정수카운팅
    $('.counting').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        //시작 숫자와 종료숫자를 비교한다    
        $({
            countNum: $this.text()
        }).animate({
            countNum: countTo
        }, {
            duration: 2000,
            easing: 'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }
        });
    });
    // 소수점 카운팅
    $('.counting2').each(function() {
        var $this = $(this);
        // countTo = $this.text();
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
      // 소수점 카운팅 3
      $('.counting3').each(function() {
        var $this = $(this);
        // countTo = $this.text();
        // 속성값으로 소수점을 쓸 수 없어서 해당 태그에 텍스트로 원하는 수치 입력, 스크립트에서 변수로 받기
        // 초기값 0을 여기서 미리설정하기
        $({
            countNum: 0
        }).animate({
            countNum: 1.5 // 소수리셋이 어려워서 고정값 적용
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
// counting();
// function numberWithCommas(x) {
//     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }
// 3자리마다 ,콤마찍는 함수


//----------------------------섹션이동 시 리모콘에 하이라이트
$(document).scroll(function() {
    var scrolltop = $(window).scrollTop();
    $("section").each(function() {
        if (scrolltop >= $(this).offset().top-200) {
            // $("span[data-id=" + $(this).attr('class').split(' ')[0] + "]").addClass('on').siblings().removeClass('on');
            $(this).addClass('on').siblings().removeClass('on');
           
        } 
        // else if (scrolltop >= $(".banner").offset().top + 130) {
        //     $("span[data-id=footer]").addClass('on').siblings().removeClass('on');
        // }
    });
    //-----------------------------카운팅 트리거
    if ($(".visual").hasClass("on")) {
        counting();
    } else {
        $(".counting").text('0');
    }
});

// window.onload = function() {
//     var bt = document.getElementById('bt');
//    // html에서 id="bt"를 쓰고 있는 객체를 찾아서 변수 bt에 선언한다.
//     bt.onclick = function(event) {
//         alert('접수되었습니다');
//         alert('본 버튼은 포트플리오용 접수버튼으로 제작되었으며 실제 접수가 된 것은 아닙니다.');
//         return false
//     };
// };
$(function() {
     // jQueryUI draggable
    $(".popup").draggable();

    $('.bt').click(function() {
        $('.popup').show();
    });

    //닫기버튼  
    $('.popup >.close').click(function() {
        // $('.popup').hide();
        $('.popup').css('display', 'none');
    });
    
   
});