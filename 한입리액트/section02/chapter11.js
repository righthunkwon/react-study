// 동기
// 순서대로 작업을 실행하는 것

// 비동기
// 순서대로 작업을 실행하지 않는 것

// 자바는 멀티스레드로 오래 걸리는 작업을 병렬적으로 실행 가능
// 자바스크립트는 기본적으로 싱글스레드로, 동기적으로 코드를 실행
// 따라서 오래 걸리는 작업의 경우 비동기 처리를 직접 해주어야 함
// 처리한 비동기 작업은 자바스크립트 엔진이 아니라 WebAPIs에서 처리

// 실행 결과 1 3 2
// setTimeout(callback, milliseconds)
// milliseconds이후에 callback을 실행하는 비동기 함수
console.log(1);

setTimeout(() => {
  console.log(2);
}, 3000);

console.log(3);
