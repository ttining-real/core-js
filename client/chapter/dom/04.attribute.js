/* ------------------------------------ */
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */


/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고, 
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우, 
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.


/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.


/* DOM 프로퍼티 검토 ------------------------------------------------------- */

// * - elementNode.hasAttribute(name) – 속성 존재 여부 확인

const first = getNode('.first');

console.log( first.hasAttribute('class') ); // true
console.log( first.hasAttribute('id') ); // false





// * - elementNode.getAttribute(name) – 속성값을 가져옴

console.log( first.getAttribute('class') ); // first hello hi bye
console.log( first.getAttribute('sayHi') ); // hola // 모든 비표준 속성을 순환할 수 있다.
console.log( first.getAttribute('data-value') ); // 10
// console.log( first.getAttribute('class').split(' ') ); // ['first', 'hello', 'hi', 'bye']





// * - elementNode.setAttribute(name, value) – 속성값을 변경함
first.setAttribute('id', 'tiger')





// * - elementNode.removeAttribute(name) – 속성값을 지움
first.removeAttribute('id')





// * - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함
console.log( first.attributes ); // Symbol(Symbol.iterator)가 있다.





/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset

// setter
first.dataset.name = 'ttining' // data-name="ttining"

// getter - DOMStringMap이 생김
console.log( first.dataset );
console.log( first.dataset.name );
console.log( first.dataset.value );

console.log( first.getAttribute('data-name') );

// => dataset과 getAttribute 둘 다 가능함.


// first.removeAttribute('id')
// first.setAttribute('class', '')


// * getAttribute / setAttribute를 getAttr, setAttr로 줄여보자!
// getAttr
function getAttr(node, prop) {

  if(isString(node)) node = getNode(node);
  // if(typeof node === 'string') node = document.querySelector(node);

  if(!isString(prop)) throw new TypeError('getAttr 함수의 두 번째 인수는 문자 타입이어야 합니다.')

  return node.getAttribute(prop);
}

// getAttr('.first', 'sayHi'); // 'hola'


// getNode('.first').removeAttribute('class')


// Error에 따라 문구 정해놓고 불러오기
function typeError(message) {
  return new TypeError(message + '문자 타입이어야 합니다.');
}


// setAttr
function setAttr(node, prop, value) {

  if(isString(node)) node = getNode(node);

  // if(!isString(prop)) throw new TypeError('setAttr 함수의 두 번째 인수는 문자 타입이어야 합니다.')
  if(!isString(prop)) {
    typeError('setAttr 함수의 두 번째 인수는')
  }

  // (3)
  if(value === '') {
    node.removeAttribute(prop);
    return;
  }

  // (4) - (3), (4)의 순서는 바뀌면 안된다. => '' 빈 문자열도 값이 없다고 해석하기 때문
  if(!value) throw new ReferenceError('setAttr 함수의 세 번째 인수는 필수 입력값 입니다.')

  node.setAttribute(prop, value);
}

// setAttr('.second', 'class', '');



// * 스몰 과제
// setAttr('.second', 'data-name', 'tiger') // first.dataset.name
// 이렇게 넣었을 때
// prop에 data가 있어?
// 그럼 dataset으로 넣기


// * getAttribute / setAttribute의 기능을 확장한 attr 함수 만들기

// function attr(node, prop, value) {

//   if(!value) {
//     return getAttr(node, prop);
//   } else {
//     setAttr(node, prop, value);
//   }

// }

// attr 함수를 한줄로 바꿔보기 (삼항 연산자)
const attr = (node, prop, value) => !value ? getAttr(node, prop) : setAttr(node, prop, value);


// attr('.first', 'class') // getter
// attr('.first', 'class', 'hahaha'); // setter