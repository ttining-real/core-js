/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

[1000,5000,2500].forEach(function(){})

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (){

  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사배열 이라 불리는 변수
  let total = 0;
  
  // for 문
  // for(let i = 0; i < arguments.length; i++){
  //   total += arguments[i];
  // }


  // for..for 문
  // for(let value of arguments){
  //   total += value;
  // }

  // console.log(arguments);


  // arguments => array

  const arr = [...arguments]
  // const arr = Array.from(arguments)
  // const arr = Array.prototype.slice.call(arguments);
           
  // console.log( arr );


  // forEach
  // arr.forEach(function(price){
  //   total += price;
  // })

  // arr.forEach(price => total += price)

  // reduce
  // const result = arr.reduce(function(acc,cur){
  //   return acc + cur
  // },0)

  // const result = arr.reduce((acc,cur) => acc + cur,0)

  // return arr.reduce((acc,cur) => acc + cur,0)


  // 빌려쓰기
  // Array.prototype.forEach.call(arguments,function(item){
  //   total += item
  // })

  // 태생을 배열로 바꾸기
  arguments.__proto__ = Array.prototype
  
  // console.log(arguments);

  return total

};

// let calculateTotal2 = (arr) => arr.reduce((acc,cur) => acc + cur,0)

const result = calculateTotal(1000,5000,2500,4000,2300);

// console.log( result );





// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression;


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression;


// 콜백 함수 (표현)식
let callbackFunctionExpression;


// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;








const people = [
  {
    nickName:'tiger',
    age:40
  },
  {
    nickName:'beom',
    age:45
  },
  {
    nickName: 'seon',
    age:20
  }
]



const template = people.reduce(function(htmlCode,cur){
  return htmlCode + `<div>${cur.nickName} : ${cur.age}</div>`
},'')



// document.body.insertAdjacentHTML('beforeend',template)