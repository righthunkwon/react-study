import './App.css';
import { useRef, useReducer, useCallback, createContext } from 'react';
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

// React Context
// 기존 Props가 가진 단점을 개선하며 컴포넌트 간 데이터를 전달하는 방법

// 계층구조가 복잡한 컴포넌트 설계에서는 컴포넌트를
// 조상 → 부모 → 자식 → 손자 이런 식으로 계속해서 전달해야 하는
// Props Drilling 문제가 발생했는데 Context를 사용하면 이를 해결할 수 있음

// React Context
// 일반적으로 컴포넌트 외부에 선언
// Context 내부에 있는 Provider라는 컴포넌트를 통해
// Context의 value를 설정하여 데이터를 전달하거나 상태를 관리
export const TodoContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

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

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: 'UPDATE',
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    });
  }, []);

  return (
    <div className='App'>
      <Header />
      {/* Context.Provider */}
      {/* value 속성에 전달하고자 하는 값을 지정 */}
      <TodoContext.Provider value={(todos, onCreate, onUpdate, onDelete)}>
        <Editor /> {/* Context로 관리할 컴포넌트 */}
        <List /> {/* Context로 관리할 컴포넌트 */}
      </TodoContext.Provider>
    </div>
  );
}

export default App;
