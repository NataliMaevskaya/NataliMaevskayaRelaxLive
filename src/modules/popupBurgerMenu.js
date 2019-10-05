const popupBurgerMenu = () => {
    const body = document.querySelector('body'),
        popupDialogMenu = document.querySelector('.popup-dialog-menu');

        body.addEventListener('click', (event) => {
            let target = event.target;
            if (target.closest('.menu__icon')) {
                popupDialogMenu.style.cssText = `transform: translate3d(0,0,0) !important;
                                                -webkit-transform: translate3d(0,0,0) !important;`;
                if (document.documentElement.clientWidth < 576) {
                    popupDialogMenu.style.cssText += `width: 105%;`;
                } 
            } else if (popupDialogMenu.getAttribute('style')) {
                if (target.closest('.close-menu') || 
                   (target.closest('body') && !target.closest('.popup-dialog-menu')) ) {  
                       popupDialogMenu.removeAttribute('style');
                }
            }
            
        });
};  
export default popupBurgerMenu;