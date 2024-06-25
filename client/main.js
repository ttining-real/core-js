import { getNodes, diceAnimation } from './lib/index.js';

// 1. 주사위 애니메이션
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation() 실행될 수 있도록

// 구조분해할당
const [rollingButton, recordButton, resetButton] = getNodes(
  '.buttonGroup > button'
);

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
      console.log('1클');
      stopAnimation = setInterval(diceAnimation, 200);
    } else {
      console.log('2클');
      clearInterval(stopAnimation);
    }

    isClicked = !isClicked; // 토글 기능 수행
  };
})();

rollingButton.addEventListener('click', handleRollingDice);
