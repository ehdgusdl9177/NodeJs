## Document Object

- window 객체가 브라우저 창 이라고 하면 document 객체는 브라우저 내에서 콘텐츠를 보여주는 웹 페이지 자체라고 할 수 있다.

<img width="562" alt="스크린샷 2023-07-18 오후 1 42 28" src="https://github.com/ehdgusdl9177/NodeJs/assets/75515697/810cacd2-8cb3-4887-9fc5-11adb27b7731">

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Bootstrap 5 Example</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
  </head>

  <body>
    <div
      id="header-container"
      class="container-fluid p-5 bg-primary text-white text-center"
    >
      <h1 id="header-heading" class="header-title">My First Bootstrap Page</h1>
      <h5>Resize this responsive page to see the effect!</h5>
    </div>

    <div id="body-container" class="container mt-5">
      <div class="row">
        <div class="col-sm-4">
          <h3>Column 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris...
          </p>
        </div>
        <div class="col-sm-4">
          <h3>Column 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris...
          </p>
        </div>
        <div class="col-sm-4">
          <h3>Column 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris...
          </p>
        </div>
      </div>

      <form class="form-container" action="/action_page.php">
        <div id="form-first-div" class="mb-3 mt-3">
          <label for="email" class="form-label">Email:</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div class="mb-3">
          <label for="pwd" class="form-label">Password:</label>
          <input
            type="password"
            class="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pswd"
          />
        </div>
        <div class="form-check mb-3">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" name="remember" />
            Remember me
          </label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

      <ul class="list-group mt-5 mb-5">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
      </ul>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

### Document 객체 프로퍼티 사용

- document 객체를 이용해서 웹 페이지의 상태와 모든 HTML 태그들에 접근할 수 있다.

```js
let val;

val = document;
val = document.baseURI; // 웹 페이지의 절대 URI를 반환
val = document.head; // <head> 태그 반환
val = document.body; // <body> 태그 반환
val = document.doctype; // 웹 페이지의 문서 형식을 반환
val = document.cookie; // 웹 페이지의 쿠키를 반환

val = document.forms; // <form> 태그 반환
val = document.form[0];
val = document.form[0].id;
val = document.form[0].action;
val = document.form[0].method;

val = document.links; // href 속성이 있는 <a> 태그 반환
val = document.links[0];
val = document.links[0].id;
val = document.links[0].classList;
val = document.links[0].className;

val = document.images;

val = document.scripts;
val = document.scripts[0].getAttribute("src");

console.log(val);
```

### Document 객체 메소드 사용

- document 객체의 메서드들을 사용하면 다양한 방법으로 웹 페이지 내의 태그들에 접근할 수 있다.

  - 하나의 요소에 접근

  ```js
  // 파라미터로 전달한 ID를 가진 태그를 반환
  document.getElementById(요소 아이디)

  // 파라미터로 전달한 name 속성을 가진 태그를 반환
  document.getElementByName(name 속성값)

  // 파라미터로 전달한 선택자에 맞는 첫 번째 태그를 반환
  document.querySelector(선택자)
  ```

  ```js
  // document.getElementById()
  console.log(document.getElementById("header-container"));
  console.log(document.getElementById("header-heading").className);
  const headerContainer = document.getElementById("header-container");

  // styling 변경
  headerContainer.style.fontSize = "10px";
  headerContainer.style.display = "none";

  // content 변경
  headerContainer.textContent = "Text Content";
  headerContainer.innerText = "Inner Text";
  headerContainer.innerHTML = '<span style="color:blue">Inner HTML</span>';

  // document.querySelector()
  console.log(document.querySelector("#form-first-div"));
  console.log(document.querySelector(".form-container"));
  console.log(document.querySelector("h5"));

  document.querySelector("li").style.color = "blue";
  document.querySelector("ul li").style.color = "red";

  document.querySelector("li:last-child").style.color = "red";
  document.querySelector("li:nth-child(3)").style.color = "orange";
  document.querySelector("li:nth-child(4)").textContent = "Hello World";
  document.querySelector("li:nth-child(odd)").style.background = "gray";
  document.querySelector("li:nth-child(even)").style.background = "lightgray";
  ```

  - 여러 요소에 접근

  ```js
  // 파라미터로 전달한 태그이름을 가진 모든 태그들을 반환 (배열)
  document.getElementByTagName(태그이름)

  // 파라미터로 전달한 클래스 이름을 가진 모든 태그들을 반환 (배열)
  document.getElementByClassName(클래스 이름)

  // 파라미터로 전달한 선택자에 맞는 모든 태그들을 반환 (배열)
  document.querySelectorAll(선택자)
  ```

  ```js
  // document.getElementByClassName
  const items = document.getElementByClassName("list-group-item");
  console.log(items);
  console.log(items[0]);
  items[0].style.color = 'blue';
  items[0].textContent = 'Hi';

  // document.getElenetsByTagName
  let list = document.getElementsByTagName('li');
  console.log(list);
  console.log()list[0];
  list[0].style.color = 'red';
  list[3].textContent = 'Hello';

  // HTML 모음을 배열로 만들기
  list = Array.from(list);

  list.reverse();

  list.forEach((li, index) => {
    console.log(li.className);
    li.textContent = `${index}. List`
  });

  console.log(list);

  // document.querySelectorAll
  const items = document.querySelectorAll('ul.list-group li.list-group-item');

  items.forEach((item, index) => {
    item.textContent = `${index}. List`
  });

  const liOdd = document.querySelectorAll('li:nth-child(odd)');
  const liEven = document.querySelectorAll('li:nth-child(even)');

  liOdd.forEach((li, index) => {
    li.style.background = 'gray';
  });

  for(let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = 'lightgray';
  }

  console.log(items);
  ```

### innerHTML vs innerText vs textContent
