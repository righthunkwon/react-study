import { useState } from 'react';

const Counter = () => {
  // 서로 관련이 없는 state는 분리해서
  // 각 컴퍼넌트에서 관리해야 불필요한 렌더링이 발생하지 않는다!
  const [count, setCount] = useState(100);
  console.log('Counter rerendered!');

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        plus 1
      </button>
    </div>
  );
};

export default Counter;
