/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우
// 카테고리 : 동물
// 동물의 종류 : 고양이, 강아지, 호랑이, 사자, 늑대, 여우



// * 객체의 프로토타입 [[Prototype]]  => __proto__

const animal = {
  legs: 4,
  tail: true,
  stomach: [],

  // setter : 값을 받아와야하기 때문에 매개변수 필요
  // setEat(food) {
  //   this.stomach.push(food);
  // },
  // getter : 값을 내보내야하기 때문에 return 필요
  // getEat(){
  //   return this.stomach
  // },
  
  // set, get 메서드에서만 사용 가능
  // 객체의 프로퍼티처럼 사용해야함. animal.eat / animal.eat = '고기'
  // enumerable한 요소가 아니기 때문에 for in에서 조회가 되지 않는다.

  // setter
  set eat(food) {
    this.stomach.push(food);
  },
  
  // getter
  get eat(){
    return this.stomach
  }
}

// animal.setEat('고기')


const tiger = {
  pattern: '호랑이무늬',
  hunt(target){
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  },
  __proto__: animal
}

const 백두산호랑이 = {
  color: 'white',
  name: '백돌이',
  __proto__: tiger
}

// 객체를 계속 객체 리터럴 방식으로 만들어주는 것은 효율적이지 않다.
const 한라산호랑이 = {
  color: 'orange',
  name: '한돌이',
  __proto__: tiger
}




// * 생성자 함수 (new 키워드)
// new Object() {}

function Animal(){
  this.legs = 4;
  this.tail = true;
  this.stomach = [];
  this.getEat = function (){
    return this.stomach
  }
  this.setEat = function (food){
    this.stomach.push(food)
  }
}

// const a1 = new Animal();

function Tiger(name){
  Animal.call(this) // Animal의 this를 Tiger의 this로 설정해줌
  this.name = name;
  this.pattern = '호랑이무늬';
  this.hunt = function(target){
    return `${target}에게 조용히 접근한다.`
  }
}

Tiger.bark = function (sound) {
  return sound
}

// 객체와 Tiger의 prototype을 연결해줘야하므로, Animal(함수)이 아닌 생성한 객체인 a1에게 연결해줘야함.
// Tiger.prototype = Animal; // (X)
// Tiger.prototype = new Animal(); // (O), 잘 안쓰임

// Tiger.prototype = Object.create(Animal.prototype);
// Tiger.prototype.constructor = Tiger
// Tiger.prototype = a1; // (O)

const 금강산호랑이 = new Tiger('금순이')

const 시베리아호랑이 = new Tiger('시순이')

// 

/* 함수의 메서드 (함수의 능력) */
// call , , , (this 값을 명시적으로 설정)
// apply [ , , , ]
// bind

// throttle, debounce


const arr = [1,2,3,4];

function sum(a,b,c){
  console.log(this);
  return  a + b + c
}

// sum.call(this) // this를 전달함 인수를 개별로 받음 => 함수 실행 o
// sum.apply('hello',1,2,3) // this를 전달함 인수를 배열로 받음 => 함수 실행 o

// const b = sum.bind('hello',1,2,3); // this를 전달함 인수를 개별로 받음 => 함수 실행 안함 


// first.addEventListener('click',b)

// sum.call('hello', 1, 2, 3);
// sum.apply('hello', [1, 2, 3]);
// sum.bind('hello', 1, 2, 3); // call처럼 넣어주는데 바로 실행되지 않음 (원할 때 호출해서 사용)

// const b = sum.bind('hello', 1, 2, 3)


const user = {
  sayHi(){

    function sayBye(a,b,c){
      console.log(this)
    }
    
    sayBye.call(this,1,2,3)
  }
}