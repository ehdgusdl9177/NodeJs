## Closure

- 다른 함수 내부에 정의된 함수(innerFunction)가 있는 경우 외부 함수(outerFunction)가 실행을 완료하고 해당 변수가 해당 함수 외부에서 더 이상 액세스할 수 없는 경우에도 해당 내부 함수는 외부 함수의 변수 및 범위에 액세스할 수 있다.

```js
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer Variable ${outerVariable}`);
    console.log(`Inner Variable ${innerVariable}`);
  };
}

const newFunction = outerFrunction("outside");
newFunction("inside");
```

1. outerFunction('outside')은 변수 'newFunction'에 할당되는 즉시 호출된다.
2. 호출되면 outerFunction은 변수 'newFunction'을 outerFunction(outerVariable) 대신 innerFunction(innerVariable)을 반환한다.
3. 그런 다음 변수를 newFunction('inside')으로 호출하여 innerFunction('inside')을 호출한다.

- 클로저는 innerFUnction이 원래 outerFunction('outside')으로 설정한 outerVariable 매개변수를 기억하고 액세스할 수 있다는 것이다.
- 따라서 'inside'로만 호출되었더라도 'outside'와 'inside'를 모두 console.log()할 수 있다.

- 다른 함수 내부에 정의된 함수(innerFunction)가 있는 경우 외부 함수(outerFunction)가 실행을 완료하고 해당 변수가 해당 함수 외부에서 더 이상 액세스할 수 없는 경우에도 해당 내부 함수는 외부 함수의 변수 및 범위에 액세스 할 수 있다.
