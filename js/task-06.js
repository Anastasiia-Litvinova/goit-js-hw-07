const elems = {
    input: document.querySelector('#validation-input'),
}

const lengthValue = elems.input.dataset.length;

const onValidationValue = event => {
    elems.input.classList.add('invalid');
    event.target.value.length === +lengthValue && event.target.value.trim() !== ''
        ? elems.input.classList.replace('invalid', 'valid') : elems.input.classList.replace('valid', 'invalid');
};

elems.input.addEventListener('blur', onValidationValue);