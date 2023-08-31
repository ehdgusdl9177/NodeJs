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
