
function earth(){

  let water = true;
  let gravity = 10;

  function tiger(){

  }


  return tiger;

}


const ufo = earth();

// 지구에 사는.. 호랑이가... 쫓겨났어요...
// 그리고 호랑이는 ufo에 납치 당했어요....

const button = document.querySelector('button');



/* -------------------------------------------------------------------------- */
/*      button type="button">누르지마!</button> 에 대한 이벤트 리스너 함수       */
/* -------------------------------------------------------------------------- */

/* normal function */
// function handleClick(){

//   let isClicked = false;

  
//   function inner() {
//     if(!isClicked){

//       document.body.style.background = 'orange'
//     }else{
  
//       document.body.style.background = 'white'
//     }
  
//     isClicked = !isClicked;
//   }

//   return inner;
// }



// IIFE
/* arrow function */
const handleClick = (() => {

  let isClicked = false;
  
  return () => {
    if(!isClicked){

      document.body.style.background = 'orange'
    }else{
  
      document.body.style.background = '#212121'
    }
  
    isClicked = !isClicked;
  }

})()


button.addEventListener('click',handleClick)


// react useState라는 hook.,,과 비슷하게 설계해보았습니다..~
// hook의 특징 use라는 단어가 앞에 붙음
function useState(init){
  let value = init;

  function read(){
    return value;
  }

  function write(newValue){
    value = newValue;
  }

  return [read, write]; // 함수 두개를 동시에 내보냄

}

// const result = state(10)

// const getter = result[0]
// const setter = result[1]


// 배열 => 구조 분해 할당
const [getNumber, setNumber] = useState(10)