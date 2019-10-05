const popupBurgerMenu = () => {
    const menuIcon = document.querySelector('.menu__icon'),
        popupDialogMenu = document.querySelector('.popup-dialog-menu'),
        closeMenu = document.querySelector('.close-menu');
    
        menuIcon.addEventListener('click', () => {            
            popupDialogMenu.style.cssText = `transform: translate3d(0,0,0) !important;
                                            -webkit-transform: translate3d(0,0,0) !important;`;
            if (document.documentElement.clientWidth < 576) {
                popupDialogMenu.style.cssText += `width: 105%;`;
            } 
        });
        closeMenu.addEventListener('click', () => {
            popupDialogMenu.removeAttribute('style');
        });
};  
export default popupBurgerMenu;