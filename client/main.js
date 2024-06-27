/* global gsap */

import { 
  tiger,
  delayP,
  getNode,
  changeColor,
  clearContents,
  renderSpinner,
  renderUserCard,
  renderEmptyCard,
 } from "./lib/index.js";


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


// const ENDPOINT = 'https://jsonplaceholder.typicode.com/users'
const ENDPOINT = 'http://localhost:3000/users'


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

  // await delayP(2000);

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


// 삭제 버튼 누르면 user card 지워지게
// 이벤트 위임

function handleDeleteCard(e) {

  const button = e.target.closest('button');

  if(!button) return; // button 없을 경우
  // console.log(button);


  // data-index는 article이 가지고 있음
  // button에 인접한 article을 찾기 위해 closest 한 번 더 사용
  const article = button.closest('article');
  const index = article.dataset.index.slice(5); // 숫자만 선택
  // console.log(index)

  // 삭제 -> delete 통신 (id)
  // 내가 선택한 것이 몇 번째 카드인지 선택해야함
  tiger.delete(`${ENDPOINT}/${index}`)
  .then(() => {
    // 요청 보내고 렌더링 하기
    clearContents(userCardInner)
    renderUserList()
  })

  // tiger.get()
  // 요청보내기 렌더링하기
}


userCardInner.addEventListener('click', handleDeleteCard)



const createButton = getNode('.create');
const cancelButton = getNode('.cancel');
const doneButton = getNode('.done');


function handleCreate() {
  
  // autoAlpha => visibility : initial, opacity: 1
  gsap.to('.pop', {autoAlpha: 1})

}

function handleCancel(e) {
  e.stopPropagation()
  gsap.to('.pop', {autoAlpha: 0})
}


// 생성 버튼 클릭 시 유저 추가
function handleDone(e) {
  e.preventDefault();
  
  const name = getNode('#nameField').value;
  const email = getNode('#emailField').value;
  const website = getNode('#siteField').value;

  console.log( name, email, website );

  // const obj = {
  //   name: name, 
  //   email: email, 
  //   website: website
  // }
  // 어차피 객체니까 바로~

  tiger.post(ENDPOINT, {name, email, website})
  .then(() => {
    // 순서 보장을 위해 then 사용
    // 1. 팝업 닫기
    gsap.to('.pop', {autoAlpha: 0})

    // 2. 카드 컨텐츠 비우기
    clearContents(userCardInner);

    // 3. user-card 렌더링 하기
    renderUserList();
  })

  
}



createButton.addEventListener('click', handleCreate);
cancelButton.addEventListener('click', handleCancel);
doneButton.addEventListener('click', handleDone);