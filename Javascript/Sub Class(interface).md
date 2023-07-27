## Sub Class(inheritance)

- 부모 클래스에 자식 클래스에 확장할 수 있다.
- 부모 클래스에 있던 기능을 토대로 자식 클래스를 만들 수 있는 것이다.
- 그렇게 하기 위해서는 extends 키워드를 사용해주면 된다.

```js
class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  introduce() {
    return `Hello my name is ${this.name}`;
  }
}

class Client extends Person {
  constructor(name, email, phone, address) {
    super(name, email);

    this.phone = phone;
    this.address = address;
  }
}

const john = new Client("jonh", "jpon@abc.com", "010-0000-1111", "서울");
// 'Hello my name is jonh
```

### 관계도

### john.introduce가 실행되는 순서

1. client 객체에 client.introduce가 있는지 확인한다.
2. 없기 때문에 client.prototype에 있는지도 확인하지만 introduce는 없다.
3. extends를 통해 관계가 만들어진 client.prototype의 프로토타입인 Person.prototype에 메서드가 있는지 확인한다. 여기에 introduce가 있기 때문에 이것을 사용한다.
