/* ---------------------------------------------------------------------- */
/* Iterable Object                                                        */
/* ---------------------------------------------------------------------- */

// 배열을 일반화 한 객체
// for-of 문을 사용할 수 있는 객체
// Symbol.Iterator 메서드가 필히 구현되어야 함
// Symbol.Iterator 메서드는 이터레이터 객체를 반환하며
// 이터레이터 객체는 next() 메서드를 가짐 ({ done: Boolean, value: any } 타입 반환)

const arr = '1 2 3 4 5 6'.split(' ');

// console.log( arr.next() );

const iter = arr[Symbol.iterator]();

// for of가 next와 value값을 다 찍어주고 있음
// for(const a of iter) { 
//   console.log( a );
// }

console.log( iter.next().value );
console.log( iter.next().value );
console.log( iter.next().value );
console.log( iter.next().value );
console.log( iter.next().value );
console.log( iter.next().value );
console.log( iter.next().value );


const range = {
  from:1,
  to:5,
  length:5,
  [Symbol.iterator](){
    let current = this.from;
    let last = this.to;

    return {
      next(){
        if(current <= last) {
          return {value:current++, done:false}
        } else {
          return {don:true}
        }
      }
    }
  }
}





// * generator function
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

console.log(gen().next());
console.log(gen().next());
console.log(gen().next());

const gene = gen();

console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next()); // done: true

const customIter = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
    return 4; // 접근 불가
  }
}

// 객체지만 순환할 수 있다.
for(const a of customIter) {
  console.log(a);
}





// 유사배열 vs. 이터러블
// - 유사배열 : 인덱스 키와 length 속성을 가진 객체
// - 이터러블 : Symbol.Iterator 메서드를 가지는 객체




// * generator function
// function* idGenerator(){
//   let id = 1;
//   while(true){
//     yield ++id
//   }
// }


// 다른 아이디가 무한대로 생성됨
function* idGenerator(){
  while(true){
    yield `user-${crypto.randomUUID()}`
  }
}


const id = idGenerator();

console.log(id.next()); // 무한대로 증가

// 1. 일관된 반복 동작 제공 (for ... of)
// 2. 커스텀 반복 제어 가능 (객체를 반복 가능한 상태로)
// 3. 지연 계산 (필요할 때마다 반복을 돌림)
// 4. 무한 시퀀스 생성 (무한대의 값 생성)
// 5. 비동기 반복 작업 가능
// 6. 다양한 데이터 소스와의 통합 (Map, Set)





// 유사배열, 이터러블 배열화