// 6가지의 배열 요소 조작 메서드

// 1. push
// 원본 배열의 맨 뒤에 새로운 요소를 추가하고, 배열의 길이를 반환
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7); // 7

// 2. pop
// 원본 배열의 맨 뒤에 있는 요소를 제거하고 해당 요소를 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop(); // 3

// 3. shift
// 원본 배열의 맨 앞에 있는 요소를 제거하고 해당 요소를 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift(); // 1

// 4. unshift
// 원본 배열의 맨 앞에 새로운 요소를 추가하고, 배열의 길이를 반환
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0); // 4

/**
 * 참고
 *
 * push & pop과 shift & unshift의 성능 비교
 * 인덱스를 수정할 필요가 없으므로 전자가 후자보다 성능이 우수
 *
 */

// 5. slice
// 원본 배열의 특정 범위를 잘라내 새로운 배열로 반환
// 인자로 들어가는 숫자는 순서대로 이상과 미만임에 유의
let arr5 = [1, 2, 3, 4, 5]; // 원본 배열은 수정되지 않음에 유의
let sliced = arr5.slice(2, 5); // 3 4 5
let sliced2 = arr5.slice(2); // 3 4 5
let sliced3 = arr5.slice(-2); // 4 5

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7); // (4) [1, 2, 3, 4]
