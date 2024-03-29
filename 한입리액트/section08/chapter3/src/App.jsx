import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';

// 목 데이터
// 앱 컴포넌트가 렌더링 될 때마다
// 다시 만들어질 필요가 없으므로 앱 컴포넌트 밖에 선언
const mockData = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '빨래하기',
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: '노래 연습하기',
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);

  return (
    <div className='App'>
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;
