import { useRef, useState, useContext } from 'react';
import { TodoContext } from '../App';
import './Editor.css';

const Editor = () => {
  const { onCreate } = useContext(TodoContext); // React Context를 통한 데이터 전달
  const [content, setContent] = useState('');
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === '') {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent('');
  };

  return (
    <div className='Editor'>
      <input
        ref={inputRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeydown}
        placeholder='새로운 Todo...'
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
