$(".btn-info-home-1").click(function(){
  $("#img-dsc-modal-1").fadeIn();
  $("#img-dsc-modal-2").fadeOut();
  $("#img-dsc-modal-3").fadeOut();
});

$(".btn-info-home-2").click(function(){
  $("#img-dsc-modal-2").fadeIn();
  $("#img-dsc-modal-3").fadeOut();
  $("#img-dsc-modal-1").fadeOut();
});

$(".btn-info-home-3").click(function(){
  $("#img-dsc-modal-3").fadeIn();
  $("#img-dsc-modal-1").fadeOut();
  $("#img-dsc-modal-2").fadeOut();
});
