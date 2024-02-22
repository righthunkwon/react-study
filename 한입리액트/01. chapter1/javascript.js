// 1. 삼항연산자    //////////////////////////////////////////////
let boolean = false;
const result = boolean ? "참" : "거짓";
console.log(result);

let arr1 = [];
const arr1Status = arr1.length === 0 ? "빈 배열" : "비어있지 않은 배열";
console.log(arr1Status);

// 2. 단락회로평가  //////////////////////////////////////////////
// ex. true || false 시 앞 조건만 판단하고 뒤 조건은 판단하지 않음

// 2-1. 예제
// let person;
// const getName = (person) => {
//     if (!person) {
//         return "객체가 아닙니다.";
//     }
//     return person.name;
// }
// const name = getName(person);
// console.log(name);

// 2-2. 예제
let person;
const getname = (person) => {
  const name = person && person.name;
  return name || "객체가 아닙니다.";
};
console.log(name);

// 2-3. 단락회로평가를 활용한 코드 리팩토링
const meal = {
  한식: "bulgogi",
  중식: "menbosah",
  일식: "sushi",
  양식: "pasta",
};

const getMeal = (mealType) => {
  return meal[mealType] || "굶기";
};

// 3. 구조분해할당 //////////////////////////////////////////////
//배열에서 원하는 값을 쏙쏙 빼먹는거

let arr = ["one", "two", "three"];

// 3-1. 기존 방식
// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// 3-2 구조분해할당 할용
// let [one, two, three] = arr;
// let [one, two, three] = ['one', 'two', 'three']
// let [one, two, three, four = "four"] = ["one", "two", "three"]; // 기본값 넣기

// 3-3 구조분해할당을 활용하여 임시 변수 사용하지 않고 값 바꾸기
// let a = 10;
// let b = 20;
// [a, b] = [b, a];

// 4. spread 연산자 //////////////////////////////////////////////
// 4-1. 객체에 활용
const cookie = {
  base: "cookie",
  madeIn: "korea",
};
const chocochipCookie = {
  ...cookie, // spread
  toping: "chocochip",
};

// 4-2. 배열에 활용
const noToppingcookies = ["촉촉한 쿠키", "안 촉촉한 쿠키"];
const toppingCookies = ["바나나쿠키", "블루베리쿠키"];
const allCookies = [...noToppingcookies, "내가 만든 쿠키", ...toppingCookies];
