// 1에서 10 사이의 수 중 1, 3, 5만 출력하는 반복문
for (let i = 1; i <= 10; i++) {
  // 짝수는 패스
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);

  // 5이상일 경우 반복문 종료
  if (i >= 5) {
    break;
  }
}
