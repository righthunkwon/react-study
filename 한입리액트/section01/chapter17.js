// 1. 배열 생성
let arrA = new Array(); // 배열 생성자를 활용한 생성
let arrB = []; // 배열 리터럴을 활용한 생성 (대부분의 경우)
let arrC = [1, 2, 3, true, 'hello', null, undefined, () => {}, {}, []];

// 2. 배열 요소 접근
let item1 = arrC[0];
let item2 = arrC[1];

arrC[0] = 'hello'; // 수정
console.log(arrC[0]); // hello
console.log(arrC[1]); // 2
