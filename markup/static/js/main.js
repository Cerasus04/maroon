`use strict`;

// const MOBILE_MAX_WIDTH = 767

const header = document.querySelector(`.header`)
const menu = document.querySelector(`.header__nav`)
const button = document.querySelector(`.burger-btn`)
const overlay = document.querySelector(`.overlay`)


function openHeaderMenu() {

  button.removeEventListener(`click`, openHeaderMenu)
  button.addEventListener(`click`, closeHeaderMenu)
  overlay.addEventListener(`click`, closeHeaderMenu)

  document.addEventListener(`keydown`, onEscPress)

  document.body.classList.add(`no-scroll`)
  header.classList.add(`header--colored`)
  menu.classList.add(`header__nav--open`)
  button.classList.add(`active`)

  setMenuHeight()
}

function closeHeaderMenu() {
  button.removeEventListener(`click`, closeHeaderMenu)
  button.addEventListener(`click`, openHeaderMenu)
  overlay.removeEventListener(`click`, closeHeaderMenu)

  document.removeEventListener(`keydown`, onEscPress)

  document.body.classList.remove(`no-scroll`)
  if (!isScrolled()) {
    header.classList.remove(`header--colored`)
  }
  menu.classList.remove(`header__nav--open`)
  button.classList.remove(`active`)
}

function onEscPress(evt) {
  if (evt.keyCode === 27) {
    closeHeaderMenu()
  }
}

function isScrolled() {
  const pxAmount = 0
  const scrollTop = document.documentElement.scrollTop
  return scrollTop > pxAmount
}

function setMenuHeight() {
  menu.removeAttribute(`style`)
  const deltaHeight = document.body.offsetHeight - header.offsetHeight
  const menuHeight = menu.offsetHeight
  if (deltaHeight < menuHeight) {
    menu.setAttribute(`style`, `height: ${deltaHeight}px`)
  }
}

if (menu) {
    window.addEventListener(`scroll`, function () {
      if (isScrolled()) {
        header.classList.add(`header--colored`)
      } else {
        header.classList.remove(`header--colored`)
      }
    })

    closeHeaderMenu()
  }
const slider = document.querySelector(`.swiper-container.swiper-container--promo`)
const sliderInner = document.querySelector(`.swiper-container.swiper-container--inner`)
const sliderViewed = document.querySelector(`.swiper-container.swiper-container--viewed`)

if (slider) {
  /* eslint-disable no-undef */
  const mySwiper = new Swiper(`.swiper-container`, {
    init: false,
    loop: true,
    navigation: {
      nextEl: `.slider-btns__btn--next`,
      prevEl: `.slider-btns__btn--prew`,
    },
    slidesPerView: 4,
    spaceBetween: 30,
    updateOnWindowResize: true,
    breakpoints: {
      320: {
        width: 970
      },
      768: {
        width: 1010
      }
    }
  })

  mySwiper.init()
  /* eslint-disable no-undef */
}

if (sliderInner) {
    /* eslint-disable no-undef */
    const innerSwiper = new Swiper(`.swiper-container.swiper-container--inner`, {
      init: false,
      loop: true,
      slidesPerColumnFill:"row",
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerColumn: 12,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
          slidesPerColumn: 6,
          slidesPerGroup: 1,
        },
        1366: {
            slidesPerView: 4,
            slidesPerColumn: 3,
            slidesPerGroup: 1,
        }
      },
      navigation: {
        nextEl: `.slider-btns__btn--next-inner`,
        prevEl: `.slider-btns__btn--prew-inner`,
      },
      pagination: {
        el: '.swiper-pagination-inner',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + '  ——  ' + '<span class="' + totalClass + '"></span>';
        },
      },
      spaceBetween: 10,

    })

    innerSwiper.init()
    /* eslint-disable no-undef */
  }

  if (sliderViewed) {
    /* eslint-disable no-undef */
    const viewedSwiper = new Swiper(`.swiper-container.swiper-container--viewed`, {
      init: false,
      loop: true,
      slidesPerColumnFill:"row",
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerColumn: 12,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
          slidesPerColumn: 2,
          slidesPerGroup: 1,
        },
        1366: {
            slidesPerView: 4,
            slidesPerGroup: 1,
        }
      },
      navigation: {
        nextEl: `.slider-btns__btn--next-viewed`,
        prevEl: `.slider-btns__btn--prew-viewed`,
      },
      pagination: {
        el: '.swiper-pagination-viewed',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + '  ——  ' + '<span class="' + totalClass + '"></span>';
        },
      },
      spaceBetween: 10,

    })

    viewedSwiper.init()
    /* eslint-disable no-undef */
  }

  // Filter open

  const filterBtn = document.querySelector('.btn--filter')
  const closeBtn = document.querySelector('.btn--close')
  const filter = document.querySelector('.filter')

  function openFilter() {
    filterBtn.classList.remove('active')
    closeBtn.classList.add('active')
    filter.classList.add('filter--open')
  }
  function closeFilter() {
    closeBtn.classList.remove('active')
    filterBtn.classList.add('active')
    filter.classList.remove('filter--open')
  }

  filterBtn.addEventListener(`click`, openFilter)
  closeBtn.addEventListener(`click`, closeFilter)

  // Accordion

  function toggleAccordion(element) {
    element.classList.toggle(`accordion--closed`)
  }

  function onAccorderonTogglerClick(evt) {
    const accordionElement = evt.currentTarget.closest(`.accordion`)
    toggleAccordion(accordionElement)
  }
  const toggler = document.querySelectorAll(`.accordion__header`)

  for (let i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener(`click`, onAccorderonTogglerClick)
  }
