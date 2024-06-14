/* ---------------- */
/* Switch           */
/* ---------------- */

// step1. switch문 사용해보기
let a = 100;

switch (a) {
  case 10:
    console.log('10 입니다!');
    break;

  case 11:
    console.log('11 입니다!');
    break;

  case 12:
    console.log('12 입니다!');
    break;

  default:
    console.log('10, 11, 12가 없습니다.');
}

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = MORNING;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */
// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

switch (thisTime) {
  case MORNING:
    console.log('씻고 출근길 배웅을 하러 간다.');
    break;

  case LUNCH:
  case DINNER:
    console.log('오늘 뭐먹지.');
    break;

  case NIGHT:
    console.log('수업 내용을 복습한다.');
    break;

  case LATE_NIGHT:
    console.log('유튜브를 보다 하루를 마무리한다.');
    break;

  case DAWN:
    console.log('꿈속에 빠져있을 것이다.');
    break;
}

/* switch문 → if문 변환 --------------------------------------------------- */

if(thisTime === LUNCH || thisTime === DINNER) {
  console.log('오늘 뭐먹지.');

} else if(thisTime === MORNING) {
  console.log('씻고 출근길 배웅을 하러 간다.');

} else if(thisTime === NIGHT) {
  console.log('수업 내용을 복습한다.');

} else if(thisTime === LATE_NIGHT) {
  console.log('유튜브를 보다 하루를 마무리한다.');

} else {
  console.log('꿈속에 빠져있을 것이다.');
}

/* switch vs. if -------------------------------------------------------- */

// 1. 변수에 담는다 -> prompt를 통해서 숫자를 입력받는다. (0~6까지)
// 2. switch case 문을 사용해서
// 0 : 일
// 1 : 월
// 2 : 화
// 3 : 수
// 4 : 목
// 5 : 금
// 6 : 토

// prompt에서 받아온 값은 문자열이다.
// (1) 인수를 받을 때 숫자로 변경해주는 방법 (1)
// const value = prompt('0 ~ 6까지의 숫자를 입력해주세요.');

// switch(Number(value)) {
//   case 0: console.log('일'); break;
//   case 1: console.log('월'); break;
//   case 2: console.log('화'); break;
//   case 3: console.log('수'); break;
//   case 4: console.log('목'); break;
//   case 5: console.log('금'); break;
//   case 6: console.log('토'); break;
// }

// (2) 프롬프트에서 값을 받으면서 숫자로 바꿔주는 방법 (2)
// const value = +prompt('0 ~ 6까지의 숫자를 입력해주세요.');

// switch(value) {
//   case 0: console.log('일'); break;
//   case 1: console.log('월'); break;
//   case 2: console.log('화'); break;
//   case 3: console.log('수'); break;
//   case 4: console.log('목'); break;
//   case 5: console.log('금'); break;
//   case 6: console.log('토'); break;
// }


// 3. 0~6까지 랜덤수를 받아서 수에 맞는 요일 출력
// Math.floor : 반내림
// Math.round : 반올림

// const number = getRandom(7);

// 요일
// function getDay() {
//   const value = Math.floor(Math.random() * 7);

//   switch(value) {
//     case 0: console.log('일'); break;
//     case 1: console.log('월'); break;
//     case 2: console.log('화'); break;
//     case 3: console.log('수'); break;
//     case 4: console.log('목'); break;
//     case 5: console.log('금'); break;
//     case 6: console.log('토'); break;
//   }
// }

// * 함수는 하나의 기능만을 수행하는 것
// * Separation of concerns (관심사의 분리) - 개발 방법론 중 하나

// 랜덤 수 뽑아내기
function getRandom(n) {
  const value = Math.floor(Math.random() * n);
  return value;
}

function getDay(value){

  switch (value) {
    case 0: return '일';
    case 1: return '월';
    case 2: return '화';
    case 3: return '수';
    case 4: return '목';
    case 5: return '금';
    case 6: return '토';
  }
}

// getRandom 함수를 getDay에 담기
getDay(getRandom(7));

console.clear();

// 응용 : weekend 함수를 만들어보자
function weekend() {
  // getDay를 실행해서 요일을 받아옴 일 ~ 월
  const today = getDay(getRandom(7));

  
  // 해당 요일을 가지고 토,일 => 주말입니다.
  // if(today.includes('토') || today.includes('일')) {
  //   return '주말입니다.'
  // } else {
  //   return '평일입니다.'
  // }


  // if.. switch.. 삼항식
  // const day = today.includes('토') ? '토요일' : today.includes('일') ? '일요일' : '평일';
  // return day;

  return today.includes('토') ? '토요일' : today.includes('일') ? '일요일' : '평일'
}

const day = weekend();
console.log(day); // '평일'
