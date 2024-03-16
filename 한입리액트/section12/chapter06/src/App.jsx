import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/Notfound';

import { getEmotionImage } from './util/get-emotion-image';

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav('/new');
  };

  return (
    <>
      {/* 

      public 폴더가 아니라 assets 폴더에 넣어 이미지를 import 할 경우 Vite가 자동으로 이미지를 최적화 해준다. 
      한 번 불러온 이미지를 다시 불러오지 않도록 브라우저의 캐시를 활용해서 불필요한 이미지 로딩을 방지해준다.
      단, 이미지가 10,000개 100,000개 정도로 많을 경우 이를 메모리에 전부 캐싱하면 오히려 브라우저의 메모리에 과부하가 
      올 수 있으므로 이미지는 항상 assets에 두면 좋다는 말은 항상 맞는 말은 아니다.
      
      */}
      <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div>

      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/new'}>New</Link>
        <Link to={'/diary'}>Diary</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
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
