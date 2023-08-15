## HTTP Requset, Response 구조

### Request 구조

<img width="404" alt="스크린샷 2023-08-14 오후 1 29 17" src="https://github.com/ehdgusdl9177/NodeJs/assets/75515697/43a3a126-d39f-4c70-9a66-ed45d4285dc3">

### HTTP Request의 구조

1. Starter line
- http method 종류, request target(url), http version 정보를 담고 있다.
2. Headers
- Key: Value 값으로 해당 requset에 대한 추가 정보를 담고 있다.
3. Body
- 해당 request가 전송하는 데이터가 담겨있는 부분이다.
- 전송하려는 데이터가 없다면 비어있게 된다.

<img width="763" alt="스크린샷 2023-08-14 오후 1 29 28" src="https://github.com/ehdgusdl9177/NodeJs/assets/75515697/3a27a32c-0dc9-47d1-8810-776f8473a655">

### Response 구조

<img width="404" alt="스크린샷 2023-08-14 오후 1 29 40" src="https://github.com/ehdgusdl9177/NodeJs/assets/75515697/5a99dcdc-5f18-4743-92e2-7b679a61434d">

### HTTP Response의 구조

1. status line
- HTTP version, Status Code, Status Text을 나타낸다.
2. headers
- Reqeust의 headers와 동일하다
- 하지만 Response Headers에서만 쓰이는 값도 있다.
3. body
- Response의 body와 일반적으로 동일하다

<img width="760" alt="스크린샷 2023-08-14 오후 1 29 54" src="https://github.com/ehdgusdl9177/NodeJs/assets/75515697/d869a9a5-e825-4f7c-a231-44136e0ca5ef">
