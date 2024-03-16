import { useSearchParams } from 'react-router-dom';

// useSearchParams
// 현재 브라우저의 URL에서 Query String을 가져오는 훅
// useState와 유사하게 params에서는 값이, setParams에서는 특정 Query String의 값을 변경할 수 있는 함수가 들어옴

const Home = () => {
  const [params, setParams] = useSearchParams();
  console.log(params.get('value'));

  return <div>Home</div>;
};

export default Home;
