## DOM Event

### Event Listener

- 마우스를 이용해서 버튼을 클릭할 때는 클릭 "이벤트"가 발생한다.
- 이렇게 이벤트가 발생했을 때 어떠한 액션을 위한 함수를 호출하는데 그 함수가 바로 이벤트 리스너 이다.

### addEventListener()

- 위에서 말한 것처럼 어떠한 이벤트가 발생했을 때 이벤트 리스너를 호출하기 위해서는 이벤트 리스너를 해당 객체나 요소에 등록해줘야 한다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>CreateElement</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css"
    />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
  </head>

  <body>
    <div id="body-container" class="container mt-5">
      <a>Hi</a>
      <p id="text">Hello</p>
      <button class="btn">버튼</button>
      <ul class="list-group mt-5 mb-5">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
      </ul>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

1. 자바스크립트 코드에서 프로퍼티로 등록

```js
window.onload = () => {
  // 문서가 load 될 때 이 함수 실행
  let text = document.getElementById("text");
  // 아이디가 "text"인 요소를 return

  text.innerHTML = "HTML 문서 loaded";
};
```

2. HTML 태그에 속성으로 등록

```js
<button onclick="alert('버튼이 클릭됐습니다')">버튼입니다.</button>
```

3. addEventListener 메소드를 사용

```js
// element.addEventListener(이벤트명, 실행할 함수명(Listener), 옵션)
const aElement = document.querySelector("a");
aElement.addEventListener("click", () => {
  alert("a element clicked");
});
```

### Event 객체

- 이벤트가 발생할 때 이벤트 객체를 가져올 수 있다.

```js
const buttonElement = document.querySelector(".btn");
buttonElement.addEventListener("click", handleClick);

const handleClick = (event) => {
  let val;
  val = event;

  // Event target element
  val = event.target;
  val = event.target.id;
  val = event.target.className;
  val = event.target.classList;

  // Event type
  val = event.type;

  // 윈도우로부터의 거리 좌표
  val = event.clientY;
  val = event.clientX;

  // 요소들로부터의 거리 좌표
  val = event.offsetY;
  val = event.offsetX;
  console.log(val);
};
```
