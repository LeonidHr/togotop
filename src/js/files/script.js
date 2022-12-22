// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// Открытие споллера в меню при наведении

window.addEventListener("DOMContentLoaded", () => {
  function addHoverToMenu() {
    if (isMobile.any()) {
      document.addEventListener("click", e => {
        const target = e.target;
  
        if (window.innerWidth >= 992 ) {
          if (target.closest('.item-menu-spoller')) {
            const spoller = target.closest('.item-menu-spoller__title');
            spoller.parentElement.classList.toggle('_hover');
          }
          if (!target.closest('.item-menu-spoller')) {
            document.querySelectorAll('.item-menu-spoller').forEach(spoller => {
              spoller.classList.remove('_hover');
            });
          }
        } else {
          // setTimeout()
          addOpenSpollerClass();
        }
      });
    }
  }
  
  addHoverToMenu();
  
  // Добавление класса для html о открытом споллере
  
  function addOpenSpollerClass() {
    if (document.querySelector('._spoller-active')) {
      document.documentElement.classList.add('_open-spoller');
    } else {
      document.documentElement.classList.remove('_open-spoller');
    }
  }
  
  
  //========================================================================================================================================================
  
  // Анимация счетчика если он во viewport  
  startDigits();
  window.addEventListener("scroll", startDigits);
  
  function startDigits() {
    const digits = document.querySelectorAll('[data-odometer]');
  
    digits.forEach(dig => {
      if (dig.classList.contains('_watcher-view')) {
        setTimeout(function () {
          dig.innerHTML = dig.dataset.odometer;
        }, 100);
      } else if (dig.getBoundingClientRect().top > window.scrollY) {
        setTimeout(function () {
          dig.innerHTML = dig.dataset.odometer;
        }, 100);
      } else {
        dig.innerHTML = '';
      }
    }); 
  }



  //========================================================================================================================================================

  // добавление отзывам паралакса

  function addPrlxForReviews() {
    if (window.innerWidth < 992) {
      const reviews = document.querySelector('.content-reviews');

      document.querySelector('.reviews').removeAttribute('data-prlx-parent');
      reviews.removeAttribute("data-prlx-mouse");
      reviews.removeAttribute("data-prlx-cy");
      reviews.removeAttribute("data-prlx-cx");
      reviews.removeAttribute("data-prlx-dxr");
      reviews.getElementsByClassName.cssText = '';
    }
  }

  addPrlxForReviews();

});