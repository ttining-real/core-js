/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;

console.log(empty);
console.log(typeof empty);


// 2. 값이 할당되지 않은 상태
let undef;
console.log(typeof undef);


// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const double = "hello"; // string literal
const single = 'hello';
const backtick = `hello ${double + single}`;

// console.log(double);
// console.log(single);
// console.log(backtick);

console.log(typeof backtick);

const str = new String('hello'); // constructor function

console.log(str);

// 4. 정수, 부동 소수점 숫자(길이 제약)
const integer = 150;
const floatingPointNumber = 10.5;

console.log(typeof integer);
console.log(typeof floatingPointNumber);
// console.log(typeof NaN);
// console.log(typeof Infinity);
// console.log(typeof -Infinity);

const num = new Number(150);
console.log(num);


// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)

const bigInt = 123n;

console.log(typeof bigInt);

// bigInt의 경우 비교적 최근에 만들어졌기 때문에 앞에 new를 붙이지 않아도 된다.
const b = BigInt(111);
console.log( typeof b );

// 6. 참(true, yes) 또는 거짓(false, no)
const isActive = true;
console.log(typeof isActive);


console.clear(); // 이전 콘솔 로그 지워줌

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const obj = { name : 'ttining' } // object literal 방식

const object = new Object({name: 'ttining so cute'}); // constructor function 방식

console.log( obj );
console.log( object );


// 8. 고유한 식별자(unique identifier)
// 심볼은 생성자 함수로만 만들 수 있다.
const id = Symbol('uuid');
const id2 = Symbol('uuid');

console.log(typeof id);


/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

console.clear();

// Object

const user = {
  name: 'ttining',
  age: 20,
  sum: function(a, b) {
    return a + b;
  },
  // 객체 안에 함수를 정의하는 방법
  // 1 normal function - constructor이다.
  // prototype이 내장되어 있어 무겁다.
  sayHi: function() { 
    return 'hello';
  },

  // 2 arrow function
  // prototype이 내장되어있지 않아 가볍다.
  sayHi2: () => { 
    // this를 찍어보면 window가 나온다. (this가 window를 가리킨다.)
    // 모듈에서는 undefined를 나타냄
    return 'hi';
  },
  
  // * 전역의 오염을 막아야한다.
  
  // 3 concise(축약) method : 키와 값을 구분하지 않는다.
  // prototype이 내장되어있지 않아 가볍다.
  // 결론 : 이걸 더 많이 씀 (메서드에서는)
  sayHi3() { 
    return 'hola';
  },
}

console.log(user);

// Array
const newArray = new Array(1,2,3);

const arr = [
  10, 
  100, 
  1000,
  null,
  undefined,
  'hello',
  {name: 'ttining'},
  function() {},
];

console.log(arr);


// function

function 더하기(a, b) {
  console.log(a + b);
}

더하기(1, 2);

// function

function 붕어빵틀(재료){
  return `따끈 따끈 맛있는 ${재료} 맛 붕어빵`
}


const 팥붕 = 붕어빵틀('팥')
const 슈붕 = 붕어빵틀('슈크림')
const 와붕 = 붕어빵틀('와사비')


console.log(팥붕);
console.log(슈붕);
console.log(와붕);

// this


