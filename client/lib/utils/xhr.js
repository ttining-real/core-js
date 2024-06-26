
// * XMLHttpREquest
// 기본 포맷
// xhr.open()
// console.log(xhr);
// xhr.send()

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

// const xhr = new XMLHttpRequest();
// xhr.open('GET', ENDPOINT)
// console.log(xhr);

//  [readyState]
// 0 : uninitialized
// 1 : loading
// 2 : loaded
// 3 : interactive
// 4 : complete   => 성공 / 실패 


const user = {
  name:'tiger',
  age:40,
  gender:'male',
};


/* -------------------------------------------------------------------------- */
/*                             xhr callback 방식                              */
/* -------------------------------------------------------------------------- */

// 객체 합성
function xhr({
  method = 'GET',
  url = '',
  body = null,
  성공 = null,
  실패 = null,
  headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}){

  // const {method='GET', url='', body=null, 성공=null, 실패=null} = options;
  
  const xhr = new XMLHttpRequest();
  
  xhr.open(method, url); // 가져오는 시간이 걸림

  Object.entries(headers).forEach(([key,value])=>{
    xhr.setRequestHeader(key,value)
  })

  xhr.addEventListener('readystatechange', () => {
    const { readyState, status, response } = xhr;

    // readyState가 4면 실행 (성공 실패 여부 X)
    if (readyState === 4) {

      // 추가적으로 상태코드와 비교해줌
      if (status >= 200 && status < 400) { // 성공
        const data = JSON.parse(response);

        성공(data); // ???
      } else { // 실패
        실패('실패!');
      }
    }
  });

  xhr.send(JSON.stringify(body));
}

// xhr(
//   'GET',
//   ENDPOINT,
//   user,
//   (data)=>{
//     console.log( data );
//    },
//   (err)=>{ 
//     console.log( err );
//   }
// )



// 1. 무조건 매개변수 순서에 맞게 작성 ✅
// 2. 매개변수 안쓰면? ✅

// xhr({
//   성공(data) {
//     console.log(data);
//   },
//   실패() {},
//   url: ENDPOINT,
// });


xhr.get = (url,성공,실패) =>{
  xhr({ url, 성공, 실패 })
}


xhr.post = (url,body,성공,실패) =>{
  xhr({ 
    method:'POST',
    body,
    url, 
    성공, 
    실패
   })
}


xhr.put = (url,body,성공,실패) =>{
  xhr({ 
    method:'PUT',
    body,
    url, 
    성공, 
    실패
   })
}


xhr.delete = (url,성공,실패) =>{
  xhr({ 
    method:'DELETE',
    url, 
    성공, 
    실패
   })
}


// xhr.post(
//   ENDPOINT,
//   (data)=>{
//     console.log( data );
//   },
//   (err)=>{
//     console.log( err );
//   }
// )


// console.dir(xhr);

// xhr({
//   method: 'DELETE',
//   onSuccess(data) {
//     console.log(data);
//   },
//   onFail(err) {
//     console.log(err);
//   },
//   url: ENDPOINT,
// });


// console.log(ENDPOINT);


/* -------------------------------------------- */
/*               xhr Promise 방식               */
/* -------------------------------------------- */

// xhr
// .post(ENDPOINT)
// .then()
// .then()
  

// url: ''
// body: null
// 이유 : body에 해당하는 객체가 없을 경우 즉 GET같은 경우에는 본문을 가지지않으니까 값이 비어있게 하려고 설정한거고 url 문자열은 비어있어도 오류가 발생하지 않게 하려고 그런것같습니다!


const defaultOptions = {
  method:'GET',
  url: '',
  body: null,
  errorMessage:'서버와의 통신이 원활하지 않습니다.',
  headers:{
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*' // 프론트 단에서의 최선
  }
}

// enumerable => 열거 가능한 => for..of/ for..in
// iterable   => 순환 가능한 => for..of 
// immutable  => 불변의

// const arr = [1,2,3];
// const newArr = [...arr,4]

export function xhrPromise(options){

  // 객체 합성과 동시에 구조분해할당
  const {method,url,body,headers,errorMessage} = {
    ...defaultOptions,
    ...options,
    headers:{
      ...defaultOptions.headers,
      ...options.headers
    }
  }

  const xhr = new XMLHttpRequest();

  xhr.open(method,url);

  Object.entries(headers).forEach(([key,value])=>{
    xhr.setRequestHeader(key,value);
  })

  xhr.send(JSON.stringify(body));

  return new Promise((resolve, reject) => {
    
    xhr.addEventListener('readystatechange',()=>{
      if(xhr.readyState === 4){
        if(xhr.status >= 200 && xhr.status < 400){
          resolve(JSON.parse(xhr.response));
        }
        else{
          reject({message:errorMessage});
        }
      }
    })
  })
}



xhrPromise.get = (url) => {
  return xhrPromise({ url })
}


xhrPromise.post = (url,body) => {
  return xhrPromise({
    url,
    body,
    method:'POST'
  })
}


xhrPromise.put = (url,body) => {
  return xhrPromise({
    url,
    body,
    method:'PUT'
  })
}


xhrPromise.delete = (url) => {
  return xhrPromise({
    url,
    method:'DELETE'
  })
}


// 줄여쓰기
// xhrPromise.get = (url) => xhrPromise({ url })
// xhrPromise.post = (url,body) => xhrPromise({ url, body, method:'POST' })
// xhrPromise.put = (url,body) => xhrPromise({ url, body, method:'PUT' })
// xhrPromise.delete = url => xhrPromise({ url, method:'DELETE' })