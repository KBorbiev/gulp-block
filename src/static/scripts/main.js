'use strict';

document.addEventListener('DOMContentLoaded', function() {


    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      freeMode: true,
      loop: true,
      breakpoints: {
          1280: {
            slidesPerView: 3,
          },
          920: {
            slidesPerView: 2,
          },
          720: {
            slidesPerView: 1
            }
        }
    });


    // jQuery - Мобильное меню
    var mobileMenu = (function() {
        var $trigger = $('.mobile-menu__arrow');
        var animationSpeed = 200;

        // Mobile menu
        $trigger.on('click', function() {
            toggleMenu($(this));
        });

        function toggleMenu(el) {
            var li = el.closest('li');

            el.toggleClass('is-active');
            li.toggleClass('is-active');

            li.children('ul').slideToggle(animationSpeed, function() {
                li.children('ul').toggleClass('is-opened');
            });
        }
    })();

    // Открытье и закрытье mobile-menu
    (function(){

        var $mobile_open = document.querySelector('.js-mobile-panel-open');
        var $mobile_close = document.querySelector('.js-mobile-panel-close');
        var $mobile_pane = document.querySelector('.js-mobile-panel');
        var $base = document.documentElement;

        $mobile_open.addEventListener('click', openPanel);
        $mobile_close.addEventListener('click', closePanel);

        function openPanel(){
            $mobile_pane.classList.add('is-opened');
            $base.style.overflow = 'hidden';
        };
        function closePanel(){
            $mobile_pane.classList.remove('is-opened');
            $base.style.overflow = '';
        };
    })();
});