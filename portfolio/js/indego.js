var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  effect: 'fade',
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});


$('.progress-bar').each(function () {
  var progressWarp = $(this),
    progressBar = progressWarp.find('.bar'),
    progressText = progressWarp.find('.rate'),
    progressRate = progressText.attr('data-rate');

  progressBar.animate({ width: progressRate + '%' }, 1500);
  var percent_number_stop = $.animateNumber.numberStepFactories.append(' %');
  progressText.animateNumber(
    {
      number: progressRate,
      numberStep: percent_number_stop
    },
    3500
  );

});