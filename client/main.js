

import { TodoList } from './components/TodoList/TodoList.js'
import { TodoItem } from './components/TodoItem/TodoItem.js'

const app = document.getElementById('app');

const defineElements = () => {
  customElements.define('todo-app', TodoList);
  customElements.define('todo-item', TodoItem);
}

defineElements()

// 생성하고 내보내줘야 한다.

const todoElement = document.createElement('todo-app');

app.append(todoElement);