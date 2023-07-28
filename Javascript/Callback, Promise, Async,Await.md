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

