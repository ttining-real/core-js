/* -------------------- */
/* DOM Styling          */
/* -------------------- */


/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first');


// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용

console.log(first.className);


// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

console.log(first.classList);



// first.className = 'aa' // 전부 다 지우고 새로 class 추가하는 거라 위험할 수 있지만, 싹 다 날려버릴 때 유용하다.

first.classList.add('bye');
first.classList.remove('hello');
// first.classList.toggle('hello'); // boolean 반환
console.log(first.classList.contains('hello')); // 특정 class가 있는지 확인, boolean 반환


// addClass 함수 만들기
function addClass(node, className){

  // if(isString(node)) node = getNode(node);
  if(typeof node === 'string') node = document.querySelector(node);

  // 배열도 클래스로 들어가게 했어잉
  if(isArray(className)) {
    className.forEach( c => node.classList.add(c));
    return;
  }

  if(typeof className !== 'string') {
    throw new TypeError('addClass 함수의 두 번째 인수는 문자 타입이어야 합니다.');
  }
  node.classList.add(className);
}

// addClass('.first', '545')
addClass('.first', ['a', 'b', 'c']) // 배열도 클래스로 들어가게 하고싶어잉
// addClass('.first', 'a', 'b', 'c') // 전개구문으로 처리해주기 (나중에..)



// removeClass 함수 만들기
function removeClass(node, className){
  
  if(typeof node === 'string') node = document.querySelector(node);

  // 첫 번째 인수만 들어왔을 경우
  if(!className) {
    node.className = '';
    return;
  }

  if(typeof className !== 'string') {
    throw new TypeError('removeClass 함수의 두 번째 인수는 문자 타입이어야 합니다.');
  }
  node.classList.remove(className);
}

// removeClass('.first')



// toggleClass 함수 만들기
function toggleClass(node, className){
  if(typeof node === 'string') node = document.querySelector(node);

  if(typeof className !== 'string') {
    throw new TypeError('toggleClass 함수의 두 번째 인수는 문자 타입이어야 합니다.');
  }
  return node.classList.toggle(className); // boolean값 반환
}
toggleClass('.first', 'toggle')



/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

first.style.background = 'black';

first.style.cssText = `
color:white;
padding:1rem;
border:1px solid red;
`
// cssText를 쓰면 윗줄의 background = 'black'이 사라짐


/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

console.log( getComputedStyle(first)['font-size'] );


const node = document.querySelector('.first');

// getStyle 함수
function getStyle(node, prop){
  if(isString(node)) node = getNode(node);

  // 유효한 css 스타일 찾기 document.body.style
  if(!(prop in document.body.style)){
    throw new SyntaxError('getStyle 함수의 두 번째 인수는 유효한 css 속성이어야 합니다.')
  }

  return getComputedStyle(node)[prop];
}

getStyle('.first', 'font-size')



// setStyle 함수
function setStyle(node, prop, value){
  if(isString(node)) node = getNode(node);

  if(!(prop in document.body.style)){
    throw new SyntaxError('setStyle 함수의 두 번째 인수는 유효한 css 속성이어야 합니다.')
  }

  if(!value) throw new ReferenceError('setStyle 함수의 세 번째 인수는 필수 입력값 입니다.')

  node.style[prop] = value;
}

setStyle('.first', 'color', 'red')



// css 함수
const css = (node, prop, value) => !value ? getStyle(node, prop) : setStyle(node, prop, value);
css('.first', 'color')