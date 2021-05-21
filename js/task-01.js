const listItemEl = document.querySelectorAll('.item');
console.log(`В списке ${listItemEl.length} категории.`);

const countListItemEl = () => {
    listItemEl.forEach(item => {
        console.log(`Категория:'${item.querySelector('h2').textContent},
Количество элементов: ${item.querySelectorAll('ul li').length}`)
    });

}
    
countListItemEl();