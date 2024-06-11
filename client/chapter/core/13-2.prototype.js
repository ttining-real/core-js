/* ----------------------------- */
/* Classes 기본 문법              */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.


// 단계별로 학습을 진행함~
// 1. 객체의 상속
// 2. 생성자 함수의 상속
// 3. 생성자 함수 모던 방식 Class

class Animal {
  // 클래스 filled(?) 값이 변경되지 않는다면 이렇게도 사용이 된다.
  legs = 4
  tail = true

  constructor(name){
    this.name = name,
    this.stomach = []
  }

  get eat(){
    return this.stomach
  }

  set eat(food){
    this.stomach.push(food)
  }

}

const a = new Animal('포동이');

// Animal에서부터 확장을 시켜서 Tiger라는 클래스를 만든다.
class Tiger extends Animal {

  static options = {
    version: '1.0.0',
    company: '',
    ceo: ''
  }

  constructor(name){ // constructor를 생략하는 것도 가능하다. (가져올 필요가 없다면)
    super(name) // 부모의 능력을 쓰고 싶다면 super를 call 해야한다. (부모의 constructor를 호출)
    this.pattern = '호랑이무늬'
  }

  static bark(sound){
    return sound + ''
  }

  hunt(target){
    return `${target}에게 조용히 접근한다.`
  }
}

const 호랑이 = new Tiger('호돌이');


// Model (데이터)
// View (랜더링)
// Control (이벤트)

class Todo {

  target = null;
  registerButton = null;
  list = null;
  
  constructor({input,button,renderPlace}){
    
    this.target = document.querySelector(input);
    this.registerButton = document.querySelector(button);
    this.list = document.querySelector(renderPlace)
    this.todoListArray = [];
    this.data;

    this.registerEvent()

    this.target.addEventListener('input',()=>{
      this.data = this.currentInputTodoData;
    })
  }

  get currentInputTodoData(){
    return this.target.value;
  }

  set currentInputTodoData(value){
    this.target.value = value;
  }

  get todoList(){
    return this.todoListArray
  }

  set todoList(value){
    this.todoList.push(value);
  }

  #createList(){
    let template = `
      <li>${this.data}</li>
    `
    return template;
  }

  render(){ 
    this.list.insertAdjacentHTML('beforeend',this.#createList());
    this.target.value = ''
  }
  
  addTodoData(){
    this.todoList = this.data;
  }

  registerEvent(){
    this.registerButton.addEventListener('click',()=>{
      this.addTodoData()
      this.render()
    });
  }

}




const button = new Todo({
  input:'#todo',
  button:'.register',
  renderPlace:'.todoList'
})



const button2 = new Todo({
  input:'#todo2',
  button:'.register2',
  renderPlace:'.todoList2'
})