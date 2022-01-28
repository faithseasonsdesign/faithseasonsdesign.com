

function navigationButton(){
    $('.floating-button-wrapper').click(function(){
        $(".floating-action-button-menu").slideToggle(400);
    });
}

function hideMenu(){
    $(".about-link").click(function(){
        $(".navigation-list-outer-wrapper").hide();
    })
}

function styling(){

    let window_width = window.outerWidth;
    let window_height = window.outerHeight;

    if(window_height <= 568){
        let section = document.getElementsByClassName("background-img-wrapper");
        let mask = document.getElementsByClassName("bg-image-mask");
        //mask[0].style.height = "110vh";
        //section[0].style.height ="110vh";
        //welcome_caption[0].style.fontSize = "14pt";
    }
   
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

navigationButton();
styling();
//cardButtons();