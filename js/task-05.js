const elems = {
    input: document.querySelector('#name-input'),
    name: document.querySelector('#name-output'),
};

const onEnterInput = event => {
    elems.name.textContent =
        event.currentTarget.value.trim() !== ''
      ? event.currentTarget.value : 'незнакомец';
};

elems.input.addEventListener('input', onEnterInput);