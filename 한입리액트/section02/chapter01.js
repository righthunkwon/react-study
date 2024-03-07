// 1. Falsy한 값
let f1 = 0;
let f2 = -0;
let f3 = 0n;
let f4 = NaN;
let f5 = undefined;
let f6 = null;
let f7 = '';

// 2. Truthy한 값
// 7가지의 Falsy한 값들을 제외한 나머지 모든 값
let t1 = 'hello';
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. 활용 사례
function printName(person) {
  // 예제1
  if (person === undefined || person === null) {
    console.log('person의 값이 없음');
    return;
  }
  // 예제2 (falsy를 활용한 코드 간결화)
  if (!person) {
    console.log('person의 값이 없음');
    return;
  }
  console.log(person.name);
}

let person;
printName(person);
