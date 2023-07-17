## DOM (Document Object Model)

### HTML을 이용한 화면에 UI 표현하기

- 브라우저에서 UI를 볼 수 있는 것은 이 HTML을 분석해서 보여줄 수 있다.
- 이 HTML은 요소(Element)들로 구성되어 있다.

<img width="724" alt="스크린샷 2023-07-17 오후 2 54 46" src="https://github.com/ehdgusdl9177/NodeJs/assets/75515697/6d575627-0b43-429b-b193-a8ca6208ba4d">

### DOM 이란?

- 돔(문서 객체 모델)은 메모리에 웹 페이지 문서 구조를 트리구조로 표현해서 웹 브라우저가 HTML 페이지를 인식하게 해준다.
- 위에서 보는 웹 페이지를 이루는 요소들을 자바스크립트가 이용할 수 있게끔 브라우저가 트리구조로 만든 객체 모델을 의미한다.

<img width="788" alt="스크린샷 2023-07-17 오후 2 55 00" src="https://github.com/ehdgusdl9177/NodeJs/assets/75515697/a338b32b-3f5d-4fc0-b290-f4000b87f070">
<img width="827" alt="스크린샷 2023-07-17 오후 2 55 11" src="https://github.com/ehdgusdl9177/NodeJs/assets/75515697/d6885fd2-b7ec-4b46-b9fe-3119eea0c6c5">

### DOM 조작

- 위에서 보이는 DOM 트리를 DOM 에서 제공해주는 API를 이용해서 조작할 수 있다.
- 이 API를 이용해서 DOM 구조에 접근하거나 원하는 요소(Element)를 수정하거나 없애거나 할 수 있다.

<img width="763" alt="스크린샷 2023-07-17 오후 2 55 23" src="https://github.com/ehdgusdl9177/NodeJs/assets/75515697/a9dfd135-1fe1-4fb7-8e21-349f202c2c27">

### 웹 페이지 빌드 과정 (Critical Rendering Path CRP)

- 브라우저가 서버에서 페이지에 대한 HTML 응답을 받고 화면에 표시하기 전에 여러 단계가 있다
- 웹 브라우저가 HTML 문서를 읽고. 스타일 입히고 뷰포트에 표시하는 과정이다.

<img width="661" alt="스크린샷 2023-07-17 오후 2 59 37" src="https://github.com/ehdgusdl9177/NodeJs/assets/75515697/d12f7bc1-a05e-48b7-96b3-ea12c5e58e90">
