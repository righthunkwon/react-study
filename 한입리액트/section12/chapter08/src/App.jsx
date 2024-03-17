import './App.css';
import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';
import Notfound from './pages/Notfound';

// 임시 데이터
const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: '1번 일기 내용',
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: '2번 일기 내용',
  },
];

// reducer
function reducer(state, action) {
  return state;
}

function App() {
  // useReducer
  // 컴포넌트 내에서 상태를 업데이트하는 로직을 분리하기 위해 사용
  // const [상태, 상태변화함수(dispatch)] = useReducer(상태변화함수(reducer), 초기상태)
  const [data, dispatch] = useReducer(reducer, mockData);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
