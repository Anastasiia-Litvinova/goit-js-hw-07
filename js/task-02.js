// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. 
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listItemEl = document.querySelector('#ingredients');
const pushItems = range => {
    const createItem = range => range.map(item => {
        const listItemEl = document.createElement('li');
        listItemEl.textContent = item;

        return listItemEl;
    });
    listItemEl.append(...createItem(range));
}

pushItems(ingredients);
