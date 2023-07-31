## 자바스크립트는 싱글스레드

- 싱글스레드이기 때문에 하나의 일을 할 때 하나밖에 못하는데 만약 그 하나의 일이 오래 걸리는 일이라면 그 하나의 일이 오래 걸리기에 다른 작업들은 그 하나의 일이 끝날때까지 기다려야한다.
- 이러한 문제점을 해결하기 위해서 비동기로 어떠한 일을 수행하게 된다.

<img width="594" alt="스크린샷 2023-07-28 오후 3 43 21" src="https://github.com/ehdgusdl9177/NodeJs/assets/75515697/5a138475-00c6-44a9-abea-736405b8c923">

### 만약 비동기 요청이 여러 개 있을 때 하나의 요청이 다른 요청의 결과에 의존한다면?

- 아래의 소스코드에서 처럼 둘 다 비동기 요청을 보내는데 두 번째 요청이 첫 번째 요청의 결과가 필요할 수 있다.
- 하지만 둘 다 병렬적으로 요청을 보내기 때문에 response1을 가지기 전에 두 번째 요청이 보내지게 되는데 이런 부분을 처리해주는 방법이 Callback 함수, Promise, Async Await가 있다.

```js
// 1st request
const response1 = request("http://abc.com");

// 2st request
const response2 = request("http://bcd.com", response1);
```

### Callback 함수

- 콜백 함수는 특정 함수에 매개변수로 전달된 함수를 의미한다.
- 그리고 그 콜백 함수는 함수를 전달받은 함수 안에서 호출된다.

```js
function firstFunction(parameters, callback) {
  // do something
  const response1 = request(`http://abc.com?id${parameters.id}`);
  callback(response1);
}

function secondFunction(response1, callback) {
  const response2 = request("http://bcd.com", response1);
  callback();
}

firstFunction(para, function (response1) {
  secondFunction(response1, function () {
    // ...
  });
});
```

- 콜백 사용의 단점
  - 1. 위에서 볼 수 있듯이 소스 코드를 보는데 가독성이 떨어진다.
  - 2. 에러 처리를 한다면 모든 콜백에서 각각 에러 핸들링을 해주어야한다.

### Promise

- Promise 객체는 new 키워드와 생성자를 사용해 만든다.
- 생성자는 매개변수로 "실행 함수"를 받는다.
- 이 함수는 매개 변수로 두 가지 함수를 받아야 하는데, 첫 번째 함수(resolve)는 비동기 작업을 성공적으로 완료해 결과를 값으로 반환할 때 호출해야하거, 두 번째 함수(reject)는 작업이 실패하여 오류의 원인을 반환할 때 호출하면 된다.
- 두 번째 함수는 주로 오류 객체를 받는다.

```js
const myFirstPromise = new Promise((resolve, reject) => {
  // do something asynchronous which eventually calls either:
  //
  // resolve(someValue)     // fulfiled
  // or
  // reject("failure reason")   // rejected
});
```

- 프로미스는 자바스크립트 비동기 처리에 사용되는 객체이다.
- Promise 객체는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타낸다.

```js
function fetchData() {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve("성공");
    } else {
      reject("실패");
    }
  });
}

fetchData()
  .then(function (result) {
    console.log(result);
  })
  .then(function (error) {
    console.log(error);
  });
```

- Promise는 다음 중 하나의 상태를 가진다.
  - 대기(Pending): 비동기 처리 로직이 아직 완료되지 않은 상태
  - 이행(fulfilled): 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
  - 거부(rejected): 비동기 처리가 실패하거나 오류가 발생한 상태

<img width="579" alt="스크린샷 2023-07-28 오후 3 59 45" src="https://github.com/ehdgusdl9177/NodeJs/assets/75515697/3d09eb7f-9ba7-4ed2-92d1-7d51281b658f">

- 대기 중인 프로미스는 값과 함께 이행할 수도, 어떤 이유(오류)로 인해 거부될 수도 있다.
- 이행이나 거부될 때, 프로미스의 then 메서드에 의해 대기열(큐)에 추가된 처리기들이 호출된다.
- 이미 이행했거나 거부된 프로미스에 처리기를 연결해도 호출되므로, 비동기 연산과 처리기 연결 사이에 경합 조건은 없다.

```js
myPromise
  .then((result) => {
    console.log(result); // resolve 값이 여기로
  })
  .then((err) => {
    console.log(err); // reject 값이 여기로
  })
  .finally(() => {
    console.log("모든 작업 끝"); // 이행이든 거부든 모두 마지막엔 여기로
  });
```

- 실제로 비동기 요청 두 개를 보내기

```js
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response1) => response1.json())
  .then((json) => console.log(json))
  .then(() => fetch("https://jsonplaceholder.typicode.com/todos/2"))
  .then((response2) => response2.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err))
  .finally(() => console.log("모든 작업 끝"));
```

```js
{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }
{
  userId: 1,
  id: 2,
  title: 'quis ut nam facilis et officia qui',
  completed: false
}
모든 작업 끝
```

- Promise.all()
  - Promise.all() 메서드는 순회 가능한 객체에 주어진 모든 프로미스가 이행한 후, 혹은 프로미스가 주어지지 않았을 때 이행하는 Promise를 반환한다.
  - 주어진 프로미스 중 하나가 거부하는 경우, 첫 번째로 거절한 프로미스의 이유를 사용해 자신도 거부한다.

```js
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]
```

- Promise.race()
  - Promise.race() 메서드는 Promise 객체를 반환한다.
  - 이 프로미스 객체는 iterable 안에 있는 프로미스 중에 가장 먼저 완료된 것의 결괏값으로 그대로 이행하거나 거부한다.

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});

// expected output: "two"
```

### Async Await

```js
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response1) => response1.json())
  .then((json) => console.log(json))
  .then(() => fetch("https://jsonplaceholder.typicode.com/todos/2"))
  .then((response2) => response2.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err))
  .finally(() => console.log("모든 작업 끝"));
```

- 아래와 같이 변환

```js
async function makeRequests() {
  try {
    const response1 = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const jsonRequest = await response1.json();
    console.log("jsonResponse1", jsonResponse1);

    const response2 = await fetch(
      "https://jsonplaceholder.typicode.com/todos/2"
    );
    const jsonResponse2 = await response2.json();
    console.log("jsonResponse2", jsonResponse2);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("모든 작업 끝");
  }
}
makeRequests();
```

- 비동기 코드를 마치 동기 코드처럼 보인다
- Promise에 then 메서드를 체인형식으로 호출하는 것보다 가독성이 좋다.
- await는 async 내부 함수에서만 사용할 수 있다.
- 동기식 코드에서 쓰는 try...catch 구문을 async/await 구조에서 사용할 수 있다
