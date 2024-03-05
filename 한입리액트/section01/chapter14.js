// 스코프
// 전역 스코프: 전체 영역에서 접근 가능
// 지역 스코프: 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a);
}
funcA(); // 1
console.log(b); // 에러 발생, Uncaught ReferenceError: b is not defined

if (true) {
  let c = 1;
}
console.log(c); // 에러 발생, Uncaught ReferenceError: b is not defined

for (let i = 0; i < 10; i++) {
  let d = 1;
}
console.log(d); // 에러 발생, Uncaught ReferenceError: b is not defined
