import isOutOfBrowser from './isOutOfBrowser';

const popupSliderProblems = () => {
    const problemItems = document.querySelectorAll('.problems-item__icon');
    problemItems.forEach(elem => {
        elem.addEventListener('mouseenter', event => {
            let target = event.target;
            if (target.matches('.problems-item__icon')) {
                const problemItemPopup = target.querySelector('.problems-item-popup'),
                    problemItemIconInner = target.querySelector('.problems-item__icon-inner');
                let div;
                if (problemItemPopup.children[0].matches('.problems-item-popup__title')) {

                    div = document.createElement('div');
                    div.style.position = 'absolute';
                    problemItemPopup.appendChild(div);
                    const title1 = problemItemPopup.children[0],
                        descr1 = problemItemPopup.children[1],
                        title2 = problemItemPopup.children[2],
                        descr2 = problemItemPopup.children[3];
                    div.appendChild(title1);
                    div.appendChild(descr1);
                    div.appendChild(title2);
                    div.appendChild(descr2);
                } else {
                    div = problemItemPopup.querySelector('div');
                }
                if (isOutOfBrowser(problemItemPopup)) {
                    div.classList.add('bottom');
                    problemItemPopup.style.cssText = `transform: rotateX(180deg);
                                                       top: 90px;`;
                    div.style.cssText = `transform: rotateX(180deg);`;
                    problemItemPopup.style.cssText += `visibility: visible !important;
                                                        opacity: 1 !important;`;
                    problemItemIconInner.style.cssText = `opacity: 1 !important;`;
                    problemItemPopup.parentNode.parentNode.parentNode.style.zIndex = 1000;
                } else {
                    problemItemPopup.style.cssText = `transform: rotateX(0deg);`;
                    div.style.cssText = `transform: rotateX(0deg);`;
                    problemItemPopup.style.cssText += `visibility: visible !important;
                                                        opacity: 1 !important;`;
                    problemItemIconInner.style.cssText = `opacity: 1 !important;`;
                }
            }
        });
    });
    problemItems.forEach(elem => {
        elem.addEventListener('mouseleave', event => {
            let target = event.target;
            if (target.matches('.problems-item__icon')) {
                const problemItemPopup = target.querySelector('.problems-item-popup'),
                    problemItemIconInner = target.querySelector('.problems-item__icon-inner'),
                    div = problemItemPopup.children[0];
                if (problemItemPopup.getAttribute('style') &&
                    problemItemIconInner.getAttribute('style')) {

                    problemItemPopup.removeAttribute('style');
                    problemItemIconInner.removeAttribute('style');
                    div.classList.remove('bottom');
                    div.removeAttribute('style');
                    problemItemPopup.parentNode.parentNode.parentNode.removeAttribute('style');
                }
            }
        });
    });

    const problemsSlider = document.querySelector('.problems-slider'),
        problemsSliderWrap = document.querySelector('.problems-slider-wrap');
    let sliderIndex = 0,
        problemsSliderSlides = problemsSlider.querySelectorAll('.problems-slider__slide'),
        problemSliderSlidesLen = problemsSliderSlides.length;
    const checkBoundaries = (currentSlide, length) => {
        if (currentSlide >= length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = length - 1;
        }
        return currentSlide;
    };

    const widthWindow = document.documentElement.clientWidth;
    if (widthWindow < 1025) {
        problemsSliderSlides.forEach((slide, i) => {
            if (i === 0) {
                slide.style.display = 'flex';
            } else {
                slide.style.display = 'none';
            }
        });
        problemsSliderWrap.addEventListener('click', event => {
            let target = event.target;
            if (target.closest('#problems-arrow_left')) {
                problemsSliderSlides[sliderIndex].style.display = 'none';
                sliderIndex--;
                sliderIndex = checkBoundaries(sliderIndex, problemSliderSlidesLen);
                problemsSliderSlides[sliderIndex].style.display = 'flex';
                problemsSliderSlides[sliderIndex].classList.add('active-item');

            }
            if (target.closest('#problems-arrow_right')) {
                problemsSliderSlides[sliderIndex].style.display = 'none';
                sliderIndex++;
                sliderIndex = checkBoundaries(sliderIndex, problemSliderSlidesLen);
                problemsSliderSlides[sliderIndex].style.display = 'flex';
                problemsSliderSlides[sliderIndex].classList.add('active-item');

            }
        });
    }
};

export default popupSliderProblems;