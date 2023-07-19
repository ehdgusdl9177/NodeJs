## javascript prototype

```js
let user = {
  name: "jonh",
  age: 45,
};
console.log(user.name);
console.log(user.hasOwnProperty("email"));
// jonh
// false
```

### hasOwnProperty의 존재

- 현재 user 객체 변수에는 두 개의 속성(name, age) 뿐인데 hasOwnProperty는 어디서 왔을까?

<img width="478" alt="스크린샷 2023-07-19 오후 2 28 24" src="https://github.com/ehdgusdl9177/NodeJs/assets/75515697/8c4df17d-dd78-4c16-bac6-14901c40e723">

- 모든 객체는 global Object prototype을 가진다.

<img width="483" alt="스크린샷 2023-07-19 오후 2 28 36" src="https://github.com/ehdgusdl9177/NodeJs/assets/75515697/b3f0b1dc-5fe8-49e1-aa17-40b95f5bd49c">

### prototype이란

- 프로토타입은 자바스크립트 객체가 다른 객체로부터 메서드와 속성을 상속받는 메커니즘을 말한다.
- 이것을 프로토타입 체인(prototype chain)이라고도 말한다.
- 위에서 보듯이 prototype object 안에 있는 hasOwnProperty를 상속받아서 사용하고 있다.
- 이렇게 하므로 인해서 더 적은 메모리를 사용할 수가 있고 코드를 재사용할 수 있다.
