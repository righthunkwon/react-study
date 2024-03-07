// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 그런 키워드
async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: '권정훈',
        id: 'right_hun',
      });
    }, 2000);
  });
}

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할
async function printData1() {
  console.log('print1 start');
  const data = getData(); // await X
  console.log(data);
  console.log('print1 end');
}
printData1();

async function printData2() {
  console.log('print2 start');
  const data = await getData(); // await O
  console.log(data);
  console.log('print2 end');
}
printData2();
