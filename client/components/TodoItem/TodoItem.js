const TodoItemTemplate = document.createElement('template');

TodoItemTemplate.innerHTML = /* html */ `
  <style>@import url('./components/TodoItem/TodoItem.css');</style>
  <li class="item">
    <input type="checkbox" />
    <div class="content">
      <input type="text" />
    </div>
    <button type="button" class="delete-item">x</button>
  </li>
`;

export class TodoItem extends HTMLElement {
  constructor(id, value, checked) {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(TodoItemTemplate.content.cloneNode(true));

    // this, input.value, checkbox 대상 찾기
    this.item = this.shadowRoot.querySelector('.item');
    this.checkbox = this.item.querySelector('input[type="checkbox"]');
    this.contentInput = this.item.querySelector('input[type="text"]');
    this.deleteButton = this.item.querySelector('.delete-item');


    this.id = id;
    this.contentInput.value = value;
    this.checkbox.checked = checked;
    // console.log(id, value, checked);

    if (checked) {
      this.contentInput.classList.add('done');
    }
  }

  connectedCallback() {
    this.contentInput.value = 'TASK' + this.id;

    
    this.deleteButton.addEventListener('click', () => this.deleteItem());
    this.checkbox.addEventListener('click', () => this.toggleChecked());

    // TodoService.AddTodoItem(this.id, this.contentInput.value, this.contentInput.checked)
  }

  deleteItem() {
    // console.log(this);
    this.remove();
  }

  toggleChecked() {
    if (this.checkbox.checked) {
      this.contentInput.classList.add('done');
    } else {
      this.contentInput.classList.remove('done');
    }
  }
}
