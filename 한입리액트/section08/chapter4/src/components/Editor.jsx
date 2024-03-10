import { useRef, useState } from 'react';
import './Editor.css';

// 부모 컴포넌트인 앱 컴포넌트에서
// 구조분해할당을 통해 props를 전달받음(onCreate)
const Editor = ({ onCreate }) => {
  const [content, setContent] = useState(''); // content state -> useState
  const inputRef = useRef(); // input focus -> useRef

  // 상태 변화 감지
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  // 엔터키(keyCode: 13)로 할일 추가
  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  // 할일 추가
  const onSubmit = () => {
    // 입력창에 내용이 비어있을 경우
    // 해당 요소에 포커스를 주고 리턴
    if (content === '') {
      inputRef.current.focus();
      return;
    }
    onCreate(content); // 새로운 요소 생성
    setContent(''); // 상태를 초기화(상태변화함수 활용)
  };

  return (
    <div className='Editor'>
      <input
        ref={inputRef} // input element focus -> useRef
        value={content}
        onChange={onChangeContent} // input 요소의 값이 변경될 때 발생
        onKeyDown={onKeydown} // input 요소에서 키보드 키가 눌릴 때 발생
        placeholder='새로운 Todo...'
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
