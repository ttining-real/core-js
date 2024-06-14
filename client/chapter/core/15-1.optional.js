/* -------------------------- */
/* Optional Chaining          */
/* -------------------------- */


const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q'
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
// console.log(portableFan.photos.animate);

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }


// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.

// portableFan && portableFan.photos && portableFan.photos.animate


// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.

portableFan.photos?.animate

// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.

// 메서드가 있는지 없는지 불확실할 때 ?. 사용 // 나중에는 try catch를 사용한다.
const fullName = portableFan.getFullName?.();

console.log(fullName);

// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.









// sync(동기)   async(비동기)   WEB API

// console.log(1);
// console.log(2);
// console.log(3); // 비동기 처리 해보기

// setTimeout : 한 번만 실행해주는 함수
// setTimeout(function(){ // 제일 쉽게 접근할 수 있는 비동기 setTimeout
//   console.log(3);
// },1000) 

// 자바스크립트는 싱글 스레드 환경이기 때문에
// 이 시간을 보장하기 위해서는 async await을 사용한다.

// function print(){
//   console.log(3);
// }

// setTimeout(print, 1000)



// function fibonacci(n){
//   if(n <= 0) return 0;
//   if(n <= 2) return 1;
//   return fibonacci(n-1) + fibonacci(n-2)
// }

// fibonacci(45)

const button = document.querySelector('.my-button');


// (1) 비동기로 html 태그가 생성될 때
// (3) 콘솔에 아이디를 찍어보면 숫자가 나오는데 이때 이 숫자가 의미하는 것은 Web Api에 등록된 순서이다.
const id = setTimeout(()=>{
  
  const template = /* html */`
    <button type="button" class="my-button">my-button</button>
  `
  //                                 어디에      무엇을
  document.body.insertAdjacentHTML('beforeend',template)

  // 이벤트를 함수 안에다 넣어주는 것이 안전하다.
  // button.addEventListener('click', ()=>{
  //   console.log('clicked~!');
  // })

},1000)


// clearTimeout(id) // Web Api에 등록된 것을 지워줌


// (2) 에러가 생기지 않게 옵셔널 체이닝 사용
button?.addEventListener('click',()=>{
  console.log('clicked~!');
})


// 연산 오래걸리는 작업

// setInterval : 일정 시간동안 주기적으로 실행해주는 함수

let count = 0;

const id2 = setInterval(()=>{
  console.log(++count);

  document.querySelector('.second').style.transform = `translateY(${count}px) rotate(${count * 10}deg)`

  if(count >= 250){
    clearInterval(id2)
  }

}, 10)

// 멈춰주기
// clearTimeout(id2)
// clearInterval(id2)

let counter = 0;

function animation(){
  console.log( ++counter );

  document.querySelector('.first').style.transform = `translateY(${counter}px) rotate(${counter}deg)`

  const id = requestAnimationFrame(animation)

  if(counter >= 500) {
    cancelAnimationFrame(id)
  }
}

animation()