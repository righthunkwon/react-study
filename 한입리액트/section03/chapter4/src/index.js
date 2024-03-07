// export default
// 모듈을 대표하는 하나의 기본값
// export default는 원하는 이름으로 사용 가능
// export default의 경우 import할 때 중괄호 밖에 기술해야 함
import mul, { add, sub } from './math.js';

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(2, 3));
