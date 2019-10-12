const portfolioSlider = () => {
    const arrowRight = document.querySelector('#portfolio-arrow_right'),
        arrowLeft = document.querySelector('#portfolio-arrow_left'),
        portfolio = document.querySelector('.portfolio'),
        arrowMobileLeft = document.querySelector('#portfolio-arrow-mobile_left'),
        arrowMobileRight = document.querySelector('#portfolio-arrow-mobile_right'),
        popupPortfolioLeft = document.querySelector('#popup_portfolio_left'),
        popupPortfolioRight = document.querySelector('#popup_portfolio_right'),
        

        portfolioSlider = document.querySelector('.portfolio-slider'),
        portfolioSliderFrameTablet = portfolioSlider.querySelectorAll('.portfolio-slider__slide-frame'),
        sliderMobile = document.querySelector('.portfolio-slider-mobile'),
        portfolioSliderFrameMobile = sliderMobile.querySelectorAll('.portfolio-slider__slide-frame'),

        popupPortfolioSliderSlides = document.querySelectorAll('.popup-portfolio-slider__slide'),
        popupPortfolio = document.querySelector('.popup-portfolio'),
        popupPortfolioSlider = document.querySelector('.popup-portfolio-slider'),
        popupDialogPortfolio = document.querySelector('.popup-dialog-portfolio'),
        popupPortfolioText = document.querySelectorAll('.popup-portfolio-text'),        

        portfolioCounter = document.querySelector('#portfolio-counter'),
        total = portfolioCounter.querySelector('.slider-counter-content__total'),
        current = portfolioCounter.querySelector('.slider-counter-content__current'),

        popupPortfolioCounter = document.querySelector('#popup-portfolio-counter'),
        popupTotal = popupPortfolioCounter.querySelector('.slider-counter-content__total'),
        popupCurrent = popupPortfolioCounter.querySelector('.slider-counter-content__current');


    popupTotal.textContent = sliderMobile.children.length;
    let currentSlide = 0;
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
    const checkBoundaries = (currentSlide, length) => {
        if (currentSlide >= length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = length - 1;
        }
        return currentSlide;
    };
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