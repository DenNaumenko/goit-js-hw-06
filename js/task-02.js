const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.getElementById('ingredients')
const arrayList = ingredients.map(element => {
  const item = document.createElement('li');

  item.classList.add('item');
  item.textContent = element;

  return item;
});

list.append(...arrayList);