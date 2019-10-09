const schemeTabs = () => {
    const schemeListNav = document.getElementById("scheme-list"),
        schemeNavItems = schemeListNav.querySelectorAll(".scheme-nav__item"),
        schemeSlides = document.querySelectorAll(".scheme-slider__slide"),
        schemeDescriptionBlocks = document.querySelectorAll(".scheme-description-block");

    schemeListNav.addEventListener("click", event => {
        let target = event.target;
        if (target.matches(".scheme-nav__item")) {
            schemeSlides.forEach(slide => {
                slide.style.display = "none";
            });
            schemeNavItems.forEach((elem, i) => {
                if (elem === target) {
                    elem.classList.add("active");
                    schemeSlides[i].style.display = "block";
                    schemeDescriptionBlocks[i].classList.add("visible-content-block");
                } else {
                    elem.classList.remove("active");
                    schemeDescriptionBlocks[i].classList.remove("visible-content-block");
                }
            });
        }
    });
};

export default schemeTabs;