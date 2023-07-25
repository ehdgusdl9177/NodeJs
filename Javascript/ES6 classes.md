## ES6 Classes

- ES6에서 나온 Class를 이용해서 더 쉽게 OOP를 구현할 수 있다.
- 문법을 OOP 방식을 이용하지만 내부에서 prototype을 사용하며 작동된다.

```js
class Person {
  constructor(name, email, birthday) {
    // constructor는 인스턴스의 생성과 동시에 class 필드의 생성과 초기화를 실행한다.
    this.name = name;
    this.email = email;
    this.birthday = new Date(birthday);
  } // this는 클래스가 생성할 인스턴스를 가리킨다.

  introduce() {
    return `Hello my name is ${this.name}`;
  }
}

const john = new Person("john", "john@example.com", "10-3-98");
```

- console.log(john)

<img width="638" alt="스크린샷 2023-07-21 오전 11 53 54" src="https://github.com/ehdgusdl9177/NodeJs/assets/75515697/5f08d57b-b30b-4bc7-b16c-fe1be129c8e3">

### Static 사용

- prototype이 아닌 클래스 함수 자체에 메서드를 설정할 수도 있다.
- 이런 메서드를 정적(static) 메서드라고 부른다.

- this.name 같은 것을 안 쓰는 독립적인 것을 정의할 때 static을 사용하며 이 static 메서드를 사용할 때는 인스턴스가 아닌 클래스 이름을 이용해서 사용한다.

```js
class Person {
  constructor(name, email, birthday) {
    // constructor는 인스턴스의 생성과 동시에 class 필드의 생성과 초기화를 실행한다.
    this.name = name;
    this.email = email;
    this.birthday = new Date(birthday);
  } // this는 클래스가 생성할 인스턴스를 가리킨다.

  introduce() {
    return `Hello my name is ${this.name}`;
  }

    static multipleNumbers(x. y) {
    return x * y;
    }
}
console.log(Person.multipleNumbers(2, 9))
console.log(Person.multipleNumbers(4, 8))
```
