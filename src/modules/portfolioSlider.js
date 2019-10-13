const portfolioSlider = () => {

    const portfolioArrowRight = document.querySelector('#portfolio-arrow_right'),
        portfolioArrowLeft = document.querySelector('#portfolio-arrow_left'),
        portfolio = document.querySelector('.portfolio'),
        portfolioSliderWrap = portfolio.querySelector('.portfolio-slider-wrap'),

        portfolioSlider = document.querySelector('.portfolio-slider'),
        portfolioSliderFrameTablet = portfolioSlider.querySelectorAll('.portfolio-slider__slide-frame'),
        portfolioSliderMobile = document.querySelector('.portfolio-slider-mobile'),
        portfolioSliderFrameMobile = portfolioSliderMobile.querySelectorAll('.portfolio-slider__slide-frame'),
        popupPortfolioSliderSlides = document.querySelectorAll('.popup-portfolio-slider__slide'),
        popupPortfolio = document.querySelector('.popup-portfolio'),
        popupPortfolioSlider = document.querySelector('.popup-portfolio-slider'),
        popupDialogPortfolio = document.querySelector('.popup-dialog-portfolio'),
        popupPortfolioText = document.querySelectorAll('.popup-portfolio-text'),

        popupPortfolioLeft = document.querySelector('#popup_portfolio_left'),
        popupPortfolioRight = document.querySelector('#popup_portfolio_right'),

        portfolioArrowMobileLeft = document.querySelector('#portfolio-arrow-mobile_left'),
        portfolioArrowMobileRight = document.querySelector('#portfolio-arrow-mobile_right'),

        portfolioCounter = document.querySelector('#portfolio-counter'),
        total = portfolioCounter.querySelector('.slider-counter-content__total'),
        current = portfolioCounter.querySelector('.slider-counter-content__current'),

        popupPortfolioCounter = document.querySelector('#popup-portfolio-counter'),
        popupTotal = popupPortfolioCounter.querySelector('.slider-counter-content__total'),
        popupCurrent = popupPortfolioCounter.querySelector('.slider-counter-content__current');

    let currentIndex = 0,
        lastIndex,
        wrapperSlider,
        slider,
        slides,
        slideMinWidth;
    const checkBoundaries = (currentSlide, length) => {
        if (currentSlide >= length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = length - 1;
        }
        return currentSlide;
    };

    portfolio.addEventListener('click', event => {
        let target = event.target;
        if (target.closest('#portfolio-arrow_right')) {
            currentIndex++;
            wrapperSlider.style.cssText += `transform: translateX(-${slideMinWidth * currentIndex}px);`;
            if (currentIndex === lastIndex - 1) {
                portfolioArrowRight.style.display = 'none';
            }
            if (currentIndex === 1) { // > 0
                portfolioArrowLeft.style.display = 'flex';
            }
        }
        if (target.closest('#portfolio-arrow_left')) {
            currentIndex--;
            wrapperSlider.style.cssText += `transform: translateX(-${slideMinWidth * currentIndex}px);`;

            if (currentIndex === 0) {
                portfolioArrowLeft.style.display = 'none';
            }
            if (currentIndex === lastIndex - 2) {
                portfolioArrowRight.style.display = 'flex';
            }
        }
        if (target.closest('#portfolio-arrow-mobile_right')) {
            wrapperSlider.children[currentIndex].style.display = 'none';
            currentIndex++;
            if (currentIndex !== lastIndex) {
                wrapperSlider.children[currentIndex].style.display = 'block';

            } else {
                currentIndex = lastIndex - 1;
            }
            wrapperSlider.style.cssText = `transform: translateY(-${slideMinWidth * currentIndex}px);`;
            current.textContent = currentIndex + 1;
            if (currentIndex === lastIndex - 1) {
                portfolioArrowMobileRight.style.display = 'none';
            }
            if (currentIndex === 1) { // > 0
                portfolioArrowMobileLeft.style.display = 'flex';
            }
        }
        if (target.closest('#portfolio-arrow-mobile_left')) {
            wrapperSlider.children[currentIndex].style.display = 'none';
            currentIndex--;
            if (currentIndex !== -1) {
                wrapperSlider.children[currentIndex].style.display = 'block';
            } else {
                currentIndex = 0;
            }

            wrapperSlider.style.cssText = `transform: translateY(-${slideMinWidth * currentIndex}px);`;
            current.textContent = currentIndex + 1;

            if (currentIndex === 0) {
                portfolioArrowMobileLeft.style.display = 'none';
            }
            if (currentIndex === lastIndex - 2) {
                portfolioArrowMobileRight.style.display = 'flex';
            }

        }

    });




    const checkResponse = () => {
        const widthWindow = document.documentElement.clientWidth;
        if (widthWindow <= 575) {
            slider = portfolioSliderMobile;
            lastIndex = portfolioSliderFrameMobile.length;
            currentIndex = 0;
            total.textContent = lastIndex;
            current.textContent = 1;
            portfolioArrowMobileLeft.style.display = 'none';
            portfolioArrowMobileLeft.style.zIndex = 1000;
            portfolioArrowMobileRight.style.zIndex = 1000;

        } else {
            slider = portfolioSlider;
        }

        wrapperSlider = slider.querySelector('.wrapper-slider-for-portfolio');
        if (!wrapperSlider) {
            wrapperSlider = document.createElement('div');
            wrapperSlider.classList.add('wrapper-slider-for-portfolio');

            wrapperSlider.style.cssText = `display: flex !important;
                                    position: relative !important;
                                    width: 100% !important;
                                    height:100% !important;
                                    transition:transform 0.5s !important;`;

            slides = slider.children;
            const length = slides.length;

            for (let index = 0; index < length; index++) {
                wrapperSlider.appendChild(slides[0]);
            }

            slider.appendChild(wrapperSlider);
        }

        if (widthWindow >= 1025) {
            slideMinWidth = wrapperSlider.clientWidth / 3;
            for (let i = 0; i < wrapperSlider.children.length; i++) {
                wrapperSlider.children[i].style.cssText = `min-width: ${slideMinWidth}px;`;
            }
            lastIndex = wrapperSlider.children.length - 2;
        } else if (widthWindow < 1025 && widthWindow > 900) {
            slideMinWidth = wrapperSlider.clientWidth / 2;
            for (let i = 0; i < wrapperSlider.children.length; i++) {
                wrapperSlider.children[i].style.cssText = `min-width: ${slideMinWidth}px;`;
            }
            lastIndex = wrapperSlider.children.length - 1;
        } else if (widthWindow <= 900 && widthWindow > 575) {
            slideMinWidth = wrapperSlider.clientWidth;
            for (let i = 0; i < wrapperSlider.children.length; i++) {
                wrapperSlider.children[i].style.cssText = `min-width: ${slideMinWidth}px;`;
            }
            lastIndex = wrapperSlider.children.length;
        }
        currentIndex = 0;
    };
    checkResponse();
    window.addEventListener("resize", checkResponse);


    let currentSlide = 0;
    popupTotal.textContent = portfolioSliderFrameMobile.length;
    const init = (i) => {
        popupPortfolioSliderSlides.forEach((elem) => {
            elem.style.display = 'none';
        });
        popupPortfolio.style.visibility = 'visible';
        popupDialogPortfolio.style.visibility = 'visible';
        popupPortfolioSlider.style.visibility = 'visible';
        popupPortfolioSliderSlides[i].style.display = 'block';
        popupPortfolioText[i].style.display = 'block';
        currentSlide = i;
        popupCurrent.textContent = currentSlide + 1;
    };
    portfolioSliderFrameMobile.forEach((elem, i) => {
        elem.addEventListener('click', () => {
            init(i);
        });
    });
    portfolioSliderFrameTablet.forEach((elem, i) => {
        elem.addEventListener('click', () => {
            init(i);
        });
    });

    popupPortfolio.addEventListener('click', (event) => {
        let target = event.target;
        if (target.matches('.close') || !target.closest('.popup-dialog-portfolio')) {
            popupPortfolio.style.visibility = 'hidden';
            popupDialogPortfolio.style.visibility = 'hidden';
            popupPortfolioSlider.style.visibility = 'hidden';
        }
        if (target.closest('#popup_portfolio_left')) {
            popupPortfolioSliderSlides.forEach((elem) => {
                elem.style.display = 'none';
            });
            popupPortfolioText.forEach((elem) => {
                elem.style.display = 'none';
            });
            currentSlide--;
            currentSlide = checkBoundaries(currentSlide, popupPortfolioSliderSlides.length);
            popupPortfolioSliderSlides[currentSlide].style.display = 'block';
            popupPortfolioText[currentSlide].style.display = 'block';
            popupPortfolioRight.style.display = 'block';

            popupCurrent.textContent = currentSlide + 1;
        }
        if (target.closest('#popup_portfolio_right')) {
            popupPortfolioSliderSlides.forEach((elem) => {
                elem.style.display = 'none';
            });
            popupPortfolioText.forEach((elem) => {
                elem.style.display = 'none';
            });
            currentSlide++;
            currentSlide = checkBoundaries(currentSlide, popupPortfolioSliderSlides.length);
            popupPortfolioSliderSlides[currentSlide].style.display = 'block';
            popupPortfolioText[currentSlide].style.display = 'block';
            popupPortfolioLeft.style.display = 'block';
            popupCurrent.textContent = currentSlide + 1;
        }

    });

};

export default portfolioSlider;