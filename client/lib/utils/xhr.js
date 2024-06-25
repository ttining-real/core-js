
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
  
  xhr.open(method, url);

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


xhr.post(
  ENDPOINT,
  (data)=>{
    console.log( data );
  },
  (err)=>{
    console.log( err );
  }
)


// console.dir(xhr);



/* -------------------------------------------- */
/*               xhr Promise 방식               */
/* -------------------------------------------- */



// xhr
// .post(ENDPOINT)
// .then()
// .then()