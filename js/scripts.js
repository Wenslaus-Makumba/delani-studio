// what we do 
$('.first').click(function () {
    $(this).children('.drop').slideToggle(1300);
    $(this).children('.show').slidetoggle(1400);
  });   
// portfolio
$(".card").hover(function () {
    $(this).children(".card-1").fadeToggle(1000, "linear");
  });

// feedback
