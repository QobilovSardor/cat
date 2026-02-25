const swipers = document.querySelectorAll('.content-swiper');

swipers.forEach(swiperEl => {
  new Swiper(swiperEl, {
    slidesPerView: 5,
    spaceBetween: 12,
    // grabCursor: true,
    freeMode: true,
    breakpoints: {
      320: {
        slidesPerView: 2.2,
      },
      390: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4.5,
      },
      1440: {
        slidesPerView: 5,
      }
    }
  });
});


const input = document.querySelector('.search-box input');
const options = document.querySelector('.search-options');
const box = document.querySelector('.search-box');

input.addEventListener('focus', () => {
  options.classList.add('show');
});

document.addEventListener('click', (e) => {
  if (!box.contains(e.target)) {
    options.classList.remove('show');
  }
});
