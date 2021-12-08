let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');


window.onscroll = () =>{
    menu.classList.remove('fa-times-rectangle')
    navbar.classList.remove('active')
}


menu.onclick = () =>{
    menu.classList.toggle('fa-times-rectangle')
    navbar.classList.toggle('active')
}


document.querySelectorAll('.image-slider img').forEach(images =>{
    images.onclick = () =>{
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    }
})


var swiper = new Swiper(".rewiew-slider", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },

    
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: {
          slidesPerView: 0,
        },
        768: {
          slidesPerView: 2,
        },
    },
    loop: true,
    grabCursor:true,


  });