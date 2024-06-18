/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector (★)
// - querySelectorAll (★)
// - closest



// document.querySelector 쓰기 귀찮으니까
// 함수로 만들어보자
// => getNode를 $로 쓰면 제이쿼리 문법이 된다.

// default parameter 설정해주기
// function getNode(node, context = document) {
  
//   // 코드를 계속 개선해보자.
//   // if(typeof context === 'string') { // (1)
//   // if(isString(context)) context = document.querySelector(context); // (2)

//   // console.log(context.nodeType !== document.ELEMENT_NODE);
//   // console.log(context.nodeType !== 9);

//   // context가  document가 아니라면 querySelector를 돌아줘. // (3)
//   if(context.nodeType !== 9) context = document.querySelector(context);

//   return context.querySelector(node);
// }

// function getNodes(node, context = document) {

//   if(context.nodeType !== 9) context = document.querySelector(context);

//   return context.querySelectorAll(node);
// }
// * => getNode 함수 lib/dom/getNode.js로 이동

//         자식,  부모
// getNode('.list', '#visual-section') // ul
getNode('.list') // ul
// getNodes('.list > li') // [li, li]





// 1. id가 visual-section인 section 태그 요소
const section = document.querySelector('#visual-section');


// 2. class가 list인 ul 태그 요소
const list = document.querySelector('.list');


// 3. list 요소 안에 about li 태그 요소
// document도 결국 context이다. => 범주를 지정해줄 수 있다.
// const about = document.querySelector('.list > li:nth-child(2)');
const about = list.querySelector('li:nth-child(2)');


// 3-1. list 요소 안에 about이라는 텍스트를 가진 li 태그 요소

// const aboutLi = [...list.children].find((li) => {
//   // textContent : 문자만 뽑아내줌
//   return li.textContent === 'about';
// })

const aboutLi = [...list.children].find(li => li.textContent === 'about')

// innerHTML도 있지만, 보안에 취약하기 때문에 텍스트만 가져올 거라면
// find를 사용하는 것이 좋다.




// 4. name 속성이 search-box인 form 태그 요소
// css의 속성 선택자를 똑같이 사용할 수 있다.
const form = section.querySelector('form[name="search-box"]');


// 5. form 요소 안에 있는 모든 자식 요소
const children = form.children;
// const children = form.querySelectorAll('*');

// 6. form 요소 안에 있는 input 태그 요소
// const input = form.lastElementChild;
// const input = children[1];
const input = children[children.length-1];






/* 문서 대상 확인 */
// - matches
// - contains

