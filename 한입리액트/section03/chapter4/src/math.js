/**
 *
 * CommonJS vs ES Modules
 *
 * 우리는 JS 모듈을 내보내거나 가져올 때 2가지 방식을 사용한다.
 * 
 * 첫번째 방법은 module.exports로 모듈을 내보내고 
 * require()로 접근하는 CJS(CommonJS)이다.
 * 
 * 두번째 방법은 export로 모듈을 내보내고
 * import로 접근하는 ESM(ES Modules)이 있다.
 * 

 * 1. CJS 방법
 * module.exports = { ... }        // 모듈 내보낼 때
 * const utils = require('utils'); // 모듈 가져올 때
 * 
 * 2. ESM 방법
 * ESM 방식을 사용하기 위해선 
 * package.json에 “type”: “module”을 설정해야 한다.
 * 
 * export.default =()=> { ... }; // 모듈 내보낼 때
 * import utils from 'utils';    // 모듈 가져올 때
 *
 */

// math module
// ES module system 활용
// package.json에 "type": "module" 명시해야 사용 가능
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// export default
export default function multiply(a, b) {
  return a * b;
}
