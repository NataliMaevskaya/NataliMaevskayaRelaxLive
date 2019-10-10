const sliderTypesRepair = () => {
    const repairTypes = document.querySelector('.repair-types'), //весь блок с ремонтами
        repairTypesSliderWrap = document.querySelector('.repair-types-slider-wrap'),
        typesRepairAll = repairTypesSliderWrap.querySelector('.repair-types-slider').children,
        repairSliders = [...typesRepairAll], //,// все слайдеры с ремонтами
        currentSlide = repairTypesSliderWrap.querySelector('.slider-counter-content__current'), //текущий слайд в слайдере
        totalSlide = repairTypesSliderWrap.querySelector('.slider-counter-content__total'), //всего сладов в слайдере
        navListRepair = repairTypes.querySelector('.nav-list-repair'),
        navItems = navListRepair.querySelectorAll('.repair-types-nav__item'), // табы
        navWrapRepair = repairTypes.querySelector('.nav-wrap-repair'),
        repairTypesNav = document.querySelector('.repair-types-nav');

    let offsetNav,
        currentPosNavItem = 0,
        numNav;
    // const navItemsLength = navItems.length;
    let widthWindow = document.documentElement.clientWidth;
    const checkResponse = () => {
        widthWindow = document.documentElement.clientWidth;
        if (widthWindow < 1025) {
            numNav = navListRepair.clientWidth / repairTypesNav.clientWidth - 1;
            // if (numNav >= 0 && numNav < 1) {
                if (numNav < 1) {
                numNav = 1;
            }
            offsetNav = repairTypesNav.clientWidth;
        }

    };
    checkResponse();
    window.addEventListener("resize", checkResponse);
    // if (widthWindow < 1025) {
        numNav = navListRepair.clientWidth / repairTypesNav.clientWidth - 1;
        if (numNav < 1) {
            numNav = 1;
        }
        offsetNav = repairTypesNav.clientWidth;

        // currentPosNavItem = 0;
        navWrapRepair.addEventListener('click', (event) => {
            let target = event.target;
            if (target.closest('#nav-arrow-repair-right_base')) {
                if (currentPosNavItem === Math.ceil(numNav)) {
                    return;
                } else {

                    currentPosNavItem++;
                    navListRepair.style.cssText = `transform: translateX(-${offsetNav*currentPosNavItem}px);`;
                }
            }
            if (target.closest('#nav-arrow-repair-left_base')) {
                if (currentPosNavItem === 0) {
                    return;
                } else {
                    currentPosNavItem--;
                    navListRepair.style.cssText = `transform: translateX(-${offsetNav*currentPosNavItem}px);`;
                }
            }

        });
    // }

    let currentSlider,
        currentSlides,
        currentSlideIndex,
        slidesLength;

    const initSlider = (sliderIndex) => {
        navItems.forEach((item, index) => {
            if (index === sliderIndex) {
                item.classList.add('active');
            } else if (item.matches('.active')) {
                item.classList.remove('active');
            }
        });

        repairSliders.forEach((slider, i) => {
            if (i === sliderIndex) {
                slider.style.display = "block";
            } else {
                slider.style.display = "none";
            }
        });
        currentSlider = repairSliders[sliderIndex];
        // console.log(repairSliders[sliderIndex]); 
        currentSlides = currentSlider.querySelectorAll('.repair-types-slider__slide');
        // console.log('currentSlides: ', currentSlides);
        slidesLength = currentSlides.length;
        // console.log('slidesLength: ', slidesLength);
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

    navItems.forEach((tab, i) => {
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
    repairTypesSliderWrap.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('#repair-types-arrow_right')) {
            currentSlides[currentSlideIndex].style.display = "none";
            currentSlideIndex++;
            currentSlideIndex = checkBoundaries(currentSlideIndex, slidesLength);
            currentSlide.textContent = currentSlideIndex + 1;
            currentSlides[currentSlideIndex].style.display = "block";

        }
        if (target.closest('#repair-types-arrow_left')) {
            currentSlides[currentSlideIndex].style.display = "none";
            currentSlideIndex--;
            currentSlideIndex = checkBoundaries(currentSlideIndex, slidesLength);
            currentSlide.textContent = currentSlideIndex + 1;
            currentSlides[currentSlideIndex].style.display = "block";
        }
    });
};
export default sliderTypesRepair;