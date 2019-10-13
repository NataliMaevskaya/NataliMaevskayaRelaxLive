const phone = () => {

    const contactArrow = document.querySelector('.header-contacts__arrow');
    const imgArrow = contactArrow.querySelector('img');
    const headerContacts = document.querySelector('.header-contacts');
    const headerContactsAccord = document.querySelector('.header-contacts__phone-number-accord');
    const accordA = headerContactsAccord.querySelector('.header-contacts__phone-number');

    headerContacts.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('.header-contacts__arrow') || target.matches('.header-contacts__arrow')) {
            if (accordA.style.opacity === '') {
                headerContactsAccord.style.cssText = `top: 30px !important;`;
                accordA.style.cssText = `opacity: 100 !important;`;
                imgArrow.style.cssText = `-webkit-transform: rotate(180deg) !important;
                                        -moz-transform: rotate(180deg) !important;
                                        -o-transform: rotate(180deg) !important;
                                        -ms-transform: rotate(180deg) !important;
                                        transform: rotate(180deg) !important;`;
            } else {
                accordA.removeAttribute('style');
                imgArrow.removeAttribute('style');
                headerContactsAccord.removeAttribute('style');

            }

        }
    });

};
export default phone;