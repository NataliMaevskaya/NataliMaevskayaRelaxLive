const sliderDesigns = () => {
    const designs = document.querySelector('.designs'), //весь блок с дизайном
        navWrap = designs.querySelector('.nav-wrap'),
        navDesigns = designs.querySelector('.nav-designs'),
        navListDesigns = designs.querySelector('.nav-list-designs'),
        navItemsDesigns = navListDesigns.querySelectorAll('.designs-nav__item'),        
        designSlider = designs.querySelector('.designs-slider').children,
        designSliders = [...designSlider], // все слайдеры с дизайнами
        designsSliderWrap = document.querySelector('.designs-slider-wrap'),
        currentSlide = designsSliderWrap.querySelector('.slider-counter-content__current'), //текущий слайд в слайдере
        totalSlide = designsSliderWrap.querySelector('.slider-counter-content__total'); //всего сладов в слайдере

    let currentSlider,
        currentSlides,
        currentSlideIndex,
        slidesLength;

    const initSlider = (sliderIndex) => {
        navItemsDesigns.forEach((item, index) => {
            if (index === sliderIndex) {
                item.classList.add('active');
            } else if (item.matches('.active')) {
                item.classList.remove('active');
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
        currentSlideIndex = 0;
        currentSlide.textContent = currentSlideIndex + 1;
        totalSlide.textContent = slidesLength;

        currentSlides.forEach((slide, i) => {
            if (i === currentSlideIndex) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
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
            currentSlide.textContent = currentSlideIndex + 1;
            currentSlides[currentSlideIndex].style.display = "block";

        }
        if (target.closest('#design_left')) {
            currentSlides[currentSlideIndex].style.display = "none";
            currentSlideIndex--;
            currentSlideIndex = checkBoundaries(currentSlideIndex, slidesLength);
            currentSlide.textContent = currentSlideIndex + 1;
            currentSlides[currentSlideIndex].style.display = "block";
        }
    });

    let offsetNav,
        currentPosNavItem = 0,
        numNav;
    // const navItemsLength = navItems.length;
    let widthWindow = document.documentElement.clientWidth;
    const checkResponse = () => {
        widthWindow = document.documentElement.clientWidth;
        if (widthWindow < 1035) {
            numNav = navListDesigns.clientWidth / navDesigns.clientWidth - 1;
            // if (numNav >= 0 && numNav < 1) {
                if (numNav < 1) {
                numNav = 1;
            }
            offsetNav = navDesigns.clientWidth;
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

        // currentPosNavItem = 0;
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
};
export default sliderDesigns;