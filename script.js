$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i=0;i<4;i++) {
    next=next.next();
    if (!next.length) {
      next=$(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  }
});





// ==================  FONCTION CLIC ==========================================

function videoclic() {
    console.log("Solal be porlair");
    document.location.href="https://www.youtube.com/watch?v=7zSreVXTMeU"
}

function readmeclic() {
    console.log("Solal be porlair");
    document.location.href="index.html"
}


// =============================================================================
