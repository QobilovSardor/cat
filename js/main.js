
try {
  new Swiper('.shorts-swiper', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 500,
    mousewheel: true,
    keyboard: { enabled: true },
    touchReleaseOnEdges: true,
    breakpoints: {
      768: {
        spaceBetween: 20,
      },
      0: {
        spaceBetween: 0,
      },
    }
  });
} catch (error) { }

try {
  const categorySwiper = new Swiper('.category-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 8,
    freeMode: true,
    grabCursor: true,
    mousewheel: {
      forceToAxis: true,
    },
    pagination: false,
    navigation: false,
    scrollbar: false,
  });
} catch (error) {

}
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
      500: {
        slidesPerView: 3.5,
      },
      768: {
        slidesPerView: 4.5,
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


try {
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
} catch (error) {

}

try {
  const likeBtn = document.querySelector('.like-btn');
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("active");
  });

} catch (error) {

}
try {
  document.querySelectorAll('.settings-btn').forEach(settingsBtn => {
    const options = settingsBtn.querySelectorAll('.share-options span');
    const currentValue = settingsBtn.querySelector('span');

    settingsBtn.addEventListener('click', (e) => {
      settingsBtn.classList.toggle('active');
    });

    options.forEach(option => {
      option.addEventListener('click', (e) => {
        e.stopPropagation();
        currentValue.textContent = option.textContent;
        settingsBtn.classList.remove('active');
      });
    });
  });
} catch (error) {

}




try {
  const ICONS = {
    pause: 'images/icons/play2.svg',
    play: 'images/icons/pause.svg',
    mute: 'images/icons/mute.svg',
  };

  const VOLUME_SVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
</svg>`;

  const HEART_SVG = `<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.4658 1.64498C14.0523 0.16455 11.9459 0.761146 10.6804 1.71146C10.1616 2.10111 9.90215 2.29593 9.74951 2.29593C9.59688 2.29593 9.33745 2.10111 8.8186 1.71146L8.81859 1.71146C7.55317 0.761146 5.44669 0.16455 3.03321 1.64498C-0.134227 3.58789 -0.85094 9.99761 6.45509 15.4053C7.84666 16.4353 8.54244 16.9502 9.74951 16.9502C10.9566 16.9502 11.6524 16.4353 13.0439 15.4053C20.35 9.99761 19.6332 3.58789 16.4658 1.64498Z" stroke="#FF494C" fill="#FF494C" stroke-width="1.5" stroke-linecap="round"/>
</svg>`;

  document.querySelectorAll('.shorts').forEach(shorts => {
    const actionBtn = shorts.querySelector('.action-btn');
    const pauseImg = actionBtn.querySelector('img');
    const likeBtn = shorts.querySelector('.like-btn');
    const muteBtn = shorts.querySelector('.box:nth-child(3)');
    const muteIcon = muteBtn.querySelector('.icon');

    let isPlaying = true;
    let isMuted = false; // ← HTML dagi default mute.svg ga mos
    let isAnimating = false;
    muteIcon.innerHTML = `<img src="${ICONS.mute}" alt="mute">`;

    // ─── SHORTS CLICK → pause/play animate ───
    shorts.addEventListener('click', (e) => {
      if (e.target.closest('.video-actions')) return;
      if (isAnimating) return;

      isPlaying = !isPlaying;
      pauseImg.src = isPlaying ? ICONS.pause : ICONS.play;

      isAnimating = true;
      actionBtn.classList.add('show');

      setTimeout(() => {
        actionBtn.classList.remove('show');
        setTimeout(() => { isAnimating = false; }, 300);
      }, 700);
    });

    // ─── LIKE ───
    likeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      likeBtn.classList.toggle('liked');

      const pop = document.createElement('span');
      pop.className = 'like-pop';
      pop.innerHTML = HEART_SVG;
      likeBtn.appendChild(pop);
      setTimeout(() => pop.remove(), 800);
    });

    // ─── MUTE ───
    muteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      isMuted = !isMuted;

      if (isMuted) {
        muteIcon.innerHTML = VOLUME_SVG; // muted → volume icon ko'rsat
      } else {
        muteIcon.innerHTML = `<img src="${ICONS.mute}" alt="mute">`; // unmuted → mute icon
      }
    });
  });
} catch (error) {
}

document.querySelectorAll('.shorts .badge, .shorts .video-actions .box, .shorts .action-btn').forEach(el => {
  el.addEventListener('click', e => e.stopPropagation());
});


// Consoleda tekshir:
console.log(window.innerHeight)      // haqiqiy ko'rinadigan balandlik
console.log(screen.height)           // ekran balandligi
