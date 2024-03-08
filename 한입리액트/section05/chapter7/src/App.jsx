import './App.css';
import Bulb from './components/Bulb';
import Counter from './components/Counter';

// Components rerendering
// 1. state changed
// 2. props changed
// 3. parent component rerendered

// 서로 관련이 없는 state는 분리해서
// 각 컴퍼넌트에서 관리해야 불필요한 렌더링이 발생하지 않는다!
function App() {
  // const [light, setLight] = useState('OFF');
  // const [count, setCount] = useState(100);

  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
