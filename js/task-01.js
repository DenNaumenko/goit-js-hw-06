const list = document.getElementById('categories');
const categoriesArray = Array.from(list.children);

console.log('Number of categories:', categoriesArray.length);

categoriesArray.forEach(element => {
    const categoryName = element.firstElementChild;
    const categoryElementsList = element.lastElementChild;

    console.log('Category:', categoryName.textContent);
    console.log('Elements:', categoryElementsList.children.length);
});


