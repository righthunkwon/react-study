import './List.css';
import TodoItem from './TodoItem';
import { useState } from 'react';

const List = ({ todos }) => {
  const [search, setSearch] = useState('');

  // 검색어 입력값을 실시간으로 받아오는 함수
  // input 요소의 값이 변경될 때 호출
  // search라는 상태를 setSearch라는 상태변화함수를 통해 변경
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  // 검색어를 바탕으로 필터링된 데이터를 받아오는 함수
  const getFilteredData = () => {
    // 검색어가 없을 때는 전체 데이터 반환
    if (search === '') {
      return todos;
    }

    // 검색어가 있을 때는 filter 메서드를 통해
    // 현재 투두 중 검색어에 포함된 투두만 반환
    return todos.filter((todo) =>
      // 검색 기능을 개선하기 위해 투두와 검색 모두 소문자로 변환하여 검색
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  // List 컴포넌트가 리렌더링 될 때마다
  // getFilteredDate() 함수를 호출하고 반환된 값을 filteredTodos에 저장
  const filteredTodos = getFilteredData();

  return (
    <div className='List'>
      <h4>Todo List 🌱</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder='검색어를 입력하세요'
      />
      <div className='todos_wrapper'>
        {/* 
        
          map() 
        
          배열의 모든 요소에 대해 콜백함수를 수행한 뒤 
          결과값을 모아 새로운 배열을 반환
          
        */}
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};

export default List;
