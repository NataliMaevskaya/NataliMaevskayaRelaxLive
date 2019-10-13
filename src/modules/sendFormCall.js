import clearFieldsForm from "./clearFieldsForm";
const sendFormCall = (idForm) => {
    const form = document.getElementById(idForm);
    const popupThank = document.querySelector('.popup-thank');

    //событие submit на форме
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const elementsForm = [...form.elements].filter(item => {

            return item.tagName.toLowerCase() !== 'button' && item.type !== 'button';
        });
        // стоит ли галочка (обязательно)
        const isEmpty = (elementsForm) => {
            let numOfEmpty = 0;
            elementsForm.forEach((elem, i) => {
                if (elem.matches('.checkbox__input')) {
                    if (!(elem.checked)) {
                        numOfEmpty++;
                    }
                } else if (elem.value === '') {
                    numOfEmpty++;
                }
            });

            if (numOfEmpty) {
                return true;
            } else {
                return false;
            }
        };

        if (isEmpty(elementsForm)) {
            return;
        } else {
            const formData = new FormData(form);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });

            postData(body)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('status network is not 200!');
                    }
                    popupThank.classList.add('visible__item');
                })
                .catch((err) => {
                    console.error(err);
                })
                .then(() => clearFieldsForm(form));
        }
    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            cache: 'default',
            body: JSON.stringify(body)
        });
    };

    popupThank.addEventListener('click', (event) => {
        let target = event.target;

        if (popupThank.matches('.visible__item') &&
            (target.closest('.close-thank') || !target.closest('.popup-thank-bg'))) {
            popupThank.classList.remove('visible__item');
        }
    });
};

export default sendFormCall;