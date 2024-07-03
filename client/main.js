
// * 2
// HTMLElement을 확장시켜 MyElement를 만들겠다. (MyElement라는 커스텀 태그를 만듦)
class MyElement extends HTMLElement {
  
  constructor() {
    super(); // 부모의 능력을 내가 상속 받겠다. (super를 써주지 않으면 에러가 난다.)
  }

  // 엘리먼트가 문서에 추가될 때 브라우저가 호출하는 메서드
  connectedCallback() {
    console.log('탄생함');
  }

  // 해제됐을 때 호출되는 메서드
  disconnectedCallback() {
    console.log('죽음');
  }
}

// 태그 이름 정하기  (사용할 태그 이름, 컴포넌트 연결)
customElements.define('c-element', MyElement)



// * 2
// document.body.appendChild를 이용한 태그 생성도 가능하다. (이걸 더 많이 사용)
const elem = document.createElement('c-element');
// document.body.appendChild(elem);

const app = document.getElementById('app')
app.appendChild(elem);