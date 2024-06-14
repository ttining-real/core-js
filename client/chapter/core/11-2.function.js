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

// * 함수 표현식
let calculateTotal = function(a, b, c) {

  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 OOOO이라고 불리는 지역 변수 : arguments
  // console.log(arguments);
  let total = 0;


  // * for 문
  // for(let i = 0; i < arguments.length; i++) {
  //   total += arguments[i];
  // }


  // * for...of 문
  // for (let value of arguments) {
  //   total += value;
  // }

  // console.log(arguments); // symbol.iterator => for of를 사용할 수 있다.


  // * 배열의 메서드 사용해보기
  // 단순히 배열 순환만 할 때 : forEach
  // let arr = [100, 200, 300];

  // arr.forEach(function(item){
  //   let sum = 0;
  //   console.log(item);
  //   sum += item;
  // })

  // return total;

  // forEach는 arguments의 메서드가 아니라서 사용 못함
  // arguments.forEach(function(item){
  //   console.log(item);
  // })


  

  // arguments => array
  // * arguments를 array(배열)로 만들어서 forEach를 사용해보자.

  // 찐배열로 만들어서 언제든지 가져다 쓸 수 있다.
  const arr = [...arguments];
  // const arr = Array.from(arguments);
  // const arr = Array.prototype.slice.call(arguments);

  // console.log( arr );


  // * forEach : 값을 반환하지 않는다.
  arr.forEach(function(price){
    return total += price;
  })

  // arr.forEach(price => total += price)


  // * reduce
  const result = arr.reduce(function(acc,cur){
    return acc + cur
  },0)

  // const result = arr.reduce((acc,cur) => acc + cur,0)

  // return arr.reduce((acc,cur) => acc + cur,0)


  // * 빌려쓰기 (일회성, 쓸때마다 빌려와야함.)
  // Array.prototype.forEach.call(arguments,function(item){
  //   total += item
  // })


  // * 태생을 배열로 바꾸기 (arguments에게 바로 reduce 사용할 수 있음)
  // console.log(arguments.__proto__);
  arguments.__proto__ = Array.prototype;
  // console.log(arguments);

  return total;

};

// * calculateTotal 함수를 화살표 함수로 쓴다면...
// let calculateTotal = (arr) => arr.reduce((acc, cur) => acc + cur, 0);


const result = calculateTotal(1000, 5000, 2500, 4000, 2300);

// console.log(result);



// forEach => 배열 순환 값 반환 x 
// reduce  => 배열 순환 값 반환 o  숫자/문자/배열/객체
// map     => 배열 순환 값 반환 o  only 배열
// filter  => 배열 순환 값 반환 o  only 배열



const arr = ['지인', '연걸', '갸니', '효니'];

// * map : 값을 반환한다.(forEach와의 차이점)
// 원본을 훼손하지 않는다.
const mapValue = arr.map(function(item, index){
  return `<div>순서 : ${index+1}, ${item}</div>`;
})

console.log( mapValue );




// * 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function(){};


// * 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {

};


// * 콜백 함수 (표현)식
// let callbackFunctionExpression;
let cb = function(isActive, success, fail) {
  
  if(isActive) {
    success();

  } else {
    fail();
  }

}

cb(
  false, 
  () => console.log('성공입니다.'),
  function(){
    console.log('실패입니다.');

  }
);




// * 콜백.. => 비동기 통신을 다룰 때 많이 사용한다.
function movePage(url, success, fail) {

  if(url.includes('https')){
    success(url)
  }else{
    fail()
  }

}



movePage(
  'https://www.naver.com',
  function(url){
    console.log(`현재 입력하신 url은 ${url}입니다. 3초 뒤 해당 사이트로 이동합니다.`);
  },
  () => console.log('잘못된 url을 입력했습니다.')
);



// * higher-order function 고차함수
function map(arr, func) {

  let result = [];

  for(let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]));
  }

  return result
}

map([1,2,3],function(item){ return item * 2})

map([1,2,3],item => item * 2)


// 함수를 인수로 받아 처리함.
// 함수를 리턴함

function greater(n){
  return function (m){
    return n > m
  }
}

const g = (n) => (m)=> n > m






//  * 함수 선언문 vs. 함수 (표현)식


// * 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;


// 함수가 선언됨과 동시에 실행되는 것을 말한다.

// var는 블록 스코프 : X
// var는 함수 스코프 : O


// encapsulation (캡슐화)
// 모듈 프로그래밍 => (import, export)
// import css from '../'

// 즉시실행함수는 매개변수를 받을 수 있나요?  window => tiger

(function () {
  var 보호되는변수 = 10;
  console.log('ㅇㅅㅇ...?');
})()


const MASTER = (function (tiger){

  
  let uuid = 'azxcqwASFqjKJ112314!23'
  
  return {
    getKey(){
      return uuid
    },
    setKey(value){
      uuid = value
    }
  }

})(window)

MASTER.setKey('aaa')

// uuid = 'asdasdasdas'


// import css from './css.js'


const css = (function(){

  function setStyle(node,prop,value){
    if(typeof node === 'string') node = document.querySelector(node)
    if(typeof prop !== 'string') throw new Error('setStyle 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
    if(!value) throw new Error('setStyle 함수의 세 번째 인수는 필수값 입니다.');
    node.style[prop] = value
  }
  
  function getStyle(node,prop){
    if(typeof node === 'string') node = document.querySelector(node);
    if(typeof prop !== 'string') throw new Error('getStyle 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
    return getComputedStyle(node)[prop]
  }
  
  function css(node,prop,value){
    return !value ? getStyle(node,prop) : setStyle(node,prop,value);
  }

  return css
  
})()


// closure
