import './TodoItem.css';

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  // 렌더링 될 때 실행
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  // 렌더링 될 때 실행
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

export default TodoItem;
