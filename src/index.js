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
import popupRepairTypes from './modules/popupRepairTypes';
import scrollToId from './modules/scrollToId';
import popupConsult from './modules/popupConsult';
import popupPolicy from './modules/popupPolicy';
import accordionQuestion from './modules/accordionQuestion';
import SliderCarousel from './modules/SliderCarousel';
import sendFormCall from './modules/sendFormCall';
import maskPhone from "./modules/maskPhone";
import schemeTabs from './modules/schemeTabs';
import sliderDocs from './modules/sliderDocs';
import sliderTypesRepair from './modules/sliderTypesRepair';
import sliderDesigns from './modules/sliderDesigns';




sliderDocs();
sliderTypesRepair();
sliderDesigns();


schemeTabs();
maskPhone();
phone();
popupBurgerMenu();
popupRepairTypes();
scrollToId();

popupConsult();
popupPolicy();
sendFormCall('feedback1');
sendFormCall('feedback2');
sendFormCall('feedback3');
sendFormCall('feedback4');
sendFormCall('feedback5');
sendFormCall('feedback6');

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
        mainClassName: 'glo-slider',
        wrapClassName: 'glo-slider__wrap',
        itemClassName: 'glo-slider__item'
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
const options3 = {
    main: '.reviews-slider-wrap',
    wrap: '.reviews-slider',
    prev: '#reviews-arrow_left',
    next: '#reviews-arrow_right',
    slidesToShow: 1,
    infinity: true,

    addClass: {
    mainClassName: 'glo-reviews-slider',
    wrapClassName: 'glo-reviews-slider__wrap',
    itemClassName: 'glo-reviews-slider__item'
    }
 };
const carousel3 = new SliderCarousel(options3);
carousel3.init();


