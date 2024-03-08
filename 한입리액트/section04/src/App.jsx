import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// React
// 1. 컴포넌트를 기반으로 UI를 구성 -> 모듈화를 통해 중복 제거
// 2. 화면 업데이트 구성이 쉬움(리액트-선언형 / js-명령형)
// 3. 화면 업데이트를 빠르게 처리 -> Virtual DOM으로 DOM수정 횟수를 최소화하여 한 번에 렌더링

// 브라우저 렌더링 과정
// HTML  →    DOM
//             ↓
//         Render Tree  →  Layout  → Painting
//             ↑
// CSS   →   CSSOM
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>안녕 리액트!</h1>
    </>
  );
}

export default App;
