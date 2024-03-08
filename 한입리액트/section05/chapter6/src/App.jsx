import './App.css';
import { useState } from 'react';

function App() {
  // useState(초기값) = [값, 값을 변화시키는 상태]
  const [count, setCount] = useState(100);
  const [light, setLight] = useState('OFF');

  return (
    <>
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

      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLight(light === 'ON' ? 'OFF' : 'ON');
          }}
        >
          {light === 'ON' ? 'Turn off' : 'Turn on'}
        </button>
      </div>
    </>
  );
}

export default App;
