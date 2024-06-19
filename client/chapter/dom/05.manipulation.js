/* -------------------------- */
/* DOM Manipulation           */
/* -------------------------- */


/* 노드 생성 메서드 --------------------------------------------------------- */

// - document.createElement(tagName) – 태그 이름을 사용해 새로운 요소 생성
// - document.createTextNode(value) – 새로운 텍스트 노드 생성
// - element.cloneNode(deep) – 요소 복제. deep==true일 경우 모든 자손 요소도 복제


const div = document.createElement('div');

div.className = 'text-box'
div.textContent = '본문 시작'
div.setAttribute('data-value', 1)

console.log(div);

document.body.append(div) // html에 붙여줌








/* 노드 삽입, 삭제 메서드 ---------------------------------------------------- */

// - node.append(노드나 문자열) – node 끝에 노드를 삽입
// - node.prepend(노드나 문자열) – node 맨 앞에 노드를 삽입
// - node.before(노드나 문자열) – node 이전에 노드를 삽입
// - node.after(노드나 문자열) – node 다음에 노드를 삽입
// - node.replaceWith(노드나 문자열) – node를 대체
// - node.remove() – node를 제거


/* '오래된' 메서드 ----------------------------------------------------------- */

// - parent.appendChild(node)
// - parent.insertBefore(node, nextSibling)
// - parent.removeChild(node)
// - parent.replaceChild(newElement, node)


/* 특정 위치에 삽입 --------------------------------------------------------- */

// - insertAdjacentHTML

const h1 = getNode('h1');

// h1.insertAdjacentHTML('beforeend', `<div class="title"> like lion </div>`)

const tag = `<div class="title"> like lion </div>`

document.body.insertAdjacentHTML('beforeend', tag)

// before >> beforebegin - elem 바로 앞에 삽입
// first >> afterbegin - elem 안쪽 첫 번째 삽입
// last >> beforeend - elem 안쪽 마지막 삽입
// after >> afterend - elem 바깥쪽 삽입


// inser before / first / last / after 함수를 만들어보자
// function insertBefore(node,text){
//   if(isString(node)) node = getNode(node);
//   node.insertAdjacentHTML('beforebegin',text)
// }

// function insertFirst(node,text){
//   if(isString(node)) node = getNode(node);
//   node.insertAdjacentHTML('afterbegin',text)
// }

// function insertLast(node,text){
//   if(isString(node)) node = getNode(node);
//   node.insertAdjacentHTML('beforeend',text)
// }

// function insertAfter(node,text){
//   if(isString(node)) node = getNode(node);
//   node.insertAdjacentHTML('afterend',text)
// }

// insertLast('body', 'before');




// - insertAdjacentElement
// - insertAdjacentText





// - "beforebegin" – elem 바로 앞에 html을 삽입
// - "afterbegin" – elem의 첫 번째 자식 요소 바로 앞에 html을 삽입
// - "beforeend" – elem의 마지막 자식 요소 바로 다음에 html을 삽입
// - "afterend" – elem 바로 다음에 html을 삽입