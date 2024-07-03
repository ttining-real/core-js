

class UserCard extends HTMLElement {

  constructor() {
    super();
    // shadow dom
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
      <div>nickName : ttining-angel</div>
      <slot name="username"></slot>
      <slot name="common"></slot>
      <slot></slot>
    `;
  }

}


customElements.define('user-card', UserCard);