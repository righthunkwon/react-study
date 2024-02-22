// Promise(then, catch) example
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    return response.json();
  })
  .catch(function (reason) {
    console.log("reason", reason);
  })
  .then(function (data) {
    console.log("data", data);
  });

// Api request example
async function getData() {
  let rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  let jsonResponse = await rawResponse.json();
  console.log(jsonResponse);
}
getData();

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
