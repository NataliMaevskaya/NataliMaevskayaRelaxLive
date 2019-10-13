const popupRepairTypes = () => {
    const body = document.querySelector('body'),
        popupRepairTypes = document.querySelector('.popup-repair-types'),
        popupDialogMenu = document.querySelector('.popup-dialog-menu');

    body.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('.link-list-menu') || target.closest('.link-list-repair')) {
            if (popupDialogMenu.getAttribute('style')) {
                popupDialogMenu.removeAttribute('style');
            }
            popupRepairTypes.style.cssText = `visibility: visible !important`;
        }
        if (popupRepairTypes.getAttribute('style') && target.closest('.close')) {
            popupRepairTypes.removeAttribute('style');
        }
    });
};

export default popupRepairTypes;