## ORM

- 객체와 관계형 데이터베이스의 데이터를 자동으로 변형 및 연결하는 작업이다.
- ORM을 이용한 개발은 객체와 데이터베이스의 변형에 유연하게 사용할 수 있다.

### ORM vs Pure JavaScript

```js
// ORM
const boards = Boards.find({ title: "Hello", status: "PUBLIC" });

// Pure JavaScript
db.query(`SELECT * FROM boards WHERE title = 'Hello' AND status = 'PUBLIC', (err, result) => {
  if(err) {
    throw new Error('Error')
  }
  boards = result.rows;
}`);
```

### ORM 사용의 단점

- SQL이 아닌 ORM 자체를 배우게 된다.(각각 특정 ORM 자체를 배우는 시간도 오래걸리며 ORM들 마다 다른 문법을 사용하는 곳도 많다)
- ORM을 이용해서 복잡한 호출을 하면 성능이 좋지 않을 수 있다.

### ORM 사용의 장점

- 하나의 소스 코드를 이용해서 여러 데이터베이스로 쉽게 교체 가능하다.
- 중복 코드 방지
- SQL 인젝션 취약점으로부터 보호
- 모델 유효성 검사 지원
- TypeScript 지원
