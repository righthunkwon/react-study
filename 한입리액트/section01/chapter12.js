// 1. 함수 선언식
// 함수 선언식만 호이스팅 발생
// 함수 표현식과 화살표 함수는 호이스팅이 발생하지 않음
function funcA() {
  console.log('A함수 호출');
}
funcA(); // A함수 호출(함수명을 통해 funcA 호출)

let varA = funcA; // 함수를 변수에 담기
varA(); // A함수 호출(변수명을 통해 funcA 호출)

// 2. 함수 표현식
let varB = function funcB() {
  console.log('B함수 호출');
};
funcB(); // 에러 발생 - Uncaught ReferenceError: funcB is not defined
varB(); // B함수 호출(변수명을 통해서만 funcB 호출 가능)

// 익명함수를 활용한 함수표현식
let varC = function () {
  console.log('C함수 호출');
};
varC(); // C함수 호출(익명함수이므로 변수명을 통해서만 함수 호출 가능)

// 3. 화살표 함수
let varD = (value) => {
  return value + 1;
};
console.log(varD(10)); // 11
