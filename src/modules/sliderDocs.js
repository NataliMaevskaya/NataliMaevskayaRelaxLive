const sliderDocs = () => {
    const slide = document.querySelectorAll(".transparency-item"),
        slider = document.querySelector(".transparency-slider"),
        sliderWrap = document.querySelector(".transparency-slider-wrap");

    slide.forEach((checkSlide, i) => {
        checkSlide.addEventListener("mouseover", event => {
            let target = event.target;
            if (target.closest(".transparency-item")) {
                if (target.matches(".transparency-item__img")) {
                    const itemHover = target.querySelector(".item-hover");
                    itemHover.classList.add("visible__item");
                    itemHover.classList.add("visible-opacity");
                }
            }
        });
        checkSlide.addEventListener("mouseout", event => {
            let target = event.target;
            if (target.closest(".transparency-item")) {
                if (target.matches(".transparency-item__img")) {
                    const itemHover = target.querySelector(".item-hover");
                    if (itemHover.matches(".visible__item, .visible-opacity")) {
                        itemHover.classList.remove("visible__item");
                        itemHover.classList.remove("visible-opacity");
                    }
                }
            }
        });
        checkSlide.addEventListener("click", event => {
            let target = event.target;
            if (target.closest(".transparency-item__img")) {
                const itemHover = target.querySelector(".item-hover");
                if (itemHover.matches(".visible__item, .visible-opacity")) {
                    initPopup(i);
                    //слайдер
                }
            }
        });
    });

    const popupTransparencySliderWrap = document.querySelector('.popup-transparency-slider-wrap'),
        popupTransparencySlider = popupTransparencySliderWrap.querySelector('.popup-transparency-slider'),
        popupSlide = popupTransparencySlider.querySelectorAll('.popup-transparency-slider__slide'),
        sliderContentCurrent = popupTransparencySliderWrap.querySelector('.slider-counter-content__current'),
        sliderCounterTotal = popupTransparencySliderWrap.querySelector('.slider-counter-content__total');

    let currentPopupSlide;
    const popupSlideLength = popupSlide.length;
    const checkBoundaries = (currentSlide, length) => {
        if (currentSlide >= length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = length - 1;
        }
        return currentSlide;
    };
    const popupTransparency = document.querySelector(".popup-transparency");
    const initPopup = (indexSlide) => {

        currentPopupSlide = indexSlide;
        sliderContentCurrent.textContent = indexSlide + 1;
        sliderCounterTotal.textContent = popupSlideLength;
        popupSlide.forEach((slide, i) => {
            if (i === currentPopupSlide) {
                slide.style.display = 'flex';
            } else {
                slide.style.display = 'none';
            }
        });
        popupTransparency.classList.add("visible__item");
    };

    popupTransparency.addEventListener("click", () => {
        let target = event.target;
        if (target.closest('.popup-arrow_transparency_right')) {
            popupSlide[currentPopupSlide].style.display = "none";
            currentPopupSlide++;
            currentPopupSlide = checkBoundaries(currentPopupSlide, popupSlideLength);
            sliderContentCurrent.textContent = currentPopupSlide + 1;
            popupSlide[currentPopupSlide].style.display = "flex";

        }
        if (target.closest('.popup-arrow_transparency_left')) {
            popupSlide[currentPopupSlide].style.display = "none";
            currentPopupSlide--;
            currentPopupSlide = checkBoundaries(currentPopupSlide, popupSlideLength);
            sliderContentCurrent.textContent = currentPopupSlide + 1;
            popupSlide[currentPopupSlide].style.display = "flex";
        }
        if (
            target.closest(".close") ||
            !target.closest(".popup-dialog-transparency")
        ) {
            popupTransparency.classList.remove("visible__item");
        }
    });

    const checkResponse = () => {
        const widthWindow = document.documentElement.clientWidth;
        if (widthWindow < 1091) {
            slider.style.display = "flex";
            slider.style.flexWrap = "nowrap";
            slide.forEach((elem, i) => {
                elem.style.display = "none";
                if (i === 0) {
                    elem.style.display = "flex";
                }
            });
        } else if (slider.getAttribute("style")) {
            slider.removeAttribute("style");
            slide.forEach((elem, i) => {
                elem.removeAttribute("style");
            });
        }
    };
    checkResponse();
    window.addEventListener("resize", checkResponse);

    let currentSlide = 0;
    const slideLength = slide.length;

    sliderWrap.addEventListener("click", event => {
        event.preventDefault();
        let target = event.target;

        if (!target.closest(".slider-arrow")) {
            return;
        }

        if (target.closest("#transparency-arrow_right")) {
            slide[currentSlide].style.display = "none";
            currentSlide++;
            currentSlide = checkBoundaries(currentSlide, slideLength);
            slide[currentSlide].style.display = "flex";
        } else if (target.closest("#transparency-arrow_left")) {
            slide[currentSlide].style.display = "none";
            currentSlide--;
            currentSlide = checkBoundaries(currentSlide, slideLength);
            slide[currentSlide].style.display = "flex";
        }
    });

};
export default sliderDocs;