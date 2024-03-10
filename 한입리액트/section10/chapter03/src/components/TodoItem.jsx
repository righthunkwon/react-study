import './TodoItem.css';
import { memo } from 'react';

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className='TodoItem'>
      <input
        onChange={onChangeCheckbox}
        readOnly
        checked={isDone}
        type='checkbox'
      />
      <div className='content'>{content}</div>
      <div className='date'>{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// React.memo()
// 메모이제이션 중 하나.
// 부모 컴포넌트가 리렌더링 되더라도
// 부모에서 자식인 TodoItem 컴포넌트에 전달하는 Props가 바뀌지 않으면 렌더링하지 않는다.
export default memo(TodoItem, (prevProps, nextProps) => {
  // 단, 현재는 App 컴포넌트에서 todos의 상태가 바뀔 경우
  // 앱 컴포넌트가 다시 리렌더링이 되는데, 이때 TodoItem에 전달되는 함수인
  // onUpdate와 onDelete 역시 새롭게 정의가 되고, 자바스크립트에서는 함수는 객체이기에
  // 다른 주소값을 갖고 해당 함수들은 이전과 같은 동작을 하더라도 새로운 객체로 인식되기에
  // 결국에는 memo(TodoItem)만 해주면 결국 모든 컴포넌트가 매번 리렌더링이 돼서 메모이제이션이 안 된다.

  // 따라서 다른 방법이 필요한데,
  // 지금은 두 번째 인자로 콜백함수를 전달해서 최적화 기능을 커스터마이징 해주면 해결된다.

  // 콜백함수에 이전의 props와 현재의 props를 전달하여 각 props의 속성을 비교하여
  // false일 경우 특정 속성이 바뀌었다는 의미이므로 리렌더링을 하고
  // true일 경우 특정 속성이 바뀌지 않았다는 의미이므로 리렌더링을 하지 않게 구현할 수 있다.
  if (prevProps.id !== nextProps.id) return false;
  if (prevProps.isDone !== nextProps.isDone) return false;
  if (prevProps.content !== nextProps.content) return false;
  if (prevProps.date !== nextProps.date) return false;
});
