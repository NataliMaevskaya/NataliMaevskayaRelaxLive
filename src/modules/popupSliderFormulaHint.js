import isOutOfBrowser from './isOutOfBrowser';

const popupSliderFormulaHint = () => {
    const body = document.querySelector('body');
    body.addEventListener('mouseover', event => {
        let target = event.target;
        if (target.closest('.formula-item__icon')) {
            const parentNode = target.parentNode;
            if (parentNode.matches('.formula-item__icon')) {
                const formulaItemPopup = parentNode.querySelector('.formula-item-popup'),
                    formulaItemIconInner = parentNode.querySelector('.formula-item__icon-inner'),
                    formulaText = formulaItemPopup.querySelector('.formula-text');
                formulaItemPopup.style.cssText = `visibility: visible;
                                                  opacity: 1;`;
                formulaItemIconInner.style.cssText = `opacity: 1;`;
                if (isOutOfBrowser(formulaItemPopup)) {
                    formulaItemPopup.style.cssText += `transform: rotateX(180deg);
                                                       top: 90px;`;
                    formulaItemPopup.appendChild(formulaText);
                    formulaText.style.cssText = `transform: rotateX(180deg);`;
                    formulaItemPopup.parentNode.parentNode.parentNode.style.zIndex = 1000;
                }
            }
        }
    });
    body.addEventListener('mouseout', event => {
        let target = event.target;

        if (target.closest('.formula-item__icon')) {
            if (target.closest('.row')) {
                const parentNode = target.parentNode;
                if (parentNode.matches('.formula-item__icon')) {
                    const formulaItemPopup = parentNode.querySelector('.formula-item-popup'),
                        formulaItemIconInner = parentNode.querySelector('.formula-item__icon-inner'),
                        formulaText = formulaItemPopup.querySelector('.formula-text');
                    if (formulaItemPopup.getAttribute('style') &&
                        formulaItemIconInner.getAttribute('style')) {

                        formulaItemPopup.removeAttribute('style');
                        formulaItemIconInner.removeAttribute('style');
                        formulaText.removeAttribute('style');
                        formulaItemPopup.parentNode.parentNode.parentNode.removeAttribute('style');
                    }
                }
            }
        }
    });
    const formulaSlider = document.querySelector('.formula-slider'),
        formulaSliderWrap = document.querySelector('.formula-slider-wrap'),
        sliderArrow = formulaSliderWrap.querySelectorAll('.slider-arrow');

    let formulaSliderItems = formulaSlider.querySelectorAll('.formula-item');

    const activeSlide = (index) => {
        formulaSliderItems.forEach((formulaItem, i) => {
            formulaItem.classList.remove('active-item');
        });

        const formulaItemPopupActive = formulaSliderItems[index].children[0].children[0];

        formulaItemPopupActive.style.visibility = 'visible';
        formulaItemPopupActive.style.opacity = 1;

        formulaSliderItems[index].classList.add('active-item');
    };
    const hiddenSlide = (index) => {
        const formulaItemPopupHidden = formulaSliderItems[index].children[0].children[0];
        formulaItemPopupHidden.style.visibility = 'hidden';
        formulaSliderItems[index].classList.remove('active-item');
    };

    const windowWidth = document.documentElement.clientWidth;
    if (windowWidth < 1025) {
        formulaSliderItems = formulaSlider.querySelectorAll('.formula-item');
        formulaSliderWrap.style.display = 'flex';
        formulaSliderWrap.style.height = '600px';
        formulaSliderWrap.style.justifyContent = 'center';
        formulaSlider.style.overflow = 'hidden';
        sliderArrow.forEach((arrow) => {
            arrow.style.top = '45%';
        });
        formulaSliderItems.forEach(elem => {
            elem.style.height = '250px';
            elem.style.width = `${formulaSlider.clientWidth/3}px`;
            elem.style.opacity = '1';
        });

        formulaSliderItems[0].before(formulaSliderItems[formulaSliderItems.length - 1]);
        activeSlide(0);
    }
    body.addEventListener('click', event => {
        formulaSliderItems = formulaSlider.querySelectorAll('.formula-item');
        let target = event.target;

        if (target.closest('#formula-arrow_right')) {
            formulaSliderItems[formulaSliderItems.length - 1].after(formulaSliderItems[0]);
            activeSlide(2);
            hiddenSlide(1);
        }
        if (target.closest('#formula-arrow_left')) {
            formulaSliderItems[0].before(formulaSliderItems[formulaSliderItems.length - 1]);
            activeSlide(0);
            hiddenSlide(1);
        }
    });
};

export default popupSliderFormulaHint;