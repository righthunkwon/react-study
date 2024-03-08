import { useState } from 'react';

const Bulb = () => {
  // 서로 관련이 없는 state는 분리해서
  // 각 컴퍼넌트에서 관리해야 불필요한 렌더링이 발생하지 않는다!
  const [light, setLight] = useState('OFF');
  console.log('Bulb rerendered!');

  return (
    <div>
      {light === 'ON' ? (
        <h1 style={{ backgroundColor: 'orange' }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: 'gray' }}>OFF</h1>
      )}

      <button
        onClick={() => {
          setLight(light === 'ON' ? 'OFF' : 'ON');
        }}
      >
        {light === 'ON' ? 'Turn off' : 'Turn on'}
      </button>
    </div>
  );
};

export default Bulb;
