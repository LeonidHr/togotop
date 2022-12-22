/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Pagination, EffectCreative } from 'swiper';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.counter__slider')) {
		// Створюємо слайдер
		new Swiper('.counter__slider', {
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 16,
			// autoHeight: true,
			speed: 800,

			breakpoints: {
				300: {
					slidesPerView: 1.2,
				},
				480: {
					slidesPerView: 1.8,
				},
				560: {
					slidesPerView: 2.1,
				},
				768: {
					slidesPerView: 3,
				},
			},
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			
			pagination: {
				el: '.counter__pagination',
				clickable: true,
			},
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			// navigation: {
			// 	prevEl: '.swiper-button-prev',
			// 	nextEl: '.swiper-button-next',
			// },
			/*
			// Брейкпоінти
			
			*/
			// Події
			on: {

			}
		});
	}

	if (document.querySelector('.possibilities__slider')) {
		// Створюємо слайдер
		new Swiper('.possibilities__slider', {
			modules: [Pagination, EffectCreative],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoHeight: true,
			speed: 1000,
			loop: true,

			// Пагінація

			pagination: {
				el: ".pagination-possibilities",
				clickable: true,
				renderBullet: function (index, className) {
					return `<button class="${className} pagination-possibilities__icon pagination-possibilities__icon_${index + 1} _icon-possible-${index + 1}" type="button"></button>`;
				},
			},
		  // effect: "creative",
			// creativeEffect: {
			// 	prev: {
			// 		shadow: true,
			// 		origin: "left center",
			// 		translate: ["-5%", 0, -200],
			// 		rotate: [0, 100, 0],
			// 	},
			// 	next: {
			// 		origin: "right center",
			// 		translate: ["5%", 0, -200],
			// 		rotate: [0, -100, 0],
			// 	},
			// },

			// effect: "creative",
			// creativeEffect: {
			// 	prev: {
			// 		shadow: true,
			// 		origin: "left center",
			// 		translate: ["-5%", 0, -200],
			// 		rotate: [0, 100, 0],
			// 	},
			// 	next: {
			// 		origin: "right center",
			// 		translate: ["5%", 0, -200],
			// 		rotate: [0, -100, 0],
			// 	},
			// },

			// breakpoints: {
			// 	300: {
			// 		slidesPerView: 1.2,
			// 	},
			// 	480: {
			// 		slidesPerView: 1.8,
			// 	},
			// 	560: {
			// 		slidesPerView: 2.1,
			// 	},
			// 	768: {
			// 		slidesPerView: 3,
			// 	},
			// },
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			// navigation: {
			// 	prevEl: '.swiper-button-prev',
			// 	nextEl: '.swiper-button-next',
			// },
			/*
			// Брейкпоінти
			
			*/
			// Події
			on: {

			}
		});
	}

	if (document.querySelector('.steeps__slider')) {
		// Створюємо слайдер
		new Swiper('.steeps__slider', {
			modules: [Pagination],
			observer: true,
			observeParents: true,
			spaceBetween: 16,
			speed: 800,

			breakpoints: {
				300: {
					slidesPerView: 1,
					spaceBetween: 30,
				},
				767: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				992: {
					slidesPerView: "auto",
				},
			},

			// Пагінація
			
			pagination: {
				el: '.slider-steeps__pagination',
				clickable: true,
			},
		});
	}

	if (document.querySelector('.partners__slider')) {
		// Створюємо слайдер
		new Swiper('.partners__slider', {
			modules: [Pagination],
			observer: true,
			observeParents: true,
			speed: 500,
			// autoHeight: true,

			breakpoints: {
				300: {
					slidesPerView: 1.9,
					spaceBetween: 26,
				},
				480: {
					slidesPerView: 3,
					spaceBetween: 26,
				},
				550: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
				992: {
					slidesPerView: 5,
					spaceBetween: 93,
				},
			},

			// Пагінація
			
			pagination: {
				el: '.partners__pagination',
				clickable: true,
			},
		});
	}

	if (document.querySelector('.for-whom__slider')) {
		// Створюємо слайдер
		new Swiper('.for-whom__slider', {
			modules: [Pagination],
			observer: true,
			observeParents: true,
			speed: 800,
			spaceBetween: 32,

			breakpoints: {
				300: {
					slidesPerView: 1,
				},
				700: {
					slidesPerView: 1.9,
				},
				767: {
					slidesPerView: 2.3,
				},
				992: {
					slidesPerView: 3,
				},
				1470: {
					slidesPerView: 4,
					cssMode: true,
				},
			},

			// Пагінація
			
			pagination: {
				el: '.slider-for-whom__pagination',
				clickable: true,
			},
		});
	}

	if (document.querySelector('.content-reviews__slider')) {
		// Створюємо слайдер
		new Swiper('.content-reviews__slider', {
			modules: [Pagination],
			observer: true,
			observeParents: true,
			speed: 800,
			spaceBetween: 13,

			breakpoints: {
				767: {
					slidesPerView: 2,
				},
			},
			// Пагінація
			
			pagination: {
				el: '.content-reviews__pagination',
				clickable: true,
			},
		});
	}
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});