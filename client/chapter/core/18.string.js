/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';
console.log(message);

// length 프로퍼티
let stringTotalLength = message.length;

console.log(stringTotalLength);

// 특정 인덱스의 글자 추출
let extractCharacter = message[5];
console.log('extractCharacter :',extractCharacter);

// enumerable // 열거 가능한
// iterable  // 반복 가능한
// immutable // 불변의
// mutable // 변경 가능한
// mutant // 돌연변이

// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter = 'P' + message.slice(1);

// message[0] = 'P' // 이런 방법으로는 글자 바꾸기 불가
console.log(immutableChangeCharacter);


// 부분 문자열 추출
let slice = message.slice(4, -1);
console.log('slice :',slice)

let subString = message.substring(2,5);
console.log('substring',subString)

// let subStr = message.substr();


// 문자열 포함 여부 확인
let indexOf = message.indexOf('is');
console.log('indexOf :',indexOf)


// indexOf를 사용하여 유저가 사용하는 브라우저 체크하는 함수 만들기
// if 문을 쓰면 너무 길어지니까 한번에 찾을 수 있는 걸로 해보기

function checkBrowser(){

  const agent = window.navigator.userAgent.toLowerCase();
  let browserName;

  switch(true){
    case agent.indexOf('edg') > -1 :
      browserName = 'MS Edge'
    break;
    case agent.indexOf('chrome') > -1 && !!window.chrome :
      browserName = 'Chrome'
    break;
    case agent.indexOf('safari') > -1 :
      browserName = 'Safari'
    break;
    case agent.indexOf('firefox') > -1 :
      browserName = 'Firefox'
    break;
    case agent.indexOf('trident') > -1 :
      browserName = 'IE'
    break;
    default:
      browserName = '무슨 브라우저 쓰세요..?'
  }

  return browserName

}



checkBrowser() // chrome


let lastIndexOf;
let includes;
let startsWith;
let endsWith;


// 공백 잘라내기
let trimLeft;
let trimRight;
let trim;


// 텍스트 반복
let repeat;


// 대소문자 변환
let toLowerCase;
let toUpperCase;


// 텍스트 이름 변환 유틸리티 함수
let toCamelCase;
let toPascalCase;