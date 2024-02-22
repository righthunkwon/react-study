// 1. Call back
// timer(1000)
//   .then(function() {
//     console.log('작업');
//     return timer(1000);
//   })
//   .then(function() {
//     console.log('작업');
//     return timer(1000);
//   })
//   .then(function() {
//     console.log('작업');
//     return timer(1000);
//   });

// 2. async & await
// async function run() {
//   await timer(1000);
//   console.log("작업");
//   await timer(1000);
//   console.log("작업");
//   await timer(1000);
//   console.log("작업");
// }
// run();

// async & await example
function timer(time) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}
async function runTimer() {
  console.log("timer start");
  let time = await timer(1000);
  console.log("time " + time);
  time = await timer(time + 1000);
  console.log("time " + time);
  time = await timer(time + 1000);
  console.log("time " + time);
  console.log("timer end");
}

async function runApp() {
  console.log("App start");
  await runTimer();
  console.log("App end");
}
runApp();
