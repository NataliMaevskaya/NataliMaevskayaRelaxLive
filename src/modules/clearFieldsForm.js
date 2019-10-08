const clearFieldsForm = (form) => {
    for (const elem of form.elements) {
        if (elem.tagName.toLowerCase() !== 'button' && elem.type !== 'button') {
            elem.value = '';
            if (elem.matches('.checkbox__input')) {
                        elem.checked = false;
                    }
        }
    }
};

export default clearFieldsForm;