const elems = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}

elems.text.style.fontSize = elems.input.value + 'px';

const modifySize = event => {
    elems.text.style.fontSize = event.currentTarget.value + 'px';
}

elems.input.addEventListener('input', modifySize);