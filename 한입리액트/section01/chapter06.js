// 1. 묵시적 형 변환
// 자바스크립트 엔진이 수행
let num = 10;
let str = '20';
const result = num + str; // 1020(string)

// 2. 명시적 형 변환
// 프로그래머가 직접 수행
let str1 = '10';
let strToNum1 = Number(str1); // 10

let str2 = '10개';
let strToNum2 = Number(str1); // NaN
let strToNum3 = parseInt(str2); // 10

let num1 = 20;
let numToStr1 = String(num1); // '20'
