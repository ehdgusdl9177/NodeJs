## 호이스팅 (Hoisting)
- 호이스트(Hoist)의 뜻은 무언가를 들어 올리거나 끌어 올리는 동작을 설명한다.
- 자동차를 강에서 올린다 (Hoist)라고 할 수 있다.

- Javascript에서 호이스팅은 코드가 실행되기 전에 변수 및 함수 선언(이름)이 로컬 범위(유효 범위)의 맨 위로 들어올려지거나 끌어올려지는 경우를 설명한다.

- var나 let, const로 정의된 변수나 함수선언문, 함수표현식이 유효범위의 최상단으로 끌어올려지는 것처럼 보여지는 현상을 말한다.
- 정확히 말하면 실행 컨텍스트가 활성화 되었을 때 해당 영역에서 변수의 이름을 메모리에 먼저 수집하는 현상으로 인해 발생하는 현상이다.

<img width="397" alt="KakaoTalk_20230425_155104522" src="https://user-images.githubusercontent.com/75515697/234207224-076ef9d8-ee21-4b0b-8d74-c256ac679a48.png">

### var 선언문 호이스팅
- 아래 예에서는 아직 생성하지 않은 변수에 대한 콘솔 로그를 사용하여 시작한다.
- 다음으로 greeting라는 이 변수를 선언하고 문자열 hello을 할당한다.
- 코드가 실행(실행)되면 undefined가 반환된다.

- 이 코드가 에러를 발생시키지 않는 이유는 호이스팅 때문이다.
Javascript 인터프리터는 변수 생성의 선언(var greeting) 단계 및 할당(= "hello") 단계를 분할한다.
- 선언 부분은 코드가 실행되기 전에 현재 범위의 맨 위로 호이스팅되고 초기에 undefined 값이 할당된다.
- 즉, 초기화되기 전에 greeting 변수를 사용할 수 있다.

```js
console.log(greeting);
// undefined
var greeting = "hello";
```

### let, const 선언문 호이스팅
- let 또는 const로 변수를 선언하면 실제로 변수는 여전히 호이스팅된다.
- 그러나 var와 차이점은 var는 실제 할당 값이 할당되기전까지 undefined 값이 할당된다.
- 하지만 let/const를 사용하면 변수 초기에 어떤 값도 할당되지 않는다. (ReferenceError 발생)
- let 키워드로 선언된 변수는 스코프의 시작에서 변수의 선언까지 일시적 사각지대(Temporal Dead Zone, TDZ)에 빠지기 때문이다.
- 일시적 데드 존은 변수를 사용할 수 없는 일시적인 비활성 상태를 나타낸다.

```js
console.log(greeting);

const greeting = "hello";
```

### 함수 선언문 호이스팅
- 함수 선언문도 함수 생성전에 호출하면 올바르게 출력이 된다.
- 함수 전체를 호이시틍하기 때문에 호출 시 해당 로직을 사용할 수 있다.

```js
func(); // hoisting test

function func() {
    console.log("hoisting test")
}
```
