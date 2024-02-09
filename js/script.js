let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () =>{
  menuBtn.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

var swiper = new Swiper(".courses-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});

var swiper = new Swiper(".teachers-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const carouselInner = document.querySelector('.carousel-inner');
const slides = document.querySelectorAll('.carousel-inner img');
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentIndex * slides[0].offsetWidth;
  carouselInner.style.transform = `translateX(${offset}px)`;
}


// Encontrar o botão de abrir o mapa
var openMapButton = document.querySelector(".open-map-button");

// Encontrar a modal e o botão de fechar
var mapModal = document.getElementById("mapModal");
var closeModal = document.querySelector(".close");

// Quando o usuário clicar no botão, abrir a modal
openMapButton.addEventListener("click", function() {
  mapModal.style.display = "block";
});

// Quando o usuário clicar no botão de fechar, fechar a modal
closeModal.addEventListener("click", function() {
  mapModal.style.display = "none";
});

// Quando o usuário clicar fora da modal, fechar a modal
window.addEventListener("click", function(event) {
  if (event.target == mapModal) {
    mapModal.style.display = "none";
  }
});