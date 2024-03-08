import { useState, useRef } from 'react';

// useRef
// Reference 객체 생성
// 컴포넌트 내부의 변수로 활용 가능
// 어떤 경우에도 리렌더링을 유발하지 않음

// useState
// State 생성
// 컴포넌트 내부의 변수로 활용 가능
// 값이 변경되면 컴포넌트를 리렌더링
const Register = () => {
  console.log('Register rerendered!!!');

  // useState
  const [input, setInput] = useState({
    name: '',
    birth: '2000-01-01',
    country: '',
    bio: '',
  });

  // useRef
  // useRef(초기값) = {current: 값}
  // const ref = useRef('value1'); -> {current: 'value1'}
  // ref.current = 'value2'        -> {current: 'value2'}
  // ref.current = 'value3'        -> {current: 'value3'}
  const countRef = useRef(0);
  const inputRef = useRef();

  // useState
  // 리렌더링이 발생한다.
  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // useRef
  // 리렌더링이 발생하지 않는다.
  const onClickCheckRef = () => {
    console.log('Ref clicked: ' + countRef.current++);
  };

  const onSubmit = () => {
    // 이름이 비어있을 경우
    // 이름을 입력하는 DOM 요소에 포커스
    if (input.name === '') {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          name='name'
          ref={inputRef}
          onChange={onChange}
          placeholder={'이름을 입력해 주세요.'}
        />
        <span>{input.name}</span>
      </div>

      <div>
        {/* value: input 초기값 설정 */}
        <input
          name='birth'
          value={input.birth}
          onChange={onChange}
          type='date'
        />
        <span>{input.birth}</span>
      </div>

      <div>
        <select name='country' value={input.country} onChange={onChange}>
          <option value='' disabled>
            국적을 선택해 주세요
          </option>
          <option value='kr'>한국</option>
          <option value='us'>미국</option>
          <option value='uk'>영국</option>
        </select>
        <span>{input.country}</span>
      </div>

      <div>
        <textarea name='bio' value={input.bio} onChange={onChange} />
      </div>
      <div>
        <button onClick={onClickCheckRef}>ref + 1</button>
      </div>

      <div>
        <button onClick={onSubmit}>회원가입</button>
      </div>
    </div>
  );
};

export default Register;
