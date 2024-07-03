class Button extends HTMLElement {

  constructor(){
    super();

    // attachShadow를 이용해 c-button의 쉐도우 돔을 열어준다.
    this.attachShadow({mode: 'open'});
    // console.log(this.shadowRoot);

    // 그 안에(shadowRoot) 원하는 태그를 집어 넣는다.
    this.shadowRoot.innerHTML = `
      <button>Hello</button>
    `

  }

  connectedCallback(){

  }

  disconnectedCallback(){

  }


}


customElements.define('c-button',Button);

console.log(document.querySelector('c-button')); // mode가 open이어도 접근 자체가 안된다.
console.log(document.querySelector('c-button').shadowRoot); // mode가 closed면 shadowRoot에 접근되지 않는다.