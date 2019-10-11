const sliderDesigns = () => {
    const designs = document.querySelector('.designs'), //весь блок с дизайном
        navWrap = designs.querySelector('.nav-wrap'),
        navDesigns = designs.querySelector('.nav-designs'),
        navListDesigns = designs.querySelector('.nav-list-designs'),
        navItemsDesigns = navListDesigns.querySelectorAll('.designs-nav__item'),
        designSlider = designs.querySelector('.designs-slider').children,
        designSliders = [...designSlider], // все слайдеры с дизайнами
        previewBlocks = designs.querySelectorAll('.preview-block'), // блоки предпросмотра для всех слайдеров
        designsSliderWrap = document.querySelector('.designs-slider-wrap'),
        currentSlide = designsSliderWrap.querySelector('.slider-counter-content__current'), //текущий слайд в слайдере
        totalSlide = designsSliderWrap.querySelector('.slider-counter-content__total'); //всего сладов в слайдере

    let currentSlider,
        currentSlides,
        currentSlideIndex,
        slidesLength,
        previewBlockSlides,
        previewBlockSlideInner;

    const currentSlideIndexChanges = (currentSlideIndex) => {
        previewBlockSlides.forEach((previewSlide, i) => {
            previewBlockSlideInner = previewSlide.querySelector('.preview-block__item-inner');
            if (i === currentSlideIndex) {
                previewBlockSlideInner.classList.add('preview_active');
            } else if (previewBlockSlideInner.matches('.preview_active')) {
                previewBlockSlideInner.classList.remove('preview_active');
            }

        });
        currentSlides.forEach((slide, i) => {
            if (i === currentSlideIndex) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    };

    const initSlider = (sliderIndex) => {
        navItemsDesigns.forEach((item, index) => {
            if (index === sliderIndex) {
                item.classList.add('active');
                currentSlideIndex = 0;
            } else if (item.matches('.active')) {
                item.classList.remove('active');
            }
        });

        // console.log(previewBlocks);
        previewBlocks.forEach((previewBlock, i) => {
            if (i === sliderIndex) {
                previewBlock.classList.add('visible');
            } else if (previewBlock.matches('.visible')) {
                previewBlock.classList.remove('visible');
            }

        });
        designSliders.forEach((slider, i) => {
            if (i === sliderIndex) {
                slider.style.display = "block";
            } else {
                slider.style.display = "none";
            }
        });
        currentSlider = designSliders[sliderIndex];
        // // console.log(currentSlider[sliderIndex]); 
        currentSlides = currentSlider.querySelectorAll('.designs-slider__style-slide');
        // // console.log('currentSlides: ', currentSlides);
        slidesLength = currentSlides.length;
        // // console.log('slidesLength: ', slidesLength);
        // if (!currentSlideIndex) {
        // currentSlideIndex = 0;
        // }

        currentSlide.textContent = currentSlideIndex + 1;
        totalSlide.textContent = slidesLength;

        currentSlides.forEach((slide, i) => {
            if (i === currentSlideIndex) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
        previewBlockSlides = previewBlocks[sliderIndex].querySelectorAll('.preview-block__item');
        previewBlockSlides.forEach((previewSlide, i) => {
            previewBlockSlideInner = previewSlide.querySelector('.preview-block__item-inner');
            if (i === currentSlideIndex) {
                previewBlockSlideInner.classList.add('preview_active');
            } else if (previewBlockSlideInner.matches('.preview_active')) {
                previewBlockSlideInner.classList.remove('preview_active');
            }
            previewSlide.addEventListener('click', () => {
                currentSlideIndex = i;
                currentSlide.textContent = currentSlideIndex + 1;
                totalSlide.textContent = slidesLength;
                currentSlideIndexChanges(currentSlideIndex);
            });
        });


    };
    navItemsDesigns.forEach((tab, i) => {
        if (tab.matches('.active')) {
            initSlider(i);
        }

        tab.addEventListener('click', () => {
            initSlider(i);
        });
    });

    const checkBoundaries = (currentSlide, length) => {
        if (currentSlide >= length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = length - 1;
        }
        return currentSlide;
    };

    designsSliderWrap.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('#design_right')) {
            currentSlides[currentSlideIndex].style.display = "none";
            currentSlideIndex++;
            currentSlideIndex = checkBoundaries(currentSlideIndex, slidesLength);
            currentSlideIndexChanges(currentSlideIndex);
            currentSlide.textContent = currentSlideIndex + 1;
            currentSlides[currentSlideIndex].style.display = "block";

        }
        if (target.closest('#design_left')) {
            currentSlides[currentSlideIndex].style.display = "none";
            currentSlideIndex--;
            currentSlideIndex = checkBoundaries(currentSlideIndex, slidesLength);
            currentSlideIndexChanges(currentSlideIndex);
            currentSlide.textContent = currentSlideIndex + 1;
            currentSlides[currentSlideIndex].style.display = "block";
        }
    });

    let offsetNav,
        currentPosNavItem = 0,
        numNav;

    const checkResponse = () => {
        const widthWindow = document.documentElement.clientWidth;
        if (widthWindow < 1035) {
            numNav = navListDesigns.clientWidth / navDesigns.clientWidth - 1;
            if (numNav < 1) {
                numNav = 1;
            }
            offsetNav = navDesigns.clientWidth;
        } else {
            navListDesigns.style.cssText = `transform: translateX(0px);`;
        }

    };
    checkResponse();
    window.addEventListener("resize", checkResponse);
    // if (widthWindow < 1025) {
    numNav = navListDesigns.clientWidth / navDesigns.clientWidth - 1;
    if (numNav < 1) {
        numNav = 1;
    }
    offsetNav = navDesigns.clientWidth;

    navWrap.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('#nav-arrow-designs_right')) {
            if (currentPosNavItem === Math.ceil(numNav)) {
                return;
            } else {
                currentPosNavItem++;
                navListDesigns.style.cssText = `transform: translateX(-${offsetNav*currentPosNavItem}px);`;
            }
        }
        if (target.closest('#nav-arrow-designs_left')) {
            if (currentPosNavItem === 0) {
                return;
            } else {
                currentPosNavItem--;
                navListDesigns.style.cssText = `transform: translateX(-${offsetNav*currentPosNavItem}px);`;
            }
        }

    });

    //описание работ
    const popupDesign = document.querySelector('.popup-design'),
        popupNavWrap = popupDesign.querySelector('.nav-wrap'),
        popupNavDesigns = popupDesign.querySelector('.nav-designs'),
        popupNavListDesigns = popupDesign.querySelector('.nav-list-designs'),
        popupNavItemsDesigns = popupNavListDesigns.querySelectorAll('.designs-nav__item_popup'),
        popupDesignSlider = popupDesign.querySelector('.popup-design-slider').children, //,
        popupDesignSliders = [...popupDesignSlider], // все слайдеры с дизайнами
        popupDesignSliderWrap = popupDesign.querySelector('.popup-design-slider-wrap'),
        popupCurrentSlide = popupDesignSliderWrap.querySelector('.slider-counter-content__current'), //текущий слайд в слайдере
        popupTotalSlide = popupDesignSliderWrap.querySelector('.slider-counter-content__total'), //всего сладов в слайдере
        popupDesignTexts = popupDesign.querySelectorAll('.popup-design-text');


    let popupCurrentSlideIndex,
        popupCurrentSlider,
        popupCurrentSlides,
        popupSlidesLength;
    const popupInitSlider = (popupSliderIndex) => {
        popupNavItemsDesigns.forEach((item, index) => {
            if (index === popupSliderIndex) {
                item.classList.add('active');
                popupCurrentSlideIndex = 0;
            } else if (item.matches('.active')) {
                item.classList.remove('active');
            }
        });
        popupDesignTexts.forEach((textDesign, i) => {
            if (i === popupSliderIndex) {
                textDesign.classList.add('visible-content-block');
            } else if (textDesign.matches('.visible-content-block')) {
                textDesign.classList.remove('visible-content-block');
            }
        });
        // console.log(popupDesignSliders);
        popupDesignSliders.forEach((popupSlider, i) => {
            if (i === popupSliderIndex) {
                popupSlider.style.display = "flex";
                popupSlider.style.visibility = "visible";
            } else {
                popupSlider.style.display = "none";
                popupSlider.style.visibility = "hidden";
            }
        });
        popupCurrentSlider = popupDesignSliders[popupSliderIndex];
        popupCurrentSlides = popupCurrentSlider.querySelectorAll('.popup-design-slider__style-slide');
        popupSlidesLength = popupCurrentSlides.length;

        popupCurrentSlide.textContent = popupCurrentSlideIndex + 1;
        popupTotalSlide.textContent = popupSlidesLength;
        popupCurrentSlides.forEach((popupSlide, i) => {
            if (i === popupCurrentSlideIndex) { // тут popupSliderIndex
                popupSlide.style.display = "flex";
                popupSlide.style.visibility = "visible";
            } else {
                popupSlide.style.display = "none";
                popupSlide.style.visibility = "hidden";
            }
        });
    };


    designs.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('.link-list-designs')) {
            popupDesign.style.visibility = 'visible';
            popupNavItemsDesigns.forEach((tab, i) => {
                if (tab.matches('.active')) {
                    popupInitSlider(i);
                }

                tab.addEventListener('click', () => {
                    popupInitSlider(i);
                });
            });
        }
    });
    popupDesign.addEventListener('click', (event) => {
        let target = event.target;
        if (popupDesign.getAttribute("style") &&
            (target.closest(".close") || !target.closest(".popup-dialog-design"))) {
                // popupDesign.style.visibility = 'hidden';
                // popupNavListDesigns.style.visibility = 'hidden';
            popupDesign.removeAttribute('style');
            popupDesignSliders.forEach((popupSlider, i) => {
                if (popupSlider.getAttribute('style')) {
                    const popupSlides = popupSlider.querySelectorAll('.popup-design-slider__style-slide');
                    popupSlides.forEach((popupSlide) => {
                        if (popupSlide.getAttribute('style')) {
                            popupSlide.removeAttribute('style');
                        }
                    });
                    popupSlider.removeAttribute('style');
                }
            });
            // popupNavListDesigns.removeAttribute('style');
        }
        if (target.closest('#popup_design_right')) {
            popupCurrentSlides[popupCurrentSlideIndex].style.display = "none";
            popupCurrentSlides[popupCurrentSlideIndex].style.visibility = "hidden";
            popupCurrentSlideIndex++;
            popupCurrentSlideIndex = checkBoundaries(popupCurrentSlideIndex, popupSlidesLength);
            popupCurrentSlide.textContent = popupCurrentSlideIndex + 1;
            popupCurrentSlides[popupCurrentSlideIndex].style.display = "flex";
            popupCurrentSlides[popupCurrentSlideIndex].style.visibility = "visible";

        }
        if (target.closest('#popup_design_left')) {
            popupCurrentSlides[popupCurrentSlideIndex].style.display = "none";
            popupCurrentSlides[popupCurrentSlideIndex].style.visibility = "hidden";
            popupCurrentSlideIndex--;
            popupCurrentSlideIndex = checkBoundaries(popupCurrentSlideIndex, popupSlidesLength);
            popupCurrentSlide.textContent = popupCurrentSlideIndex + 1;
            popupCurrentSlides[popupCurrentSlideIndex].style.display = "flex";
            popupCurrentSlides[popupCurrentSlideIndex].style.visibility = "visible";
        }
    });

    let offsetNavPopup,
        currentPosNavItemPopup = 0,
        numNavPopup;

    const checkResponsePopup = () => {
        const widthWindowPopup = document.documentElement.clientWidth;
        if (widthWindowPopup < 1135) {
            numNavPopup = popupNavListDesigns.clientWidth / popupNavDesigns.clientWidth - 1;
            if (numNavPopup < 1) {
                numNavPopup = 1;
            }
            offsetNavPopup = popupNavDesigns.clientWidth;
        } else {
            popupNavListDesigns.style.cssText = `transform: translateX(0px);`;
        }

    };
    checkResponsePopup();
    window.addEventListener("resize", checkResponsePopup);
    // if (widthWindowPopup < 1135) {
    numNavPopup = popupNavListDesigns.clientWidth / navDesigns.clientWidth - 1;
    if (numNavPopup < 1) {
        numNavPopup = 1;
    }
    offsetNavPopup = popupNavDesigns.clientWidth;
    popupNavWrap.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('#nav-arrow-popup-designs_right')) {
            if (currentPosNavItemPopup === Math.ceil(numNavPopup)) {
                return;
            } else {
                currentPosNavItemPopup++;
                popupNavListDesigns.style.cssText = `transform: translateX(-${offsetNav*currentPosNavItemPopup}px);`;
            }
        }
        if (target.closest('#nav-arrow-popup-designs_left')) {
            if (currentPosNavItemPopup === 0) {
                return;
            } else {
                currentPosNavItemPopup--;
                popupNavListDesigns.style.cssText = `transform: translateX(-${offsetNav*currentPosNavItemPopup}px);`;
            }
        }
    });
};
export default sliderDesigns;