const popupPolicy = () => {
    const body = document.querySelector('body'),
        popupPrivacy = document.querySelector('.popup-privacy');

    body.addEventListener('click', (event) => {
        let target = event.target;
        if (target.matches('.link-privacy')) {
            popupPrivacy.style.cssText = `visibility: visible !important`;
        } else if (popupPrivacy.getAttribute('style') && (target.closest('.close') || !target.closest('.popup-dialog-privacy'))) {
            popupPrivacy.removeAttribute('style');
        }
    });
};
export default popupPolicy;