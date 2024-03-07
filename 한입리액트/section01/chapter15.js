// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자를 활용한 생성
let obj2 = {}; // 객체 리터럴을 활용한 생성(대부분의 경우)

// 2. 객체 프로퍼티 (객체의 속성)
let person = {
  name: '권정훈',
  age: 29,
  hobby: '농구',
  10: 20,
  'like cat': true, // key는 기본적으로 문자열이지만 띄어쓰기를 포함하고 싶은 경우 따옴표로 묶어줌
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
let age = person['age'];

let property = 'hobby';
let hobby = person[property];

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = 'fe developer';
person['favoriteFood'] = '떡볶이';

// 3.3 프로퍼티를 수정하는 방법
person.job = 'educator';
person['favoriteFood'] = '초콜릿';

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person['favoriteFood'];

// 3.5 객체에서 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = 'name' in person; // true
let result2 = 'cat' in person; // false
