/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

// * 배열인지 체크하는 함수
// function isArray(data) {
//   return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array'
// }


// * 타입 체크하는 함수 (재사용)
// function typeOf(data) {
//   return Object.prototype.toString.call(data).slice(8, -1).toLowerCase()
// }


// const typeOf = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase()

// * arrow
// const isArray = data => typeOf(data) === 'array'
// const isNull = data => typeOf(data) === 'null'
// const isNumber = data => typeOf(data) === 'number'
// const isObject = data => typeOf(data) === 'object'
// const isSymbol = data => typeOf(data) === 'symbol'
// const isBigInt = data => typeOf(data) === 'bigint'
// const isFunction = data => typeOf(data) === 'function'
// const isMath = data => typeOf(data) === 'math'
// const isString = data => typeOf(data) === 'string'
// const isUndefined = data => typeOf(data) === 'undefined'


// isArray(data);


const people = [
  {
    id:0,
    name:'안재명',
    age:25,
    job:'물음표살인마',
    imgSrc:'https://randomuser.me/api/portraits/thumb/men/50.jpg',
    imgAlt:'대체 텍스트입니다.'
  },
  {
    id:1,
    name:'황선우',
    age:51,
    job:'요식업 사장님',
    imgSrc:'https://randomuser.me/api/portraits/thumb/men/65.jpg',
    imgAlt:'대체 텍스트입니다.'
  },
  {
    id:2,
    name:'유진',
    job:'디스코드 봇',
    age:12,
    imgSrc:'https://randomuser.me/api/portraits/thumb/men/75.jpg',
    imgAlt:'대체 텍스트입니다.'
  },
  {
    id:3,
    name:'김한울',
    job:'비둘기',
    age:39,
    imgSrc:'https://randomuser.me/api/portraits/thumb/men/78.jpg',
    imgAlt:'대체 텍스트입니다.'
  }
]



/* 요소 순환 ---------------------------- */

// forEach
const job = people.forEach((user)=>{
  console.log(user.job);
});



// forEach 어디다 써요?
// const first = document.querySelector('.first');
// const second = document.querySelector('.second');
// const third = document.querySelector('.third');

// first.addEventListener('click', ()=>{
//   console.log('first를 클릭하셨습니다.');
// })
// second.addEventListener('click', ()=>{
//   console.log('second를 클릭하셨습니다.');
// })
// third.addEventListener('click', ()=>{
//   console.log('third를 클릭하셨습니다.');
// })


const span = document.querySelectorAll('span');

span.forEach((tag)=>{
  //                           arrow function 사용하면 this를 못 찾음
  tag.addEventListener('click', function(){
    this.style.color = 'dodgerblue'
    this.style.fontWeight = 'bold'
  })
})

// event delegation (이벤트 위임) : 부모에게 이벤트를 걸고 자신이 그 이벤트를 사용할 수 있게 하는 것




/* 원형 파괴 ----------------------------- */

// push
// people.push('admin')


// pop
// people.pop()


// unshift


// shift


// reverse
// people.reverse() // 원형을 파괴하는 형태이기 때문에, 배열을 복사해서 사용하는 것이 좋다.
const arr = [...people];
arr.reverse();

// splice
// people.splice(0,2,'안녕','잘가');

// sort
// function compare(a,b){
//   if(a.age > b.age) return 1; // 첫 번째 값이 두 번째 값보다 큰 경우
//   if(a.age == b.age) return 0; // 두 값이 같은 경우 
//   if(a.age < b.age) return -1; // 첫 번째 값이 두 번째 값보다 작은 경우
// }

// people.sort(compare); // sort는 compare 함수가 필요하다. (조건에 따라 정렬)

// 구조 분해 할당
function compare({age:a}, {age:b}){
  if(a > b) return 1; // 첫 번째 값이 두 번째 값보다 큰 경우
  if(a == b) return 0; // 두 값이 같은 경우 
  if(a < b) return -1; // 첫 번째 값이 두 번째 값보다 작은 경우
}

// people.sort(compare);




/* 새로운 배열 반환 ------------------------ */

// concat
// slice

