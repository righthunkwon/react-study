import React, { useReducer } from 'react';

// 컴포넌트 외부에 정의한 상태변화함수의 틀(reducer)
// action 객체의 type에 따라 실행될 상태변화함수 정의(dispatch)
function reducer(state, action) {
  switch (action.type) {
    case 'decrement':
      return state - 1;
    case 'increment':
      return state + 1;
    default:
      throw new Error(
        '존재하지 않는 action type입니다. action.type: ',
        action.type
      );
  }
}

const Counter = () => {
  // useReducer
  // 복잡한 상태 로직을 다룰 때 사용
  // 여러 개의 연관된 상태를 함께 다룰 때 사용
  // 컴포넌트의 상태 업데이트 로직을 다른 파일로 분리하고 싶을 때 사용
  // const [state, dispatch] = useReducer(reducer, initial state, initial function);
  const [number, dispatch] = useReducer(reducer, 0);

  return (
    <>
      {/* 현재 카운트 값 */}
      <h1>Count: {number}</h1>

      {/* 카운트 값의 변경을 위해 각 버튼이 클릭되면 dispatch 함수가 발동되면서 reducer 함수가 실행된다 */}
      {/* dispatch 함수의 인자로, action 객체가 설정되었는데, action 객체의 type에는 어떤 버튼을 클릭하였는지에 따라 "decrement" 또는 "increment"가 들어간다 */}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
};

export default Counter;
