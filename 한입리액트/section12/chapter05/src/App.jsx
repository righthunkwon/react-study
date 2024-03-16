import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/Notfound';

// 동적 경로
// 1. URL Parameter
// 아이템의 id 등 변경되지 않는 값을 주소로 명시하기 위해 사용
// '/' 뒤에 아이템의 id를 명시(ex. ~/product/1, ~/product/2, ~/product/3)
// 파일 내에서는 Diary 페이지에서 사용

// 2. Query String
// 검색어 등의 자주 변경되는 값을 주소로 명시하기 위해 사용
// '?' 뒤에 변수명과 값 명시 (ex. ~/search?q=검색어)
// 파일 내에서는 Home 페이지에서 사용

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav('/new');
  };

  return (
    <>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/new'}>New</Link>
        <Link to={'/diary'}>Diary</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />

        {/* URL Parameter 지정(:id) */}
        <Route path='/diary/:id' element={<Diary />} />

        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
