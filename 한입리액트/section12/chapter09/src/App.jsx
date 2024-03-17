import './App.css';
import { useReducer, useRef, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';
import Notfound from './pages/Notfound';

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

function reducer(state, action) {
  switch (action.type) {
    // 일기 추가
    // 스프레드 연산자(...) 활용
    case 'CREATE':
      return [action.data, ...state];

    // 일기 수정
    // map() 메서드 활용
    // 배열 내의 모든 요소 각각에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열 반환
    // 각 요소마다의 id와 action 객체의 id가 같은지 검사하여 같으면 action.data를, 다르면 기존 요소를 반환
    case 'UPDATE':
      return state.map((item) =>
        // 타입이 다른 오류를 방지하기 위해 문자열로 변환 후 검사
        String(item.id) === String(action.data.id) ? action.data : item
      );

    // 일기 삭제
    // filter() 메서드 활용
    // 주어진 배열의 얕은 복사본을 생성하고, 주어진 함수에 의해 구현된 테스트를 통과한(결과가 true) 요소만 필터링
    case 'DELETE':
      // 타입이 다른 오류를 방지하기 위해 문자열로 변환 후 검사
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}

const DiaryStateContext = createContext(); // 일기 데이터 공급
const DiaryDispatchContext = createContext(); // 일기 데이터 수정하는 함수 공급

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      id,
    });
  };

  return (
    <>
      <button
        onClick={() => {
          onCreate(new Date().getTime(), 1, 'Hello');
        }}
      >
        1번 일기 추가 테스트
      </button>

      <button
        onClick={() => {
          onUpdate(1, new Date().getTime(), 3, '수정된 일기입니다');
        }}
      >
        1번 일기 수정 테스트
      </button>

      <button
        onClick={() => {
          onDelete(1);
        }}
      >
        1번 일기 삭제 테스트
      </button>

      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<New />} />
            <Route path='/diary/:id' element={<Diary />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='*' element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
