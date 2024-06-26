
import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from "./type.js";


// delay 함수
function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}


const first = getNode('.first');
const second = getNode('.second');


// 순차적 실행이 아닌 일괄 실행을 함
// first.style.top = '-100px';
// first.style.transform = 'rotate(360deg)';
// first.style.top = '0px';





// delay 함수 실행부
// delay(() => {
//   console.log('hi');
// }, 1000)

// delay(() => {
//   // console.log('1');
//   first.style.top = '-100px';
//   second.style.top = '100px';
//   delay(()=>{
//     // console.log('2');
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(-360deg';
//     delay(()=>{
//       // console.log('3');
//       first.style.top = '0px';
//       second.style.top = '0px';
//     })
//   })
// }, 1000)

// => 콜백의 한계 : 반복이 많아질수록 뎁스가 깊어진다.





const shouldRejected = true;

// resolve와 reject는 '함수'다. => 값을 전달할 수 있다.
// const p = new Promise((resolve, reject) => {

//   if(!shouldRejected) {
//     resolve('성공');

//   } else {
//     reject('실패!');
//   }
// })


// console.log(p);
// console.log(p.PromiseState);



// function delayP() {
//   // const p = new Promise((resolve, reject) => {  })
//   // return p;
  
//   return new Promise((resolve, reject) => {
//     resolve('성공');
//   })
// }

// 프로미스를 호출한 다음 어떻게 할거야 => then 호출
// 여기서의 delayP()는 함수 실행부로 보는 것이 아니라,
// 떨어진 Promise 객체로 봐야한다.
// delayP()
// .then((result)=>{
//   console.log(result);
// })

// console.log(delayP());


// 프로미스 체이닝
// delayP().then().then().then().then().then().then().then().then().then()






// * 개선 전
// delayP -> 시간만 설정할 수 있음
// function delayP(timeout = 1000){

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if(!shouldRejected){
//         resolve('성공!!');
//       }
//       else{
//         reject('실패!!');
//       }
//     }, timeout);
//   })
// }



// * 개선 (객체 합성)

const defaultOptions = {
  shouldRejected: false,
  data: '성공',
  errorMessage: '알 수 없는 오류',
  timeout: 1000
}


// const config = Object.assign({}, defaultOptions);
// const config = {...defaultOptions};



// function delayP(shouldRejected, data, errorMessage, timeout = 1000){
function delayP(options){

  // const {shouldRejected, data, errorMessage, timeout} = options; // => 구조분해할당
  // const {shouldRejected, data, errorMessage, timeout} = config; // => 구조분해할당
  
  
  // timeout을 가져오기 위해 defaultOptions 먼저 복사해줌 (options이 숫자일 수도 있기 때문)
  let config = {...defaultOptions}

  if(isNumber(options)) {
    config.timeout = options;
  }

  if(isObject(options)) {
    config = {...defaultOptions, ...options};
  }

  let {shouldRejected, data, errorMessage, timeout} = config;
  
  // console.log(config);
  

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!shouldRejected){
        resolve(data);
      }
      else{
        reject({message:errorMessage});
      }
    }, timeout);
  })
}


// 개선 이유 : 이렇게 실행하면 편하지 않을까?
// delayP(true, '성공!', '알 수 없는 오류!', 1000);

// delayP({
  // shouldRejected: false,
  // data: '성공',
  // errorMessage: '알 수 없는 오류',
  // timeout: 1000
// })

delayP(5000);




// 프로미스 체이닝으로 콜백의 한계를 극복함.
// delayP()
//   .then((res) => {
//     console.log(res);
//     first.style.top = '-100px';
//     second.style.top = '100px';

//     return delayP();
//   })

//   .then((res) => {
//     console.log(res);
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(-360deg)';

//     return delayP();
//   })
//   .then((res) => {
//     first.style.top = '0px';
//     second.style.top = '0px';
//     console.log(res);
//   });

