
class Button extends HTMLElement {

  constructor() {
    super();

    this.button = document.querySelector('button');
    
  }

  connectedCallback() {
    this._render(); // 연결이 될 때 1회 호출
  }

  disconnectedCallback() {

  }

  static get observedAttributes() {
    // id 값을 감시
    return ['id'];
  }

  // 속성이 변경될 때마다 같이 변경된다.
  attributeChangedCallback(name, oldValue, newValue) {
    console.log( name, oldValue, newValue );
    
    // 속성이 변경되면 _render 다시 호출
    if(oldValue !== newValue) {
      this._render();
    }
  }

  // _render 메서드
  _render() {
    this.button.textContent = this.id;
  }
}

// 'c-button' 버튼 정의, Button 클래스와 연결
customElements.define('c-button', Button);

const c = document.querySelector('c-button');
let count = 0;

c.addEventListener('click', () => {
  c.setAttribute('id', ++count);
})