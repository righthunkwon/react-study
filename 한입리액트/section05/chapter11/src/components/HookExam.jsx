import useInput from './../hooks/useInput';

// React Hooks
// 1. 함수 컴포넌트나 커스텀 훅 내부에서만 호출 가능하다.
// 2. 조건문이나 반복문 내부에서 호출할 수 없다.
// 3. 개발자가 정의한 Custom Hook을 직접 만들 수 있다.
const HookExam = () => {
  const [input1, onChange1] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <input value={input1} onChange={onChange1} />
      {input1}
      <input value={input2} onChange={onChange2} />
      {input2}
    </div>
  );
};

export default HookExam;
