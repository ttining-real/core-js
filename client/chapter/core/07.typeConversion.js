/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;

// console.log( String(YEAR) ); // '2024'
console.log( typeof String(YEAR) ); // string
// console.log(YEAR + ''); // '2024'
console.log( typeof (YEAR + '') ); // string


// undefined, null
let days = null;
console.log( days + '' ); // null

// let friends = undefined;
let friends;
console.log( friends + '' ); // undefined


// boolean

let isClicked = true;

console.log( String(isClicked) ); // true



/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined => NaN
let friend;
console.log( Number(friend) ); // NaN

// null => 0
let money = null;
console.log( Number(money) ); // 0

// boolean
// true = 1, false = 0
let hasBoyFriend = true;
console.log( Number(hasBoyFriend) ); // 1


// string
let num = '100';
console.log( Number(num) ); // 100
console.log( num * 1 ); // 100
console.log( num / 1 ); // 100
console.log( +num ); // 100


// numeric string
const width = '120.5px'

// , 10 : 10진수 표기를 권장한다. (radix)
console.log( parseInt(width, 10) ); // 120
console.log( parseFloat(width, 10) ); // 120.5


/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 

console.log( Boolean(friend) ); // false
console.log( Boolean(0) ); // false
console.log( Boolean('') ); // false
console.log( Boolean(NaN) ); // false
console.log( Boolean(' ') ); // true
console.log( Boolean('0') ); // true
