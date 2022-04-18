$( document ).ready(function(){
    $(".sidenav").sidenav();
    $(".dropdown-trigger").dropdown({
        hover: true,
        coverTrigger: false
    });    
    $(".parallax").parallax();
    $(".carousel.carousel-slider").carousel({
        indicators: true,
        duration: 200,
        fullWidth:true
    }, setTimeout(autoplay, 3000));

});


//Ativando animação do carousel
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 3000);
  };


//Puxando botão "retornar ao topo"  
mybutton = document.getElementById("top-page");

//Escondendo botão no ínicio da página
window.onscroll = function() { scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

//usando o scroll da página para retornar ao topo
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
