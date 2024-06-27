/* global gsap */

import { 
  tiger,
  getNode,
  renderUserCard,
  changeColor,
  delayP,
  renderSpinner,
  renderEmptyCard
 } from './lib/index.js';

// xhrPromise.get('https://jsonplaceholder.typicode.com/users')
// .then(console.log)



// async function getData() {
//   const data = await xhrPromise.get('https://jsonplaceholder.typicode.com/users')
//   console.log(data);
// }



// const getData = async () => {
//   const data = await xhrPromise.get('https://jsonplaceholder.typicode.com/users')
//   data.forEach((item) => {
//     console.log(item.name);
//   })  
//   console.log(data);  
// }

// getData()


const ENDPOINT = 'https://jsonplaceholder.typicode.com/users'


// const response = tiger.get(ENDPOINT);

// console.log(response);
// console.log(response.data);



// 1. user 데이터 fetch 하기
//   - tiger.get

// 2. fetch 데이터의 유저 이름만 출력
//   - 데이터 유형 파악 ex) 객체, 배열, 숫자, 문자
//   - 적당한 메서드 사용하기

// 3. 유저 이름 화면에 렌더링

const userCardInner = getNode('.user-card-inner');

async function renderUserList() {

  // 로딩 스피너 렌더링
  renderSpinner(userCardInner)

  await delayP(2000);

  try {
    // 로딩 스피너 제거
    // loadingSpinner.remove() // => js로 동적 생성해서 변수로 html 클래스 잡아서 사용할 수 없음
    // getNode('.loadingSpinner').remove();
    

    // 애니메이션을 제거
    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() { // 끝나는 시점
        this._targets[0].remove()
      }
    })


    const response = await tiger.get(ENDPOINT);

    // console.log(response.data);
    // 데이터에 접근하기 위해 .data을 해줌
    const data = response.data;
    // console.log(data);

    data.forEach(user => renderUserCard(userCardInner, user))

    changeColor('.user-card')

    gsap.from('.user-card', {
      x: 100,
      opacity: 0,
      // stagger: 0.1
      stagger: {
        // each: 0.1
        amount: 1,
        from: 'center' // center, edges, end
      }
    })
  }

  catch {
    console.error('에러가 발생했습니다.')
    renderEmptyCard(userCardInner)
  }

  
}

renderUserList()