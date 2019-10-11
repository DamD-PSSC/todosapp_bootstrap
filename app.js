const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

//Func generate HTML template with new item.
const todoTemplate = todo => {
  const htmlTemplate = `
    <li class="list-group-item d-flex justify-content-between align-items-center pl-4">
      <span>${todo}</span>
      <i class="delete far fa-minus-square"></i>
    </li>
  `;
  list.innerHTML += htmlTemplate;
};

//Event on submit todo.
addForm.addEventListener('submit', ev => {
  ev.preventDefault();
  const todo = addForm.add.value.trim(); //Pulled value from input with trim function.
  if (todo.length) {
    todoTemplate(todo);
    addForm.reset();
  }
});

//Deleting todos.
list.addEventListener('click', ev => {
  if (ev.target.classList.contains('delete')) {
    ev.target.parentElement.remove();
  }
});

//Filter Todos  //It returns only objects with not matching to function variable.
const filterItems = term => {
  Array.from(list.children) //Convert from HTML to Array.
    .filter(todo => !todo.textContent.toLowerCase().includes(term)) //Negation "includes".
    .forEach(todo => todo.classList.add('filtered'));
  //Back to normal class when user delete letter.
  Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));
};

//Event Listener on keyup event.
search.addEventListener('keyup', ev => {
  const term = search.value.trim().toLowerCase();
  filterItems(term);
});

//Stop default submit action on search field.
search.parentElement.addEventListener('submit', ev => {
  ev.preventDefault();
});
