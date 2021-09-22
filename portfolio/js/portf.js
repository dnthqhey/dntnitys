
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  effect: 'fade',
  mousewheel: true,
  // on: {
  //     slideChange: function() {
  //     if (this.realIndex == 2) {
  //         $(".sec02").addClass('on')
  //     }
  //   }
  // },
  on: {
    slideChangeTransitionStart: function() {
        $(".sec02, .sec03, .sec04, .sec05").removeClass("on");
        // $(".sec02 h1, .sec02 h2").hide();
    },
    slideChangeTransitionEnd: function() {
        $(".sec02, .sec03, .sec04, .sec05").addClass("on");
        // $(".sec02 h1, .sec02 h2").slideDown(1000);
    },
},
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

var swiper2 = new Swiper('.swiper_h', {
  pagination: {
      el: '.pageHorizontal',
      clickable: true,
  },
  effect: "fade",
  fadeEffect: {
      crossFade: true
  },
  virtualTranslate: true,
  // swiper in swiper 구조에서 fade effect 동작시 겹치는 부분 해결
});


function autoType(elementClass, typingSpeed){
  var thhis = $(elementClass);
  thhis = thhis.find(".text-js");
  
  var text = thhis.text().trim().split('');
  var amntOfChars = text.length;
  var newString = "";
  // setTimeout(function(){
      for(var i = 0; i < amntOfChars; i++){
          (function(i,char){
              setTimeout(function() {        
                  newString += char;
                  thhis.text(newString);
              },i*typingSpeed);
          })(i+1,text[i]);
      }
  // },1500);
}


$(document).ready(function(){
  autoType(".type-js", 150);

    $('.tri').click(function() {
        $('.big2').show();
    });



});
