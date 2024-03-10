import './App.css';
import { useRef, useState } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';

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
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++, // auto increment
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    // todos와 같은 상태 데이터의 값은
    // setTodos와 같은 상태 변화 함수를 호출해서만 수정할 수 있으므로
    // todos.push(newTodo)와 같이 코드를 작성하면 생태관리가 제대로 되지 않는다
    setTodos([newTodo, ...todos]);
  };

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate} /> {/* 하위 컴포넌트에 props전달 */}
      <List />
    </div>
  );
}

export default App;
