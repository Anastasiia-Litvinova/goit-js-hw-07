let counterValue = 0;

const elems = {
    incrementBtn: document.querySelector('[data-action="increment"]'),
    
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    
    value: document.querySelector('#value'),
}

const upgradeValueEl = () => elems.value.textContent = counterValue;
const increment = () => counterValue++;
const decrement = () => counterValue--;

elems.incrementBtn.addEventListener('click', () => {
    increment();
    upgradeValueEl();
});

elems.decrementBtn.addEventListener('click', () => {
    decrement();
    upgradeValueEl();
});





