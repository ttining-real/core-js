
import { TodoItem } from "../TodoItem/TodoItem.js";


// To do List Template
const TodoTemplate = document.createElement('template');

TodoTemplate.innerHTML = /* html */ `
  <style>@import url('./components/TodoList/TodoList.css');</style>
  <div class="container kanit-semibold">
    <h1>To Do List <img src="../assets/checklist.png" alt="체크리스트" /></h1>
    <ul class="todo"></ul>
    <button type="button" class="add-item">➕</button>
  </div>
`

// To do List Class
export class TodoList extends HTMLElement {
  
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    // this.shadowRoot // innerHTML로 바로 안 넣고 template 만들어서 넣을거임~
    this.shadowRoot.appendChild(TodoTemplate.content.cloneNode(true));


    this.container = this.shadowRoot.querySelector('.container');
    this.todo = this.container.querySelector('.todo');
    this.addButton = this.container.querySelector('.add-item');


  }

  connectedCallback() {

    const tl = gsap.timeline({
      defaults:{
        opacity:0,
      }
    });

    tl.from(this.container.children[0],{delay:0.5,y:30});
    tl.from(this.container.children[1],{height:0,clearProps:'all'});
    tl.from(this.container.children[2],{marginTop:40});

    // 이벤트 바인딩
    this.addButton.addEventListener('click', () => this.addTodoItem());

    if(localStorage.getItem('todo')){
      const data = JSON.parse(localStorage.getItem('todo'));
      data.forEach(({id,value,checked})=>{
        const todoItem = new TodoItem(id,value,checked);
        this.todo.appendChild(todoItem);
      })
    }
    
  }


  addTodoItem() {
    
    // class 생성자 함수           인자를 TodoItem 으로 넣어줌
    const todoItem = new TodoItem(Date.now(), '', false);
    this.todo.appendChild(todoItem);
  }
}