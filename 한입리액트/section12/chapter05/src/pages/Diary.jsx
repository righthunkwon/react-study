import { useParams } from 'react-router-dom';

// useParams
// 현재 브라우저의 URL에서 URL 파라미터의 값을 가져오는 훅

const Diary = () => {
  const params = useParams();
  console.log(params); // 객체

  return <div>{params.id}번 일기입니다 ~~</div>;
};

export default Diary;
