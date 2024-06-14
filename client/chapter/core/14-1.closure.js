/* -------------------- */
/* 클로저(Closures)       */
/* -------------------- */


// 클로저 (closure) 란?
// - JavaScript의 매우 강력한 특성으로 독립적인 변수를 참조하는 함수를 말합니다.
//   즉, 클로저에 정의된 함수는 그것이 작성된 환경을 '기억'합니다.



function sum(a,b){
  return a + b
}

const value = sum; // 함수 자체를 value 변수에 전달
// console.log( value(1,2) ); // 호출이 가능해짐



// 함수는 태어난 환경을 기억합니다.

/* normal function */
function first(){

  let x = 10;

  return function (num){
    let y = 20;
    x = num;
    return x + y;
  }

}


/* arrow function */
const first = () => {

  let x = 10;

  return (num) => {
    let y = 20;
    x = num;
    return x + y;
  }

}


// const result = first();



// counter 함수

/* normal function */
function counter () {
  let count = 0;
  return function (){
    return ++count
  }
}


/* arrow function  */
const counter = () => {
  let count = 0;
  return () => ++count
}

// counter()

// const counter = (count) => () => ++count

// counter(0)

// const a = (x) => (y) => (z) => x + y + z

// a(1)(2)(3) // 6



// const c1 = counter();
// const c2 = counter();
// const c3 = counter();



// 고차 함수
function multi(x){
  
  return function (y){
    return x * y
  }
}

const double = multi(2);
const triple = multi(3);





// 모든 함수에는 실행 컨텍스트가 있습니다. 실행 컨텍스트는 해당 함수 내의 변수와
// 해당 부모 환경에 대한 참조를 의미하는 환경으로 구성됩니다. 상위 환경에 대한 참조는
// 내부 함수가 작성된 범위 외부 또는 내부에서 호출되는지 여부에 관계없이 상위 범위의
// 모든 변수를 모든 내부 함수에 사용할 수 있게 합니다.
//
// 따라서 함수가 사실상 환경(해당 환경에 정의된 변수)에 대한 참조를 가지고 있기 때문에
// 함수가 이 환경(또는 영역(scope))을 "기억"하는 것처럼 보입니다!
//
// 모든 실행 컨텍스트에는 어휘 환경(Lexical Environment)이 있습니다.
// 이 어휘 환경은 식별자 바인딩(즉, 변수 및 관련 값)을 보유하고 있으며
// 외부 환경에 대한 참조도 가지고 있습니다.
//
// 각 환경이 접근 할 수 있는 일련의 식별자를 "범위(Scope)"라고 합니다.
// 이러한 범위를 "스코프 체인(Scope Chain)"을 통해 계층적 환경 체인에
// 중첩 할 수 있습니다.

// 어느 시점이든 하나의 실행 컨텍스트만 실행 될 수 있습니다.
// 이것이 JavaScript가 "단일 스레드"인 이유입니다.
//
// 즉, 한 번에 하나의 명령만 처리 할 수 있습니다. 일반적으로
// 브라우저는 "스택(Stack)"을 사용하여 이 실행 컨텍스트를 유지 관리합니다.
// 스택은 LIFO(Last In First Out) 데이터 구조입니다.

//
// 스택에 푸시(push) 한 마지막 것이 가장 먼저 꺼내집니다. 스택의
// 맨 위에 요소만 삽입하거나 삭제할 수 있기 때문입니다. 현재 또는
// "실행 중인" 실행 컨텍스트는 항상 스택의 맨 위에 있는 항목입니다.
//
// 실행 중인 실행 컨텍스트의 코드가 완전히 평가되면 최상위 항목이
// 팝(pop) 된 다음 실행 항목이 실행 컨텍스트를 실행하는 것으로
// 간주됩니다.
//
// 또한 실행 컨텍스트가 실행되고 있다고 해서 다른 실행 컨텍스트를
// 실행하기 전에 실행이 완료되어야한다는 것을 의미하지는 않습니다.
// 실행 중인 실행 컨텍스트가 일시 중단되고 다른 실행 컨텍스트가
// 실행 중인 실행 컨텍스트가되는 경우가 있습니다.
//
// 일시중단 된 실행 컨텍스트는 나중에 중단 된 부분을 선택합니다.
// 한 실행 컨텍스트가 이와 같이 다른 컨텍스트로 대체 될 때마다
// 새 실행 컨텍스트가 만들어져 스택에 푸시되고 현재 실행 컨텍스트가 됩니다.

// [ 실행 컨텍스트 N + 3  ] ⬅︎ 현재 실행 컨텍스트
// [ 실행 컨텍스트 N + 2  ]
// [ 실행 컨텍스트 N + 1  ]
// [ 실행 컨텍스트 N      ]
// [ 실행 컨텍스트        ] // 글로벌
