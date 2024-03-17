import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/Notfound';
import Button from './components/Button';
import Header from './components/Header';

import { getEmotionImage } from './util/get-emotion-image';

// 프로젝트 개발 순서
// 1. 페이지 라우팅
// 2. 글로벌 레이아웃 설정
// 3. 공통 컴포넌트 구현
// 4. 개별 페이지 및 복잡한 기능 구현

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav('/new');
  };

  return (
    <>
      <Header
        title={'Header'}
        leftChild={<Button text={'Left'} />}
        rightChild={<Button text={'Right'} />}
      />

      <Button
        text={'1번(default)'}
        onClick={() => {
          console.log('1번 버튼 클릭!');
        }}
      />

      <Button
        text={'2번(positive)'}
        type={'POSITIVE'}
        onClick={() => {
          console.log('2번 버튼 클릭!');
        }}
      />

      <Button
        text={'3번(negative'}
        type={'NEGATIVE'}
        onClick={() => {
          console.log('3번 버튼 클릭!');
        }}
      />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
