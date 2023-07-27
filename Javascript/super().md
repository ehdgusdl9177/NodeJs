## super()

### constructor

- constructor(생성자)를 사용하면 인스턴스화된 객체에서 다른 메서드를 호춯하기 전에 수행해야 하는 사용자 지정 초기화를 제공할 수 있다.
- 클래스를 new를 붙여서 (new User("jonh")) 인스턴스 객체로 생성하면 넘겨받은 인수와 함께 constructor가 먼저 실행된다.
- 이 때 넘겨받은 인수인 john이 this.name에 할당된다.

```js
class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }
}

let user = new User("john");
user.sayHi();
```

### 자바스크립트에서 super

- super 키워드는 자식 클래스 내에서 부모 클래스으 생성자를 호출할 때 사용된다

```js
class Car {
  constructor(brand) {
    this.carname = brand;
  }

  present() {
    return `I have a ${this.carname}`;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }

  show() {
    return super.persent() + ", it is a " + this.model;
  }
}

let mycar = new Model("Ford", "Mustang");
mycar.show();
```
