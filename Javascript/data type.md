## 자바스크립트 타입
- 원시타입: Boolean, String, Number, Null, undefined, Symbol (불변성을 가지고 있다)
- 참조타입: Object, Array

![image](https://user-images.githubusercontent.com/75515697/234219560-712e995d-aa5e-46a5-ba78-5a82d2bb2b4d.png)

- 기본적으로 Javascript는 원시 타입에 대한 값을 저장하기 위해 Call Stack 메모리 공간을 사용하지만 참조 타입의 경우 Heap이라는 별도의 메모리 공간을 사용한다.
- 이 경우 Call Stack은 개체 및 배열 값이 아닌 Heap 메모리 참조 ID를 값으로 저장한다.

- 원시 타입
    - 고정된 크기로 Call Stack 메모리에 저장, 실제 데이터가 변수에 할당

- 참조 타입
    - 데이터 크기가 정해지지 않고 Call Stack 메모리에 저장, 데이터의 값이 heap에 저장되며 변수에 heap 메모리의 주소  값이 할당

### Primitive types
- string: 문자열을 나타낸다.
- number: 숫자 값을 나타낸다.
- boolean: true와 false 값을 가지고 있다.
- null: 하나의 값을 가진다: null, 의도적으로 '값이 없음'을 나타내기 위해서 사용된다.
- undefined: 하나의 값을 가진다: undefined 초기화되지 않은 변수의 기본값이다.
- symbol: 변경 불가능한 유일한 값을 생성할 때 사용하며, 값 자체의 확인이 불가하여 외부로 노출되지 않는다. ES6에서 새로 생긴 타입이다.

### Object types
- function: 함수를 나타낸다.
- array: 배열을 나타낸다.
- classes: 클래스를 나타낸다.
- object: 객체를 나타낸다.
![image](https://user-images.githubusercontent.com/75515697/234742479-41368f05-cac0-4ff6-a42a-39b42a473c60.png)


### 자바스크립트는 동적 타입이다.
- JavaScript는 느슨한 타입(loosely typed)의 동적(dynamic) 언어이다.
- JavaScript의 변수는 어떤 특정 타입과 연결되지 안흥며, 모든 타입의 값으로 할당 (및 재할당) 가능하다.
```js
let foo = 42; // foo가 숫자
foo = 'bar'; // foo가 이제 문자열
foo = true; // foo가 이제 불리언
```
- 같은 변수가 여러개의 타입을 가질 수 있다.
- 타입을 명시하지 않아도 된다.
- 대부분의 다른 언어는 정적(Static) 타입 언어이다. (자바, C#, C++)
```js
// 원시 타입
// String
const name = 'Han';
// Number
const age = 30;
// Boolean
const hasJob = true;
// Null
const car = null;
// Undefined
let anything;
// Symbol
const sym = Symbol();

// 참조 타입 - Objects
// Array 배열
const hobbies = ['walking', 'books'];
// Object literal 객체 리터럴
const address = {
    province: '경기도',
    city: '성남시'
}

console.lo(hasJob);
console.log(typeof hasJob);

console.log(typeof hobbies);
console.log(Array.isArray(address));
```
- typeof array를 하면 object가 반환된다.
- 그 이유는 array가 object의 특수한 형태이기 때문이다.
- 그래서 배열인지 확인하기 위해서는 isArray() 메소드를 이용한다.
