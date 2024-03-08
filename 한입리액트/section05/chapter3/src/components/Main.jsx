import './Main.css';

// JSX
// JavaScript eXtensions -> JavaScript + HTML

// JSX 유의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 삽입 가능
//    * 반복문, 조건문 불가 -> 삼항연산자는 가능
//
// 2. 숫자, 문자열, 배열 값만 렌더링
//    * boolean, undefined, null은 에러는 안 나지만 렌더링이 되지는 않는다.
//    * 객체의 경우에는 렌더링을 시도할 경우 에러가 발생한다.
//
// 3. 모든 태그는 닫혀있어야 한다
//    * 닫는 태그가 필요 없는 태그도 셀프 클로징 해주어야 한다.
//
// 4. 최상위 태그는 반드시 하나여야만 한다
//    * JSX에서는 빈 태그로 묶어도 되지만, 빈 태그는 렌더링이 되지는 않는다.

const Main = () => {
  // 로그인 상태
  const user = {
    name: '권정훈',
    isLogin: true,
  };

  // 렌더링(1)
  if (user.isLogin) {
    return <div className='logout'>로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }

  // 렌더링(2)
  return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
};

export default Main;
