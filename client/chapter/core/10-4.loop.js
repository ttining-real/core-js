/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  // hasOwnProperty 메서드 훼손
  hasOwnProperty(){
    return '난 누굴까~?'
  }
};

// console.log(`creator` in javaScript); // true
// console.log(`currentVersion` in javaScript); // true
// console.log(`toString` in javaScript); // true
// console.log(`valueOf` in javaScript); // true
Object.prototype.nickName = '호랑이';

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// console.log(` --- hasOwnProperty --- `);
// * 내가 가지고 있는 속성만 정확하게 확인하는 방법
// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
// console.log( javaScript.hasOwnProperty('nickName') );
// console.log( javaScript.hasOwnProperty('creator') );
// console.log( javaScript.hasOwnProperty('toString') );

// console.log(` --- Object.prototype --- `);
// 본체의 hasOwnProperty 메서드를 .call 빌려씀
// console.log(Object.prototype.hasOwnProperty.call(javaScript, 'nickName'));

// console.log(` --- for ~ in 문 --- `);
// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

for (let key in javaScript) {
  // (1)
  // console.log(key);

  // (2)
  // if(Object.prototype.hasOwnProperty.call(javaScript,key)){
  //   // console.log(key);
  //   // console.log(javaScript[key]);
  //   console.log(javaScript[key]);
  // }

  // (3) : (2)번과 동일함
  // if ({}.hasOwnProperty.call(javaScript, key)) {
  //   console.log(key);
  // }
}

// 점 표기법 => 변수 설정 x
// 대괄호 표기법 => 변수 설정 o


// 번외
// const obj = {};

// obj.nickName = 'ttining';

// Object.defineProperty(obj, 'age', {
//   value: 30,
//   enumerable: true, // 조회 가능 여부 설정
//   writable: true,
// });

const tens = [10, 100, 1000, 10_000];

for(let key in tens) {
  // console.log(key);
  console.log(tens[key]);
}

// 배열은 순서 보장이 안됨, 성능 저하 => for ... in은 객체에게 양보하자.