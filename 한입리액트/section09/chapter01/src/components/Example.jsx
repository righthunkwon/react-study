import { useReducer } from 'react';

// useReducer
// 컴포넌트 내부에 상태관리 코드를 작성하는 useState와 달리
// 컴포넌트 외부로 상태관리 코드를 분리하여 상태를 관리할 수 있다
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      return state + action.data;
    case 'DECREASE':
      return state - action.data;

    // 일치하는 타입이 없을 경우 기존 상태 반환
    default:
      return state;
  }
};

const Example = () => {
  // dispatch
  // 상태변화를 요청하는 함수
  // 상태 변화가 있어야 한다는 사실을 알리는 함수
  // dispatch 내부에는 상태가 어떻게 변화되기를 원하는지를 기술(액션 객체 정의)

  // useReducer(상태변환함수, 상태초기값)
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    // dispatch와 액션 객체 정의
    // 일반적으로 type과 data를 정의
    dispatch({
      type: 'INCREASE',
      data: 1,
    });
  };

  const onClickMinus = () => {
    // dispatch와 액션 객체 정의
    // 일반적으로 type과 data를 정의
    dispatch({
      type: 'DECREASE',
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Example;
