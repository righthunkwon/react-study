// 1. Date 객체 생성
let date1 = new Date(); // 현재시간
let date2 = new Date('1996-06-17');
let date3 = new Date(1996, 6, 17, 23, 59, 59);

// 2. 타임 스탬프
// 1970.01.01 00시 00분 00초로 부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime(); // 현재시간 값
let date4 = new Date(ts1); // 현재시간

// 3. 시간 요소 추출
// 자바스크립트의 월은 0부터 시작함에 유의
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 월에는 + 1 필요
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString());
