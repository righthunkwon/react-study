import { useState } from 'react';

// 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
const Register = () => {
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('2000-01-01');
  const [country, setCountry] = useState('');
  const [bio, setBio] = useState('');

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div>
      <div>
        <input onChange={onChangeName} placeholder={'이름을 입력해 주세요.'} />
        <span>{name}</span>
      </div>

      <div>
        {/* value: input 초기값 설정 */}
        <input value={birth} onChange={onChangeBirth} type='date' />
        <span>{birth}</span>
      </div>

      <div>
        <select value={country} onChange={onChangeCountry}>
          <option value='' disabled>
            국적을 선택해 주세요
          </option>
          <option value='kr'>한국</option>
          <option value='us'>미국</option>
          <option value='uk'>영국</option>
        </select>
        <span>{country}</span>
      </div>

      <div>
        <textarea value={bio} onChange={onChangeBio} />
      </div>
    </div>
  );
};

export default Register;
