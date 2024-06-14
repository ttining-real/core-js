/* --------- */
/* Object    */
/* --------- */

/* global isObject */
const html = /* html */ `
  <h1>title</h1>
  <div class="first">
    hello
  </div>
`;


/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  height: '40vh',
  minHeight: 200,
  transform: 'translate(-50%, -50%)'
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uid: 'user-Id-ttining',
  name: 'ttining',
  email: 'ttining.real@gmail.com',
  isSignIn: false,
  permission: 'paid', // paid | free
}


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
console.log(authUser.uid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.isSignIn); // getter
console.log(authUser.permission = 'free'); // setter (할당 연산자 사용해서 값 넣어줌)


// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
console.log(authUser['uid']);
console.log(authUser['name']);
console.log(authUser['email']);
console.log(authUser['isSignIn']); // getter
console.log(authUser['permission'] = 'allPass'); // setter


Object.prototype.nickName = '띠닝';

// 객체 안에 키가 있는지 확인 방법

// in 문 (가지고 있지 않은 것도 조회가 됨. 또한 단일 대상만 조회 가능)
console.log( 'uid' in authUser );

for(let key in authUser) {
  // console.log(key); // nickName까지 나옴
  
  // 정확하게 쓰기 위해서 hasOwnProperty를 사용한다.
  if({}.hasOwnProperty.call(authUser, key)) {
    console.log(key);
    console.log(authUser[key]); // . 점 표기법은 안나옴
  }
}

// static method와 instance method
// 객체의 key만을 모아서 배열을 반환하는 메서드 : Object.keys()
const keyList = Object.keys(authUser);

console.log(keyList);


// 객체의 value만을 모아서 배열을 반환하는 메서드 : Object.values()
const valueList = Object.values(authUser);

console.log(valueList);


function getPropertiesList(obj) {
  let result = []

  for(let key in obj){
    if({}.hasOwnProperty.call(obj, key)) {
      result.push(key); // key만
      result.push(obj[key]); // value만
    }
  }

  return result;
}

getPropertiesList(authUser); // ['uid', 'name', 'email', 'isSignIn', 'permission']


console.clear();

// 프로퍼티 제거 (remove) or 삭제(delete)
//           비워두기        메모리 날림

function removeProperty(obj,key){
  
  // 객체가 맞는지 
  if(isObject(obj)){
    obj[key] = null;
  }
}

removeProperty(authUser,'name') // authUser.name = null;


function deleteProperty(obj,key){

  if(isObject(obj)){
    delete obj[key]
  }

}

deleteProperty(authUser,'name') // undefined



// 계산된 프로퍼티 (computed property)
let calculateProperty = 'tel'; // phone | tel

function createUser(name, age, phone){
  return{
    name: name,
    age: age,
    [calculateProperty + ' 조합 가능']: phone,
  }
}


// authentication ( authentication <-> authorization 차이점 )

// 단축 프로퍼티 (shorthand property)
let name = '띠닝';
let email = 'ttining.real@gmail.com';
let authorization = 'Lv. 99';
let isLogin = true;

const student = { name, email, authorization, isLogin };


// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(obj) {
  // return null;
  return Object.keys(obj).length === 0;
}

// const a ={}

// isEmptyObject(a); // true
isEmptyObject({}); // true



/* ------------------------------------------- */
/* ★ 배열 구조 분해 할당  destructuring(파괴) assignments   */
/* ------------------------------------------- */

// 순서(order)를 바꿀 수 없음. 변수명 o

const arr = [10, 100, 1000, 10_000];

const [a0, a2, a3, a4, a5 = 999] = arr;

// const a0 = arr[0];
// const a1 = arr[1];
// const a2 = arr[2];
// const a3 = arr[3];

// const [, a1, a2] = arr; // 안 쓰는 요소는 비워놔도 됨
// const [a0, ... rest] = arr; // 나머지 파라미터 다 가져오는 것처럼 처리할 수 있음

// 무조건 배열의 길이와 같게 쓸 필요는 없다.
// 배열을 분해한 아이템의 변수다 (= 더이상 배열이 아님)


// Object.entries(authUser) // [ [key, value] [key, value] ]
// Object.entries(authUser).filter(([key, value]) => {
//   value
// })


// 배열 묶음의 껍데기를 한겹 벗겨줌
// for(let keyValue of Object.entries(authUser)) {  
//   console.log(keyValue); // [key, value]
//   console.log(keyValue[0]); // key만 뽑아냄
//   console.log(keyValue[1]); // value만 뽑아냄
// }

// 구조 분해해서 가져오기
for(let [key, value] of Object.entries(authUser)){
  console.log(key, value);
}

// [ [key, value], [key, value] ]

// 닌자 코드

// 구조 분해 할당 가능
// const [first,second] = document.querySelectorAll('span');

// const first = spanList[0];
// const second = spanList[1];

// const first = document.querySelector('.first');
// const second = document.querySelector('.second');





/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments */
/* --------------------------------------------- */
// 순서를 고려하지 않음. key와 변수명이 동일해야 함. => 변수명 o (rename 가능)
// key를 추가하고 기본 값을 설정할 수 있다.

const salaries = {
  함정민: 95,
  지유진: 110,
  이진용: 15,
  한상학: 300,
};

// salaries에 추가되는 것은 아님
// 구조 분해를 할 때 새롭게 만들어서 할당을 해버린 것.
const {
  함정민: 함 = 100,
  지유진: 지,
  한상학: 한,
  이진용: 리,
  장주원: 장 = 500,
} = salaries;


// const 이진용 = salaries.이진용;
// const 지유진 = salaries.지유진;

function sum(a) {
  return 1 + a;
}

sum();




function createUserObject({
  name,
  age,
  gender,
  job:j= '홈프로텍터'
} = {}) { // 값을 받음과 동시에 구조 분해 할당을 처리할 수 있다.

  // console.log(obj);

  // const name = obj.name;
  // const {name, age, gender, job = '홈프로텍터', ...rest} = obj; // 구조 분해 할당

  // 새로운 객체를 반환하는 함수
  return { name, age, gender, job:j }; // 단축 프로퍼티
}


// 순서가 중요해짐
// const person = createUserObject('ttining', 29, 'female', '백수');

const data = {
  name: 'ttining',
  age: 29,
  gender: 'female',
  // job: '백수'
  address: '서울시 구로구',
  tel: '010-926...'
}

const person = createUserObject( data );

const {
  userName,
  age,
  gender,
  job,
  address = '서울시 구로구',
  tel,
} = {
  userName: 'ttining',
  age: 29,
  gender: 'female',
  // job: 'developer',
  address: '서울시 구로구',
  tel: '010-926....',
};

// const {acos} = Math;

// const acos = Math.acos;


// * 참조에 의한 객체 복사
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };


Object.assign(user, permissions1, permissions2);




let user2 = { name: "John" };

let permissions3 = { canView: true };
let permissions4 = { canEdit: true };


Object.assign({},user2, permissions1, permissions2);