const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

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
