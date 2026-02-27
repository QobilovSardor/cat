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

const likeBtn = document.querySelector('.like-btn');
likeBtn.addEventListener("click", () => {
  likeBtn.classList.toggle("active");
});

try {
  const settingsBtn = document.querySelector('.settings-btn');
  const options = settingsBtn.querySelectorAll('.share-options span');
  const currentValue = settingsBtn.querySelector('span'); // 720 yozilgan span

  // Button bosilganda active toggle
  settingsBtn.addEventListener('click', (e) => {
    settingsBtn.classList.toggle('active');
  });

  options.forEach(option => {
    option.addEventListener('click', (e) => {
      e.stopPropagation();

      currentValue.textContent = option.textContent; // replace yo'q
      settingsBtn.classList.remove('active');
    });
  });
} catch (error) {

}
