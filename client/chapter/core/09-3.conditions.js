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

let thisTime = LATE_NIGHT;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */
// switch (thisTime) {
//   // 조건 유형(case): '아침'
//   // '뉴스 기사 글을 읽는다.'
//   case MORNING:
//     console.log('뉴스 기사 글을 읽는다.');
//     break;

//   // 조건 유형(case): '점심'
//   // '자주 가는 식당에 가서 식사를 한다.'
//   case LUNCH:
//     console.log('자주 가는 식당에 가서 식사를 한다.');
//     break;

//   // 조건 유형(case): '저녁'
//   // '동네 한바퀴를 조깅한다.'
//   case DINNER:
//     console.log('동네 한바퀴를 조깅한다.');
//     break;

//   // 조건 유형(case): '밤'
//   // '친구에게 전화를 걸어 수다를 떤다.'
//   case NIGHT:
//     console.log('친구에게 전화를 걸어 수다를 떤다.');
//     break;

//   // 조건 유형(case): '심야'
//   // 조건 유형(case): '새벽'
//   // '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'
//   case LATE_NIGHT:
//   case DAWN:
//     console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
//     break;
// }


/* switch문 → if문 변환 --------------------------------------------------- */

// if (thisTime === LATE_NIGHT || thisTime === DAWN) {
//   console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
// } else if(thisTime === MORNING) {
//   console.log('뉴스 기사 글을 읽는다.');
// } else if(this === LUNCH) {
//   console.log('자주 가는 식당에 가서 식사를 한다.');
// }


/* switch vs. if -------------------------------------------------------- */

// 1. 변수에 담는다 -> prompt를 통해서 숫자를 입력받는다. (0~6까지)
// 애초에 프롬프트에서 값을 받을 때 숫자로 바꿔주는 방법 (2)
// let value = +prompt('0 ~ 6까지의 숫자를 입력해주세요.');

// 2. switch case문을 사용해서
// 인수를 받을 때 숫자로 변경해주는 방법 (1)
// switch(Number(value)) {
// switch(value) {
//   case 0: console.log('일'); break;
//   case 1: console.log('월'); break;
//   case 2: console.log('화'); break;
//   case 3: console.log('수'); break;
//   case 4: console.log('목'); break;
//   case 5: console.log('금'); break;
//   case 6: console.log('토'); break;
// }

// 나는.. 이렇게 힘들게 했는데...
// switch(value) {
//   case '0':
//     console.log('일');
//     break;
//   case '1':
//     console.log('월');
//     break;
//   case '2':
//     console.log('화');
//     break;
//   case '3':
//     console.log('수');
//     break;
//   case '4':
//     console.log('목');
//     break;
//   case '5':
//     console.log('금');
//     break;
//   case '6':
//     console.log('토');
//     break;
// }

// 3. 0~6까지 랜덤수를 받아서
// Math.floor : 반내림
// Math.round : 반올림
// let random = Math.floor(Math.random() * 7);

// console.log(random);

// switch(random) {
//   case 0: console.log('일'); break;
//   case 1: console.log('월'); break;
//   case 2: console.log('화'); break;
//   case 3: console.log('수'); break;
//   case 4: console.log('목'); break;
//   case 5: console.log('금'); break;
//   case 6: console.log('토'); break;
// }

// * 함수는 하나의 기능만을 수행하는 것
// function getDay() {
//   const value = Math.floor(Math.random() * 7);

//   console.log(value);

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

// * 함수 분리시키기
// Separation of concerns (관심사의 분리) : 개발 방법론 중 하나

// 랜덤 수 뽑아내기
function getRandom(n) {
  const value = Math.floor(Math.random() * n);
  return value;
}

// getRandom 함수를 getDay에 담기
function getDay(value) {

  switch(value) {
    case 0: return '일';
    case 1: return '월';
    case 2: return '화';
    case 3: return '수';
    case 4: return '목';
    case 5: return '금';
    case 6: return '토';
  }
}

// getDay(getRandom(7));

console.clear();

// weekend 함수를 만들어보자
function weekend() {
  // getDay를 실행해서 요일을 받아옴 일 ~ 월
  const today = getDay(getRandom(7));

  // 해당 요일을 가지고 토, 일 => 주말입니다.
  // 평일이면 평일입니다.
  // today.includes('토') || today.includes('일') 과 같다.
  // if (today === '토' || today === '일') {
  //   return '주말입니다!'
  // } else {
  //   return '평일입니다.'
  // }

  // const day = today.includes('토') ? '토요일' : today.includes('일') ? '일요일' : '평일';
  // return day;

  return today.includes('토') ? '토요일' : today.includes('일') ? '일요일' : '평일';
}

// console.log(weekend());

const resultDay = weekend();
console.log(resultDay);