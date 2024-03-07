// 1. null 병합 연산자(??)
// 존재하는 값을 추려내는 기능
// null, undefined가 아닌 값을 찾아내는 연산자
let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // 10
let var5 = var1 ?? var3; // 20
let var6 = var3 ?? var2; // 20

let userName;
let userNickName = 'defaultName';
let displayName = userName ?? userNickName; // defaultName

// 2. typeof 연산자
// 값의 타입을 문자열로 반환하는 기능을 하는 연산자
let var7 = 1; // number
var7 = 'hello'; // string
var7 = true; // boolean
let typeofType = typeof var7; // string

// 3. 삼항 연산
// 조건 ? true : false
// 항을 3개 사용하는 연산자
let var8 = 10;
let res = var8 % 2 === 0 ? '짝수' : '홀수'; // 짝수
