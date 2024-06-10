/* ------------------------- */
/* Copy object by reference  */
/* ------------------------- */


// 복사(copy) vs. 참조(reference)

let message = '문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.';
let messenger = {
  name: 'kakao talk',
  manufacture: 'kakao'
};

let text = message;
let conversationTool = messenger;


// 비교 (복사 vs. 참조)
console.log(message == text);
console.log(message === text);
console.log(messenger == conversationTool);
console.log(messenger === conversationTool);


// * 객체 복사 - 얕은 복사
// 1. for ~ in 문을 사용한 복사
const cloneObject = {};

for(let key in messenger) {
  cloneObject[key] = messenger[key]
}
console.log(cloneObject); 



// 2. Object.assign()을 사용한 복사
const copyObject = Object.assign({}, messenger);

console.log(copyObject);



// 3. 전개 연산자(...)를 사용한 복사 (제일 많이 사용)
const spreadObject = {...messenger};

console.log(spreadObject);



// 4. 객체를 복사해주는 유틸 함수 

// const copiedObject = (obj)=> {
//   return Object.assign({}, obj)
// }
const copiedObject = (obj)=> Object.assign({}, obj)

// const newObject = copiedObject(obj);
// console.log(copiedObject);


// 객체 병합(합성)
const cssMapA = {
  color: '#4b004b',
  margin: '0 auto',
};

const cssMapB = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  padding: '0.4em 0.62em',
  color: '#3f9e97',
};

// 같은 값이 있으면 뒤에 오는 것이 덮어쓴다 (...cssMapB)
// let combinedCssMap = Object.assign({}, cssMapA, cssMapB);
let combinedCssMap = {...cssMapA, ...cssMapB} // 전개 합성


// 중첩된 프로퍼티에 객체를 포함하는 객체 복사
// 얕은 복사 vs. 깊은 복사
const containerStyles = {
  'min-height': '100vh',
  'max-width': {
    sm: '90%',
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140
  },
};

// let copiedContainerStyles = {...containerStyles};


// ...containerStyles로 깊은 복사하는 방법 (1depth밖에 안됨)
// let copiedContainerStyles = {
//   ...containerStyles,
//   ['max-width']:{
//     ...containerStyles['max-width']
//   }
// };


// // 1. 깊은 복사 유틸리티 함수
// function cloneDeep(object) {
//   // fromEntries : 배열을 객체로 만들어줌
//   return Object.fromEntries(
//     Object.entries(object).map(([key, value]) => {
//       let type = typeof value;
//       if (value && type === 'object') {
//         value = cloneDeep(value);
//       }
//       return [key, value];
//     })
//   );
// }


let copiedContainerStyles = cloneDeep(containerStyles);


// 1. 깊은 복사 유틸리티 함수
function cloneDeep(object) {
  // fromEntries : 배열을 객체로 만들어줌
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      let type = typeof value;
      if (value && type === 'object') {
        value = cloneDeep(value);
      }
      return [key, value];
    })
  );
}


// 2. Lodash 라이브러리 활용
// lodash 라이브러리를 사용해서 깊은 복사를 할 수도 있다.
// _.cloneDeep(value)
// 참고: https://lodash.com/docs/4.17.15#cloneDeep
// CDN : https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js


console.clear();

const defaultOptions = {
  method:'GET',
  body:null,
  headers:{
    'content':'application/json',
    'access': '*'
  }
}


// 객체 합성
function ajax(options){

  // 객체를 합성하고 새로운 객체를 생성하는 것이 안전하다.(기존 객체가 훼손될 일이 없다.)
  // const newOptions = {
  const {method, headers, body} = { // 받는 즉시 합성
    ...defaultOptions,
    ...options,
    headers:{ // headers의 값도 객체이기 때문에 (훼손될 수 있기 때문)  한 번 더 깊은 복사해주는 것.
      ...defaultOptions.headers,
      ...options.headers // 항상 뒤에 있는 것이 덮어씌워지기 때문에 커스텀은 뒤에 불러와야한다.
    }

  }

  // const {method, headers, body} = newOptions;


  // console.log(newOptions);
  console.log(method);

  defaultOptions.headers
  defaultOptions.method
  defaultOptions.body
}

// 왜 객체로 전달하는지? 순서가 상관 없기 때문
ajax({
  method: 'POST',
  body: '데이터'
})