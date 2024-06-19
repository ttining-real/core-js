/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"

function handler() {
  console.log('클릭 이벤트 발생!');
}

// 2. DOM 프로퍼티 : element.onclick = handler

const first = getNode('.first');

// first.onclick = handler;

// 3. 메서드 : element.addEventListener(event, handler[, phase])
// 이벤트 매개변수의 이름 : event, evt, e
function handleClick(e) {
  // console.log('클랙했어잉!');

  // 이벤트 객체가 제공해주는 정보
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX);
  console.log(e.clientY);
  console.log(e.offsetX);
  console.log(e.offsetY);
}

// first.addEventListener('click', handleClick);

const second = getNode('.second');

// second.addEventListener('click', ()=>{
//   first.removeEventListener('click', handleClick);
// })

// 이벤트 추가/제거 하는 함수 만들기 (클로저)
// function bindEvent(node, type, handler) {

//   if(isString(node)) node = getNode(node);

//   node.addEventListener(type, handler);

//   return () => node.removeEventListener(type, handler);

// }

// const firstEventRemove = bindEvent('.first', 'click', handleClick);

// second.addEventListener('click', firstEventRemove)

// firstEventRemove(); // 이벤트 제거



// typescript 문법
// ground는 HTMLElement 문법이 맞아 => addEventListener 자동완성 뜸
// (ground as HTMLElement).addEventListener



/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

const ground = getNode('.ground');
const ball = getNode('#ball');

//                        이벤트 객체 e -> 구조분해할당
function handleClickBall({offsetX:xPos, offsetY:yPos}) {

  // const {offsetX:x, offsetY:y} = e;

  // let x = e.offsetX;
  // let y = e.offsetY;

  const w = ball.offsetWidth;
  const h = ball.offsetHeight;

  // 공의 정중앙이 맞춰지게 하기 위해 offset / 2를 해줌
  ball.style.transform = `translate(${xPos-(w / 2)}px, ${yPos-(h / 2)}px)`
}

// ground.addEventListener('click', handleClickBall)



function handleMove({offsetX:x,offsetY:y}) {

  console.log(x,y);
  
  let template = /* html */ `
    <div class="emotion" style="top: ${y-16}px; left: ${x-16}px;">😍</div>
  `

  insertLast(ground, template);
}

// ground.addEventListener('mousemove', handleMove)


// 부하가 많이 걸림, 문제를 해결해보자.
// window.addEventListener('resize', () => {
//   console.log('resize');
// })



// * throttle(수도꼭지), debounce (바운스(공 튀김) 방지)


// * debounce 함수 만들기
// let timeout;

// function debounce(callback) {

//   clearTimeout(timeout);

  //        id가 튀어나온다.(아이디를 이용해 이벤트 제거 가능)
//   timeout = setTimeout(() => {
//     callback()
//   }, 1000)

// }

// debounce(() => {
//   console.log('hello');
// })



// * debounce 함수를 클로저로 만들기
function debounce(callback, limit = 500) {
  
  let timeout;

  //          이벤트 객체 받아오기
  return function(e) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.call(this, e) // 이벤트 객체 전달하기
    }, limit)
  }
}

// ground.addEventListener('mousemove', debounce(function(e) {
//   console.log(e);
//   console.log(this); // this 찾아주기
// }))

// ground.addEventListener('mousemove', debounce(handleMove))




// * throttle 함수 만들기
// let waiting = false;

// function throttle(callback) {
//   if(!waiting) {
//     callback();
//     waiting = true;

//     setTimeout(() => {
//       waiting = false;
//     }, 1000)
//   }
// }

// throttle(() => {
//   console.log('hello throttle?');
// })


// * throttle 함수를 클로저로 만들기
function throttle(callback, limit = 500) {
  let waiting = false;

  // 이벤트 객체로 받는 법
  // return function(e) {
  //   if(!waiting) {
  //     callback.call(this, e);
  //     waiting = true;
  
  //     setTimeout(() => {
  //       waiting = false;
  //     }, limit)
  //   }
  // }

  // rest 파라미터로 받는 법
  return function(...args) {
    if(!waiting) {
      callback.apply(this, args);
      waiting = true;
  
      setTimeout(() => {
        waiting = false;
      }, limit)
    }
  }
}

// throttle(() => {
//   console.log('hello throttle?');
// })

ground.addEventListener('mousemove', throttle(handleMove));