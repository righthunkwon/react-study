// 1. 콜백함수
// 자신이 아닌 다른 함수에 인수로써 전달된 함수
function main(value) {
  console.log('main start');
  value();
  console.log('main end');
}

main(() => {
  console.log('callback');
});

// 2. 콜백함수의 활용
// 유사한 기능을 중복하여 개발하는 것을 방지
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});
