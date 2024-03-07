function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === 'number') {
        resolve(num + 10); // 비동기 작업이 성공했을 경우 실행
      } else {
        reject('num이 숫자가 아닙니다'); // 비동기 작업이 실패했을 경우 실행
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
 * Promise 객체의 반환값은 Promise이므로
 * 이를 then과 catch로 체이닝하여 사용할 수 있음
 *
 * catch의 경우 중간에 에러가 발생하면
 * 사이의 then을 실행하지 않고 바로 실행됨
 *  */

add10(0)
  .then((result) => {
    console.log(result); // 10
    return add10(result);
  })
  .then((result) => {
    console.log(result); // 20
    return add10(undefined);
  })
  .then((result) => {
    console.log(result); // 30
  })
  .catch((error) => {
    console.log(error); // num이 숫자가 아닙니다
  });
