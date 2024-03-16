import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/Notfound';

// React Router
// 1. Link 컴포넌트 제공
// HTML의 a태그를 대체하는 컴포넌트
// react-router-dom으로부터 import 필요
// 클라이언트 사이드 렌더링 방식으로 페이지를 이동시키기 때문에 페이지 깜빡임 현상이 없음
// 기존에 존재하던 a태그로 만든 링크로도 페이지를 이동시키는 게 가능하지만 페이지 깜빡거림이 존재

// 2. useNavigate 훅 제공
// 이벤트 핸들러 함수 안에서 특정 조건에 따라서 페이지를 이동시켜야 할 때 사용
// 클라이언트 사이드 렌더링 방식으로 페이지를 이동시키기 때문에 페이지 깜빡임 현상이 없음

function App() {
  // useNavigate
  const nav = useNavigate();

  // Event handling
  const onClickButton = () => {
    nav('/new');
  };

  return (
    <>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/new'}>New</Link>
        <Link to={'/diary'}>Diary</Link>

        {/* <a href='/'>Home</a> */}
        {/* <a href='/new'>New</a> */}
        {/* <a href='/diary'>Diary</a> */}
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary' element={<Diary />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
