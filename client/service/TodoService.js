
// 생성자로 쓰지 않을 거임 => static 메서드 사용
class TodoService {

  static state = [];

  static initializeState(state) {
    this.state = state;
  }

  static AddTodoItem(id, value, checked) {
    this.state.push({id, value, checked});
    console.log(...this.state);
  }

  static DeleteTodoItem(id) {
    
  }

}