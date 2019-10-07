'use-strict';
import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

import phone from './modules/phone';
import popupBurgerMenu from './modules/popupBurgerMenu';
import popupPolicy from './modules/popupPolicy';
import popupRepairTypes from './modules/popupRepairTypes';
import scrollToId from './modules/scrollToId';
import popupConsult from './modules/popupConsult';
import accordionQuestion from './modules/accordionQuestion';
import SliderCarousel from './modules/SliderCarousel';

phone();
popupBurgerMenu();
popupRepairTypes();
scrollToId();

popupConsult();
popupPolicy();

accordionQuestion();

const partnersBlock = document.querySelector('.partners'),
    mainBlock = partnersBlock.querySelector('.wrapper');
    mainBlock.classList.add('partners-main');
const options = {
    main: '.partners-main',
    wrap: '.partners-slider',
    prev: '#partners-arrow_left',
    next: '#partners-arrow_right',
    // slidesToShow: 3,
    infinity: true,
    addClass: {
        mainClass: 'glo-slider',
        wrapClass: 'glo-slider__wrap',
        itemClass: 'glo-slider__item'
    },

    responsive: [
        {
        breakpoint: 1024,
        slidesToShow: 3
    },
    {
        breakpoint: 768,
        slidesToShow: 2
    },
    {
        breakpoint: 576,
        slidesToShow: 1
    }]
 };
const carousel = new SliderCarousel(options);
carousel.init();