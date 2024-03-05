// 함수 호출(인수)
let area = getArea(10, 20);
console.log(area1); // 200

// 함수 선언식(매개변수) - 호이스팅
function getArea(width, height) {
  // 중첩 함수
  function nestedFunc() {
    console.log('중첩함수 호출');
  }
  nestedFunc();

  let area = width * height;
  return area;
}
