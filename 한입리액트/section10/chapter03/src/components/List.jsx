import './List.css';
import TodoItem from './TodoItem';
import { useState, useMemo } from 'react';

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === '') {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  // useMemo(callback, [deps])
  // 두 번째 인자에 포함되는 의존성 배열(deps)에 포함된 값이 변경되었을 때
  // 첫 번째 인자로 전달한 콜백함수를 다시 실행하여 해당 콜백함수가 반환하는 값을 반환
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log('useMemo 호출!');
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  return (
    <div className='List'>
      <h4>Todo List 🌱</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder='검색어를 입력하세요'
      />
      <div className='todos_wrapper'>
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
