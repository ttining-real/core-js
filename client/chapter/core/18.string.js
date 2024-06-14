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

// const a = {...immutable} 


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



// 뒤에서 부터 찾지만 앞의 인덱스 기준으로 반환해줌
let lastIndexOf = message.lastIndexOf('s');
console.log('lastIndexOf :',lastIndexOf);


let includes = message.includes('Less');
console.log('includes :',includes);


let startsWith = message.startsWith('less');
console.log('startsWith :',startsWith)


// 모든 문장에 마침표를 찍어야할 때 사용(안 찍혀있는 경우 / 찍혀있는 경우)
let endsWith = message.endsWith('more.');
console.log('endsWith :',endsWith)




let str = '        a   b      c           d             ';

// * 공백 잘라내기
// trimLeft : 왼쪽 공백 제거 (이제는 잘 안 쓰임.)
// 글을 왼/오로 읽을 수도 있지만, 상/하로 읽을 수도 있기 때문에
// 이제는 Left/Right 개념을 잘 사용하지 않는다. => Start, End를 사용한다.
let trimStart = str.trimStart();
console.log('trimStart :',trimStart);

let trimEnd = str.trimEnd();
console.log('trimEnd :',trimEnd)

let trim = str.trim();
console.log('trim :',trim)

// 중간 공백 잘라내기 (replaceAll / 정규 표현식)
const replaceAll = str.replaceAll(' ', ''); // 모든 애들을 다 찾아서 좌변의 값을 우변의 값으로 변경
console.log('replaceAll :',replaceAll);

const replace = str.replace(/\s*/g, ''); // 모든 애들을 다 찾아서 좌변의 값을 우변의 값으로 변경
console.log('replace :',replace)

// function trimText(string){
  
//   return string.replace(/\s*/g,'');

// }


// 빈 문자 잘라내는 함수
const trimText = s => s.replace(/\s*/g,'');

trimText(str) // abcd


// 텍스트 반복
let repeat = message.repeat(3);
console.log('repeat :',repeat);


// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log('toLowerCase :',toLowerCase);


let toUpperCase = message.toUpperCase();
console.log('toUpperCase :',toUpperCase);


console.clear();

// 텍스트 이름 변환 유틸리티 함수
// let toCamelCase;
// let toPascalCase;
function toCamelCase(string) {
  //          replace는 콜백함수를 제공해준다.
  //           (공백 또는 - 또는 _ 찾기) + .(내가 찾은 것+바로 뒤에 알파벳 하나) /g (전역에서)
  //                    걸러진 애들이   ($1) 여기에 들어옴 => {}
  //                                           $1.trim() 공백 한번 더 제거 (혹시 모르니까)
  //                                                   replace 한번 더 (알파벳 앞에 붙은 애들 찾아서 제거)
  //                                                                           카멜 케이스 쓰려고 대문자로 바꿔줌
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}

// 파스칼 케이스 : 카멜 케이스에서 첫 글자가 대문자
function toPascalCase(string) {
  // 카멜 케이스 함수를 한 번 돌려주고,
  let name = toCamelCase(string);
  // 첫 글자만 toUpperCase + 나머지 문자 접합해줌
  return name[0].toUpperCase() + name.slice(1);
}

