## Window Object

- window 객체는 브라우저에 의해 자동으로 생성되며 웹 브라우저의 창(window)을 나타낸다.
- 또한 window는 브라우저의 객체이지 javascript의 객체가 아니다.

- 이 window 객체를 이용해서

1. 브라우저의 창에 대한 정보를 알 수 있고, 이 창을 제어할 수도 있다.
2. 또한 var 키워드로 변수를 선언하거나 함수를 선언하면 이 window 객체의 프로퍼티가 된다.

<img width="726" alt="스크린샷 2023-06-28 오후 2 58 14" src="https://github.com/ehdgusdl9177/NodeJs/assets/75515697/59898eda-b081-4e39-b862-c46e68b1b7b0">

## Window Object 사용

```js
// Alert
alert("Hello World");

// Prompt
const input = prompt();
alert(input);

// Confirm
if (confirm("Yes or No")) {
  console.log("YES");
} else {
  console.log("NO");
}
```

```js
let val;

// Outter height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
// <div style = "margin-top: 10000px"></div> 줘서 억지로 스크롤바 만들기
val = window.scrollY;
val = window.scrollX;

console.log(val);
```

```js
// Location Object => location 객체에는 현재 URL에 대한 정보가 포함되어 있다.
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
window.location.href = "http://google.com";
// Reload
window.location.reload();

// History Object => history 객체에는 사용자가 방문한 URL(브라우저 창에서)이 포함된다.
window.history.go(-2);
val = window.history.length;

// Navigator Object => navigator 객체에는 브라우저에 대한 정보가 포함되어 있다.
val = window.navigator;
val = window.navigator.userAgent;
val = window.navigator.language;

console.log(val);
```

### Web API

```js
// Browser Object Model (BOM)
window.location
window.navigator
window.history
window.screen
등등...

// Document Object Model (DOM)
window.document
```

### var로 선언해서 window 객체의 프로퍼티로 만들기

```js
var greeting = "hello";
// let과 const는 블록 스코프이기에 window 객체 내부의 블록에서 선언된 것으로 되기에 전역 객체의 프로퍼티로 활용될 수 없다.

function doGreeting() {
  return gretting;
}

console.log(window.greeting); // hello
console.log(window.doGreeting()); // hello
```
