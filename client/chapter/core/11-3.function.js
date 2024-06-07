/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// arguments는 arrow function에서는 사용할 수 없다.
// console.log(arguments);
// console.log(args);

// function sum(...args) {}
// const sum2 = function (...args) {}


// 함수 선언 → 화살표 함수 (표현)식
//                  rest parameter
let calcAllMoney = (...args) => {
  
  let total = 0;

  // * for 문
  // for(i = 0; i < args.length; i++){
  //   total += args[i];
  // }

  // * for of 문
  // for(let value of args) {
  //   total += value;
  // }

  // * forEach 문 => arrow function
  // args.forEach(function (item) {
  //   total += item;
  // });

  // args.forEach(item => total += item)

  // * reduce => arrow function
  // const result = args.reduce(function(acc, cur){
  //   return acc + cur
  // }, 0)

  return args.reduce((acc, cur) => acc + cur, 0);

  // return total;
};

const calc = (...args) => args.reduce((acc, cur) => acc + cur, 0);

const result = calcAllMoney(1000, 5000, 4500, 13000);
console.log(result);

// 화살표 함수와 this

function create(nickName, number){
  // return {
  //   name: nickName,
  //   age: age,
  // };
  return
}

create('ttining', 5);

// 함수의 두 가지 얼굴 - 키-값으로 입력하면 객체를 내보내준다.
// 일반 함수(normal function) / 생성자 함수(constructor function)

function Button2() {

}

// 생성자로만 사용하세요
const Button = (text) => {

  this.content = text;
  // return text

}

class Button3{}

new Button3()

// const a = Button('more')
// const b = new Button('more')

// const str = new String('aaa')

// new Number()
// new Object()
// new Array()


// * this
// * 일반 함수
// - constructor 내장 (concise method는 예외)
// - this : 나를 호출한 대상을 this
// - 객체의 메서드로 사용이 많이 됨 => this를 찾기 위해

// * 화살표 함수
// - constructor 비내장
// - this : 바인딩 하지 않음 -> 상위 컨텍스트에서 찾음
// - 메서드 안의 함수를 작성해야할 때 // 내 상위 this를 가져오기 때문에

// * 정리
// 객체에 메서드를 정의해야한다 => 일반함수 사용..
// 메서드 안에 함수를 작성해야할때  => 화살표 함수 사용..


const user = {
  name: 'ttining',
  total: 0,
  grades: [30, 60, 80],
  totalGrades() {
    this.grades.forEach(function() {
      // console.log(this);
    });
    return this.total;
  },
};

user.totalGrades()

function forEach(func) {
  func()
}

forEach(function(){})
// 객체의 메서드를 정의하는 방법



const another = {
  name: 'tiger',
  sayHi: user.sayHi,
}



/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// * pow(numeric: number, powerCount: number): number;
// let pow = (numeric,powerCount)=>{

//   let result = 1;

//   for(let i = 0; i < powerCount; i++){
//     result *= numeric
//   }
//   return result;
// }; 


// 표현식
// const pow = (numeric,powerCount) => {
  
  //   return Array(powerCount).fill(null).reduce((acc)=>{
//      return acc *= numeric
  //   }, 1)
    
  // }
    
    
// 표현식 -> 줄여쓸 수 있다.
const pow = (numeric,powerCount) => Array(powerCount).fill(null).reduce(acc => acc *= numeric, 1)



// * repeat(text: string, repeatCount: number): string;
// repeat(text: string, repeatCount: number): string;
// let repeat = (text,repeatCount)=>{

//   let result = '';

//   for(let i = 0; i < repeatCount; i++){
//     result += text;
//   }
//   return result
// }; 

// 문자의 메서드 => '안녕'.repeat(5)
// repeat('사랑해👋',3)  // '안녕👋안녕👋안녕👋'


// const repeat = (text,repeatCount)=>{
//   return Array(repeatCount).fill(null).reduce((acc)=>{
//     return acc + text
//   },'')
// }

const repeat = (text,repeatCount)=> Array(repeatCount).fill(null).reduce((acc)=> acc + text,'')

