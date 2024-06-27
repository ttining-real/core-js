import { isString } from "./type.js";

// console.log('storage');

const {localStorage:storage} = window;

// const user = {
//   name: 'ttining',
//   age: 0,
//   gender: 'female',
//   email: 'ttining@naver.com'
// }

// localStorage.setItem('user', user); // [object Object]
// localStorage.setItem('user', JSON.stringify(user));


// 문자화가 된 객체
// const data = localStorage.getItem('user');
// const data = JSON.parse(localStorage.getItem('user'));
// console.log(data);





// * 매번 JSON.stringify와 parse를 쓰기 귀찮으니 함수로 만들어보자.
// promise 객체 반환 (안전)
export function setStorage(key, value) {

  return new Promise((resolve, reject) => {
    if(isString(key)) {
      storage.setItem(key, JSON.stringify(value));
      resolve()
    } else {
      reject()
    }
  })
}

// setStorage('user', user)



export function getStorage(key) {

  return new Promise((resolve, reject) => {
    if(isString(key)) {
      resolve(JSON.parse(storage.getItem(key)));
    } else {
      reject();
    }
  })

}

// getStorage('user')


// storage 지우기
export function deleteStorage(key) {
  return new Promise((resolve, reject) => {
    !key ? storage.clear() : storage.removeItem(key);
    resolve()
  })
}

// deleteStorage('user')

// storage.removeItem('user')
// storage.clear()