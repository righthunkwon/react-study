function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    setTimeout(() => {
      if (typeof num === 'number') {
        resolve(num + 10);
      } else {
        reject('num이 숫자가 아닙니다');
      }
    }, 2000);
  });

  return promise;
}

/**
 * Promise
 *
 * 비동기 작업을 효율적으로
 * 처리할 수 있도록 도와주는 자바스크립트의 내장객체
 *
 * 비동기 작업을 감싸고 있는 객체로,
 * 비동기 작업과 관련된 기능을 제공
 *
 * 대기/성공/실패 세 가지의 상태가 존재
 * 비동기 작업이 대기상태였다가 성공되면 resolve
 * 비동기 작업이 대기상태였다가 실패하면 reject
 *
 *  */

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
