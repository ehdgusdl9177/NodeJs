## 변수의 참조 범위 (Scope)
- 식별자 접근 규칙에 따른 유효 범위
- 변수에 접근할 수 있는 범위
- var: 함수 레벨 스코프(function-level scope)
- let / const: 블록 레벨 스코프(block-level scope)

### var (function-level scope)
- 코드와 같이 함수 내에서 선언된 변수는 함수 내에서만 유효하다.
  (함수 내에서는 블록 내외부에 관계없이 유효하다.)
- 하지만 함수 외부에서는 참조할 수 없다.
```js
function func() {
    if(true) {
        var a = 'a';
        console.log(a); // 'a'
    }
    console.log(a); // 'a'
}
```

### let / const (block-level scope)
- 함수, if문, for문, while문, try/catch문 등의 모든 코드 블록 내부에서 선언된 변수는 코드 블록 내에서만 유효하며 코드 블록 외부에서는 참조할 수 없다.
```js
function func() {
    if(true) {
        let a = 'a';
        console.log(a); // 'a'
    }
    console.log(a); // ReferenceError: a is not defined
}
console.log(a); // ReferenceError: a is not defined
```