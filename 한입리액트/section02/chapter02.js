// 1. 단락 평가
function returnFalse() {
  console.log('False 함수');
  return undefined;
}
function returnTrue() {
  console.log('True 함수');
  return 10;
}

console.log(returnTrue() || returnFalse()); // True함수, 10
console.log(returnFalse() && returnTrue()); // False함수, undefined

// 2. 단락 평가 활용
// T || T 일 경우 앞의 T가 반환
// T && T 일 경우 뒤의 T가 반환
function printName(person) {
  const name = person && person.name;
  console.log(name || 'person의 값이 없음');
}

printName(); // person의 값이 없음
printName({ name: '권정훈' }); // 권정훈
