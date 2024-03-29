import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/Notfound';

// React Router
// npm i react-router-dom
// package.json의 dependencies에 설치 확인 가능
// main.jsx를 BrowserRouter로 감싸는 작업이 반드시 필요

// 주의사항
// 1. Routes 컴포넌트 내부에는 Route 컴포넌트만 들어갈 수 있다(다른 컴포넌트가 들어갈 경우 에러 발생)
// 2. App.jsx에서 Routes 컴포넌트 외부의 컴포넌트는 모든 페이지에서 항상 렌더링된다.

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  return (
    <>
      <div>Hello</div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary' element={<Diary />} />

        {/* 경로에 맞는 라우터가 없을 경우 */}
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
