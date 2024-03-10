import './App.css';
import { useRef, useReducer, useCallback } from 'react';
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

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 최적화 시점
  // 먼저 전체 기능 구현을 완성한 뒤, 최적화가 꼭 필요한 부분에만 최적화를 진행!
  // 가령, 이전에 최적화했던 헤더 컴포넌트의 경우에는 useMemo를 사용하는 것 자체가
  // 특정 연산을 더하는 일이고, 헤더 컴포넌트는 아주 간단하므로 그냥 리렌더링을 하는 게
  // 더 빠를 수도 있다. 불필요한 연산이 아주 많이 발생하는 컴포넌트에만 useMemo나 useCallback을 통해 최적화를 하자.

  // useCallback(callback, [deps])
  // 함수를 메모이제이션 해주는 리액트의 훅.
  // 빈 배열로 deps를 생성해주어 컴포넌트가 최초로 생성되는 시점(mount)에만
  // 딱 한 번 함수를 생성하여 메모이제이션 해주면 이후에 아무리 컴포넌트가 리렌더링 되더라도
  // 함수가 다시 만들어지지 않아 useMemo()로 최적화를 할 때 최적화가 제대로 안 되는 문제를 방지할 수 있다.

  // useCallback(callback, [deps])
  const onCreate = useCallback((content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  // useCallback(callback, [deps])
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: 'UPDATE',
      targetId: targetId,
    });
  }, []);

  // useCallback(callback, [deps])
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    });
  }, []);

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
