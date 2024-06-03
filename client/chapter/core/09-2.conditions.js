/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log('AandB:',AandB);

// 논리곱 할당 연산자 (Logical AND Assignment)
// a = a&&b
// a &&= b

// 논리합(또는) 연산자
let AorB = a || b;
console.log('AorB:',AorB);

// 논리합 할당 연산자 Logical OR Assignment
// a ||= b


// 부정 연산자
let reverseValue = !value;
console.log('reverseValue:',reverseValue);

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};
console.log(whichFalsy);

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsTruthy:true};
console.log(whichTruthy);

console.clear();
// 로직을 짜보는 시간...

// let login = prompt('누구쇼');

// if (login === 'Admin') {
//   let password = prompt('비밀번호를 입력하세요.');

//   // 비밀번호 체크
//   if(password === 'TheMaster') {
//     alert('Huānyíng Huānyíng!')
//   } else if (password === null) {
//     alert('Canceled')
//   } else {
//     alert('Wrong password... :(')
//   }
// } else if(login === null) {
//   alert('Canceled')
// } else {
//   alert(`I don't know you.`)
// }

// let userName = prompt('누구쇼');

// // 대소문자 구분 X - .toLowerCase()
// // .toLowerCase 앞에 ? 붙이는 이유
// // 아무것도 입력하지 않고 확인 버튼을 누르면 undefined를 반환해서 타입 에러가 뜬다.
// // undefined를 걸러주기 위해 ? 연산자를 사용해준다.
// if (userName?.toLowerCase() === 'admin') {
//   let password = prompt('비밀번호는?');
  
//   if (password?.toLowerCase() === 'themaster') {
//     console.log('Huānyíng Huānyíng!');
//   } 
//   else if(password === null) {
//     console.log('취소');
//   } 
//   else {
//     console.log('틀림ㅋㅋ');
//   }
// } 
// // else if (userName === null || userName.includes(' ')) {
// else if (userName === null || userName?.replace(/\s*/g,'') === '') {
//   console.log('취소!');
// } 
// else {
//   console.log('로그인 실패!');
// }

console.clear();

function login() {
  let userName = prompt('누구쇼');

  // 대소문자 구분 X - .toLowerCase()
  // .toLowerCase 앞에 ? 붙이는 이유
  // 아무것도 입력하지 않고 확인 버튼을 누르면 undefined를 반환해서 타입 에러가 뜬다.
  // undefined를 걸러주기 위해 ? 연산자를 사용해준다.


  // userName이 null, undefined => 아래 코드 실행 안함 (실행 순서를 제어할 수 있다.)
  if (userName === null || undefined) return;

  if (userName?.toLowerCase() === 'admin') {
    let password = prompt('비밀번호는?');

    if (password?.toLowerCase() === 'themaster') {
      console.log('Huānyíng Huānyíng!');
    } else if (password === null) {
      console.log('취소');
    } else {
      console.log('비밀번호를 잘못 입력하셨습니다.');
      login() // 재귀함수 (내가 나를 계속해서 다시 호출하는 것)
    }
  }
  // else if (userName === null || userName.includes(' ')) {
  else if (userName === null || userName?.replace(/\s*/g, '') === '') {
    console.log('취소!');
  } else {
    console.log('로그인 실패!');
  }
}

login();
