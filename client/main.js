

class UserCard extends HTMLElement {

  constructor() {
    super();
    // shadow dom
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
      <button type="button">btn</button>
    `;

    this.button = this.shadowRoot.querySelector('button')
    // console.log(this.button);
  }

  connectedCallback() {
    // click 했을 때 this가 clickMe 메서드를 실행
    // this.button.addEventListener('click', this.clickMe) // user-card가 아니라 button이 나옴
    this.button.addEventListener('click', () => this.clickMe()) // arrow function으로 상위 스코프의 this 가져다 씀
    // this.button.addEventListener('click', this.clickMe.bind(this)) // bind로 this 묶어줌
  }

  // 메서드 정의
  clickMe() {
    console.log('thank you 🤗');
    console.log(this);
  }

}


customElements.define('user-card', UserCard);

// console.log( document.querySelector('user-card').shadowRoot.querySelector('button'))


// function sum(){
//   console.log(this);
// }


// sum() // undefined
// sum.call({}) // {} => 실행
// sum.apply({}) // {} => 실행
// const n = sum.bind({}) // {} => 실행 x 

// n()