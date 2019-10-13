import clearFieldsForm from "./clearFieldsForm";

const popupConsult = () => {
    const body = document.querySelector('body'),
        popupPrivacy = document.querySelector('.popup-privacy'),
        popupConsult = document.querySelector('.popup-consultation'),
        form = popupConsult.querySelector('form');

    body.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('button_wide')) {
            popupConsult.style.cssText = `visibility: visible !important`;
        } else if (!popupPrivacy.getAttribute('style')) {
            if (target.closest('.close-consultation') || !target.closest('.feedback-wrap')) {
                if (popupConsult.getAttribute('style')) {
                    clearFieldsForm(form);
                    popupConsult.removeAttribute('style');

                }
            }
        }
    });
};

export default popupConsult;