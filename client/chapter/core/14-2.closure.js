
// 클로저를 설명하기 위한 earth 함수

/* normal function */
function earth(){
 
  let water = true;
  let gravity = 10;

  // function tiger(){
  // }

  // return tiger;

  // tiger를 어차피 반환할 거라면 바로 return하자!
  
  return function(value){
    gravity = value;
    
    return [water,gravity]
  }
}


/* arrow function */
// const earth = () => {
 
//   let water = true;
//   let gravity = 10;
  
//   return  (value) => {
//     gravity = value;

//     return [water,gravity]
//   }
// }


const ufo = earth()

// const ufo2 = earth()

ufo(-10)




/* -------------------------------------------------------------------------- */
/*      button type="button">누르지마!</button> 에 대한 이벤트 리스너 함수       */
/* -------------------------------------------------------------------------- */
const button = document.querySelector('button');

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



// IIFE 패턴 사용
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



// 함수는 값 => 어디든 들어갈 수 있습니다. 

// 함수 표현식 

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