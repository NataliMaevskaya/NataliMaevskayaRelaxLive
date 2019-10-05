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

phone();
popupBurgerMenu();
popupPolicy();
popupRepairTypes();
