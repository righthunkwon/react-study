// 5가지 배열 요소 순회 및 탐색 메서드

// 1. forEach
// 모든 요소를 순회하는 메서드
// 콜백함수를 통해 각의 요소에 특정 동작을 수행시키게 할 수 있음
let arr1 = [1, 2, 3];

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2); // (3) [2, 4, 6]
});

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isIncluded = arr2.includes(10); // false

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [2, 2, 2];
let index1 = arr3.indexOf(2); // 0
let index2 = arr3.indexOf(3); // -1

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const foundIndex = arr4.findIndex((item) => item === 999); // -1

let objectArr = [{ name: '김장훈' }, { name: '숲튽훈' }, { name: '권정훈' }];
console.log(objectArr.indexOf({ name: '권정훈' })); // -1
console.log(objectArr.findIndex((item) => item.name === '권정훈')); // 2

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾아 반환
let arr5 = [
  { name: '김장훈', age: 50 },
  { name: '숲튽훈', age: 65 },
  { name: '권정훈', age: 29 },
];

const foundObj = arr5.find((item) => item.name === '권정훈');
console.log(foundObj); // {name: '권정훈', age: 29}
