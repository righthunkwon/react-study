import './Header.css';
import { memo } from 'react';

const Header = () => {
  return (
    <div className='Header'>
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

// React.memo()
// 메모이제이션 중 하나.
// 부모 컴포넌트가 리렌더링 되더라도
// 부모에서 자식인 Header 컴포넌트에 전달하는 Props가 바뀌지 않으면 렌더링하지 않는다.
export default memo(Header);
