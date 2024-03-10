import './TodoItem.css';

const TodoItem = ({ id, isDone, content, date, onUpdate }) => {
  // 체크박스가 클릭되면 onUpdate로 아이디를 전달하는 함수
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  return (
    <div className='TodoItem'>
      <input
        onChange={onChangeCheckbox} /* 체크박스가 클릭되는 이벤트 */
        readOnly
        checked={isDone}
        type='checkbox'
      />
      <div className='content'>{content}</div>
      <div className='date'>{new Date(date).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
