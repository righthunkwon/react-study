// node package manager
// https://www.npmjs.com/
// npm에서 다양한 node.js의 라이브러리를 활용할 수 있다.

// npm i randomcolor 명령어로 라이브러리 설치
// package.json의 dependencies에 의존성 추가됨
// 실제 라이브러리가 저장되는 node modules 폴더는
// git ignore를 통해 깃에 올리지 않는 게 용량 관리에 도움이 된다
// https://www.toptal.com/developers/gitignore
import randomcolor from 'randomcolor';

const color = randomcolor();
console.log(color);
