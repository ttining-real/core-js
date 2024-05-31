/* ---------------- */
/* Operators        */
/* ---------------- */


// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

let a = '10';
let b = '30';

// 단항 연산자
let unary = +a;
console.log('unary : ',unary);

// 이항 연산자
// let binary = a + b;
let binary = Number(a) + Number(b);
console.log('binary : ',binary);

// 삼항 연산자
// 암시적 형변환이 일어나서 a의 '10'이 10이 된다.
// let ternary = a >= 10;
// let ternary = a >= 10 ? true : false;
let ternary = a >= 10 ? '진짜롱' : '거짓임ㅋㅋ';
console.log('ternary : ',ternary);

// 산술 연산자: 덧셈
let addition = 1 + 2;
console.log(addition);

// 산술 연산자: 뺄셈
let subtraction = 10 - 1;
console.log(subtraction);

// 산술 연산자: 곱셈
let multiplication = 20 * 2;
console.log(multiplication);

// 산술 연산자: 나눗셈
let division = 30 / 2;
console.log(division);

// 산술 연산자: 나머지
let remainder =  10 % 3;
console.log('remainder : ', remainder);

if ( a % 2 === 0) {
  console.log('홀수야');
}

// 산술 연산자: 거듭 제곱
let power = 2 ** 53;
console.log('power : ', power);
console.log( Math.pow(2, 53) );


// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';
console.log(coercionTypeConversion);

// 대부분의 연산자는 기본 값으로만 작동합니다.
// .concat 배열 병합 (배열의 메서드)
// concat은 레거시 방식이라서 잘 안 쓰인다.
let onlyWorkDefaultValues = [1,2,3].concat([4,5,6]);
console.log(onlyWorkDefaultValues);

let first = [1, 2, 3];
let second = [4, 5, 6];

// spread syntax : 전개 구문 (정확한 용어)
// spread operator : 전개 연산자
// 다 풀어헤친 다음에 배열로 묶어줌 []
console.log([...first, ...second]);

// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)

// 콘솔 청소 ㅎ
console.clear()

// 선,후 증감 연산자
// ++, --

let counter = 0;

console.log( counter++ );
console.log( counter );

// 복합 할당 연산자
counter += 1;
counter = counter + 1;


// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
// 가독성이 떨어지므로 개행해주는 것이 좋다.
// let total = (count % 4) * (count /= 2) + count ** 3; // ?

// 2 * 5 + 125 = 135

let total = count % 4;
count = count / 2;
let pow = count ** 3;
total = total * count + pow;
console.log(total);