// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];
let [one, two, three, four = 4] = arr;

// 2. 객체의 구조 분해 할당
let person = {
  name: '권정훈',
  age: 29,
  hobby: '글쓰기',
};

let {
  name,
  age,
  hobby: editedProperty,
  extraProperty = 'extra property',
} = person;

console.log(person); // {name: '권정훈', age: 29, hobby: '글쓰기'}
console.log(hobby); // Uncaught ReferenceError: hobby is not defined
console.log(editedProperty); // 글쓰기
console.log(extraProperty); // extra property

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby }) => {
  console.log(name, age, hobby);
};
func(person); // 권정훈 29 글쓰기
