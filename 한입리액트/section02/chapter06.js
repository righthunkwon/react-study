// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 for과 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); //  1 2 3
}

// 1.2 for of 반복문 - 배열 순회
for (let item of arr) {
  console.log(item); //  1 2 3
}

// 2. 객체 순회
let person = {
  name: '권정훈',
  age: 29,
  hobby: '글쓰기',
};

// 2.1 Object.keys 사용
// 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person); // (3) ['name', 'age', 'hobby']

for (let key of keys) {
  console.log(key);
}

// 2.2 Object.values
// 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person); // (3) ['권정훈', 29, '글쓰기'];

for (let value of values) {
  console.log(value);
}

// 2.3 for in 반복문 - 객체 순회
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
