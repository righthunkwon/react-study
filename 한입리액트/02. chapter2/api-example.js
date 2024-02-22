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
