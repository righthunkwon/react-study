import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  // 상태 관리
  const [page, setPage] = useState(0); // 스크롤시 증가하는 페이지 관리
  const [isLoading, setIsLoading] = useState(false); // 로딩 여부 관리
  const [catArray, setCatArray] = useState([]); // 고양이 배열 관리

  // 첫 렌더링 시
  // 스크롤 시 관찰한 대상 지정 및 관찰
  useEffect(() => {
    // IntersectionObserver
    // 브라우저의 뷰포트와 설정한 요소와의 교차점을 관찰하여 요소가 포함되는지를 판단하는 기능 제공
    // 비동기적으로 실행되기 때문에 스크롤과 같은 이벤트 기반의 요소 관찰에서 발생하는 렌더링 성능이나 이벤트 연속 호출 같은 문제 없이 사용 가능

    const observer = new IntersectionObserver(handleObserver, {
      // threshold
      // Intersection Observer의 옵션
      // threshold가 0일 때는 교차점이 한 번만 발생해도 실행
      // threshold가 1일 때는 모든 영역이 교차해야 콜백함수가 실행
      threshold: 0,
    });

    // observer라는 클래스 명을 가진 대상을 관찰 대상으로 지정
    const observerTarget = document.getElementById('observer');

    // observer라는 클래스 명을 가진 대상을 관찰
    if (observerTarget) {
      observer.observe(observerTarget);
    }
  }, []);

  // 옵저버를 관리하는 함수
  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && !isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  // 페이지가 변할 시
  // 10개의 랜덤 고양이 이미지를 가져오는 함수 실행
  useEffect(() => {
    get10RandomCatImages();
  }, [page]);

  // 10개의 랜덤 고양이 사진을 가져오는 함수
  const get10RandomCatImages = async () => {
    setIsLoading(true);
    try {
      const API_URL = `https://api.thecatapi.com/v1/images/search?limit=10`;
      const response = await axios.get(API_URL);
      if (response.status === 200) {
        console.log('이미지 가져오기 성공', response.data);
        setCatArray((prevData) => [...prevData, ...response.data]);
      }
    } catch (error) {
      console.error('이미지 가져오기 실패', error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <div className='h-full bg-TossGray'>
        <div className='m-auto max-w-[500px] h-full '>
          {/* 1. 제목 영역 */}
          <div className='flex justify-center py-8'>
            <div className='p-8 text-center bg-gray-800 rounded-lg w-96'>
              <div className='text-3xl font-bold text-white'>무한 랜덤 고양이</div>
              <div className='mt-4 font-bold text-gray-400 text'>귀여운 고양이 이미지를 무한대로 즐기자!</div>
            </div>
          </div>
          {/* 2. 콘텐츠 영역 */}
          <div className='flex flex-wrap justify-center py-8 font-bold text-center bg-gray-800 rounded-lg'>
            {catArray &&
              catArray.map((cat, index) => (
                <div className='flex-col justify-between w-[42%] m-2' key={cat.id}>
                  <img
                    className='flex-1 object-cover w-full h-40 cursor-pointer rounded-t-xl'
                    src={cat.url}
                    alt='cat'
                  />
                  <div className='flex-1 py-1 text-gray-300 bg-gray-700 rounded-b-xl'>cat {index + 1}</div>
                </div>
              ))}
          </div>
          {/* 3. 로딩 및 무한스크롤 옵저버 영역 */}
          {isLoading && <p>Loading...</p>}
          <div id='observer' style={{ height: '10px' }}></div>
        </div>
      </div>
    </>
  );
}

export default App;
