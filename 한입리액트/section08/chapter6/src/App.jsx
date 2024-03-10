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
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  // todos 배열에서 targetId와 일치하는 id를 갖는 todo 요소의 isDone을 토글하는 함수
  const onUpdate = (targetId) => {
    // todos 배열에서 targetId와 일치하는 id를 갖는 todo 요소의 데이터는
    // idDone을 토글하여 수정하고, 일치하지 않는 요소는 그대로 유지하여
    // 새로운 배열을 반환
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate} />
      {/* List 컴포넌트에 업데이트 함수를 props로 전달 */}
      <List todos={todos} onUpdate={onUpdate} />
    </div>
  );
}

export default App;
