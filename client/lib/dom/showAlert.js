import { addClass, removeClass } from './css.js';
import { isString } from '../utils/type.js';
import { getNode } from './getNode.js';


/**
 * 
 * @param {HTMLElement | String} node 
 * @param {String} message 
 * @param {Number} timeout
 * @returns {void} 
 */

export function showAlert(node, message, timeout = 1000) {
  if (isString(node)) node = getNode(node);

  node.textContent = message;

  addClass(node, 'is-active');

  // 타이머이기 때문에 시간을 보장해줄 수 없다. => 이런 애니메이션은 좋지 않다.
  // => 프로미스로 바꾸거나 gsap 쓰면 됨. ㅎㅎ
  setTimeout(() => {
    removeClass(node, 'is-active');
  }, timeout);
}

showAlert('.alert-error', '공백은 허용하지 않습니다.', 2000);
