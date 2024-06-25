import { 
  attr,
  getNode, 
  getNodes, 
  endScroll,
  insertLast,
  diceAnimation,
  clearContents,
 } from './lib/index.js';

// 1. 주사위 애니메이션
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation() 실행될 수 있도록



// 구조분해할당
const [rollingButton, recordButton, resetButton] = getNodes(
  '.buttonGroup > button'
);
const recordListWrapper = getNode('.recordListWrapper');

// 회차, 합계를 담아둘 곳
let count = 0;
let total = 0;


function createItem(value) {
  const template = `
    <tr>
      <td>${++count}</td>
      <td>${value}</td>
      <td>${total += value}</td>
    </tr>
  `
  return template;
}


function renderRecordItem() {
  // 주사위 값 가져오기
  // const diceValue = getNode('#cube').getAttribute('dice');
  const diceValue = Number(attr(getNode('#cube'), 'dice'));

  // createItem(diceValue);

  // 1. insertLast 함수 사용
  // 2. template 전달
  // 3. diceValue interpolation(보간법) 하기
  insertLast('.recordList tbody', createItem(diceValue));

  endScroll('.recordListWrapper');
}


// let isClicked = false;
// let stopAnimation;

// function handleRollingDice() {
//   let isClicked = false;
//   let stopAnimation;

//   return () => {

//     if(!isClicked) {
//       console.log('1클');
//       stopAnimation = setInterval(diceAnimation, 200)
//     } else {
//       console.log('2클');
//       clearInterval(stopAnimation)
//     }

//     isClicked = !isClicked; // 토글 기능 수행
//   }

// }



const handleRollingDice = (() => {
  let isClicked = false;
  let stopAnimation;

  return () => {
    if (!isClicked) {
      stopAnimation = setInterval(diceAnimation, 200);
      // 기록, 초기화 버튼 disabled 설정
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      clearInterval(stopAnimation);
      // 기록, 초기화 버튼 disabled 설정
      recordButton.disabled = false;
      resetButton.disabled = false;
    }

    isClicked = !isClicked; // 토글 기능 수행
  };
})();



// 기록 버튼
function handleRecord() {
  recordListWrapper.hidden = false;

  renderRecordItem()
}


// 초기화 버튼
function handleReset() {
  recordListWrapper.hidden = true;
  clearContents('tbody')
  count = 0;
  total = 0;
}



rollingButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);