// toSpliced
const toSpliced = people.toSpliced(0,2);


// toSorted
const toSorted = people.toSorted(compare);

// toReversed
const toReversed = people.toReversed();



// * map

// 이름만 담은 배열 반환
// const nameList = people.map((user)=>{
//   return user.name
// });

const nameList = people.map(u => u.name);

// 현재 나이에 + 2 배열 반환
// const age = people.map((user) => {
//   return user.age + 2
// })
const age = people.map(u => u.age + 2);


const cardTag = people.map(({name,age,job,imgSrc,imgAlt})=>{
  
  let template = /* html */`
    <li class="userCard">
      <div class="imageField">
        <img src="${imgSrc}" alt="${imgAlt}" />
      </div>
      <ul class="contents">
        <li> <span class="strong">이름</span> : ${name}</li>
        <li> <span class="strong">나이</span> : ${age}</li>
        <li> <span class="strong">직업</span> : ${job}</li>
      </ul>
    </li>
  `
  return template;
})

const ul = document.querySelector('ul');

cardTag.forEach(tag => ul.insertAdjacentHTML('beforeend',tag))




/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes




/* 요소 찾기 ------------------------------ */

// find : 제일 처음 찾은 대상만 반환함 (단일대상 반환)

const 황 = people.find((item) => {
  return item.name === '황선우'
})

// findIndex




/* 요소 걸러내기 --------------------------- */

// * filter : 배열을 반환함
const filter = people.filter((item) => {
  return item.age > 20
})

// console.log(...filter);




/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce

// const reduce = people.reduce((acc, cur) => {
//   return acc + cur.age
// }, 0)

const reduce = people.reduce((acc, cur) => acc + cur.age, 0)


const template = people.reduce((acc, cur) => {
  return acc + `<li class="userCard">${cur.name} : ${cur.age}</li>` 
}, '')


ul.insertAdjacentHTML('beforeend', template);



// reduceRight




/* string ←→ array 변환 ------------------ */

const str = '유진 정민 현주 재명';

// split (문자를 배열로)
const stringToArray = str.split(' ');
console.log(stringToArray);


// join (배열을 문자로)
const arrayToString = stringToArray.join('-');
console.log(arrayToString);


// const user = {
//   grades:[1,2,3],
//   sayHi(){
    
//     this.grades.forEach(()=>{
//       this
//     })
//   }
// }


const products = [
  {name: '냉동 만두', price: 10000, brand: '비비고'},
  {name: '냉동 피자', price: 15000, brand: '오뚜기'},
  {name: '냉동 치킨 너겟', price: 12000, brand: '하림'},
  {name: '냉동 감자튀김', price: 8000, brand: '맥케인'},
  {name: '냉동 새우', price: 18000, brand: '곰곰'}
];


/* forEach */
// [1,2,3].forEach(()=>{})

const forEach = (f,i) => {
  for(const a of i) f(a)
}

forEach((item)=>{
  console.log( item );
},[1,2,3])




/* map */
let result = [];

for(const a of [1,2,3]){
  result.push(a + 2);
}


const map = (f, i) => {
  let result = [];

  for(const a of i) {
    result.push( f(a) )    
  }

  return result
}

console.log( map(n => n + 2, [1,2,3]) );



/* filter */
const _filter = (f,i) => {
  let result = [];
  
  for(const a of i){
    if(f(a)) result.push(a);
  }

  return result;
}

_filter(n => n > 3,[1,2,3,4,5])



/* reduce */

const _reduce = (f, acc, i) => {
  // let total = 0;
  
  if(!i) {
    i = acc;
    acc = i.shift()
    // i = acc[Symbol.iterator]();
    // acc = i.next().value;
  }

  for(const a of i){
    acc = f(acc,a);
  }

  return acc;
}

const add = (a,b) => a + b;

// add(0, 1)
// add(add(0, 1),2)
// add(add(add(0, 1),2),3)

// console.log(_reduce(add, 0, [1,2,3]));

console.log(_reduce((t, p) => t + p.price, 0, products));


console.log( 

  _reduce(
    add,
    map(p => p.price,
      _filter(p => p.price < 10000,products)),
  )
  
);