import { useState } from 'react';

// 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
const Register = () => {
  // 통합 상태
  const [input, setInput] = useState({
    name: '',
    birth: '2000-01-01',
    country: '',
    bio: '',
  });
  // 통합 이벤트 핸들러
  setInput({
    ...input,
    [e.target.name]: e.target.value,
  });
};

return (
  <div>
    <div>
      <input
        name='name'
        onChange={onChange}
        placeholder={'이름을 입력해 주세요.'}
      />
      <span>{input.name}</span>
    </div>

    <div>
      {/* value: input 초기값 설정 */}
      <input name='birth' value={input.birth} onChange={onChange} type='date' />
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
  </div>
);

export default Register;
