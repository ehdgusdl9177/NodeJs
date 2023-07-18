## Document Object

- window 객체가 브라우저 창 이라고 하면 document 객체는 브라우저 내에서 콘텐츠를 보여주는 웹 페이지 자체라고 할 수 있다.

<img width="562" alt="스크린샷 2023-07-18 오후 1 42 28" src="https://github.com/ehdgusdl9177/NodeJs/assets/75515697/810cacd2-8cb3-4887-9fc5-11adb27b7731">

```html

<!DOCTYPE html>
<html lang="en">
 
<head>
    <title>Bootstrap 5 Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
 
<body>
 
    <div id="header-container" class="container-fluid p-5 bg-primary text-white text-center">
        <h1 id="header-heading" class="header-title">My First Bootstrap Page</h1>
        <h5>Resize this responsive page to see the effect!</h5>
    </div>
 
    <div id="body-container" class="container mt-5">
        <div class="row">
            <div class="col-sm-4">
                <h3>Column 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
            </div>
            <div class="col-sm-4">
                <h3>Column 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
            </div>
            <div class="col-sm-4">
                <h3>Column 3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
            </div>
        </div>
 
        <form class="form-container" action="/action_page.php">
            <div id="form-first-div" class="mb-3 mt-3">
                <label for="email" class="form-label">Email:</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
            </div>
            <div class="mb-3">
                <label for="pwd" class="form-label">Password:</label>
                <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
            </div>
            <div class="form-check mb-3">
                <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" name="remember"> Remember me
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
```

### Document 객체 메소드 사용

- document 객체의 메서드들을 사용하면 다양한 방법으로 웹 페이지 내의 태그들에 접근할 수 있다.

### innerHTML vs innerText vs textContent
