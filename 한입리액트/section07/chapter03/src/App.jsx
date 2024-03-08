import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  // 마운트 여부를 관리하는 변수
  const isMount = useRef(false);

  // 리액트 라이프사이클
  // 1. 마운트 : 탄생(첫 렌더링)
  useEffect(() => {
    console.log('mount');
  }, []);

  // 2. 업데이트 : 변화(리렌더링)
  useEffect(() => {
    // 컴포넌트가 마운트될 때 업데이트를 방지하기 위한 코드
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log('update');
  });

  // 3. 언마운트 : 죽음
  // useEffect(() => {
  //   return () => {
  //     console.log('unmoint');
  //   };
  // });

  // useEffect
  // 의존성 배열의 요소 값이 변할 때마다 호출
  useEffect(() => {
    console.log(`count: ${count} / input: ${input}`);
  }, [count, input]);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className='App'>
      <h1>Simple Counter</h1>

      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>

      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>

      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
