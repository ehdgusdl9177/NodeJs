## 자바스크립트 타입
- 원시타입: Boolean, String, Number, Null, undefined, Symbol (불변성을 가지고 있다)
- 참조타입: Object, Array

![image](https://user-images.githubusercontent.com/75515697/234219560-712e995d-aa5e-46a5-ba78-5a82d2bb2b4d.png)

- 기본적으로 Javascript는 원시 타입에 대한 값을 저장하기 위해 Call Stack 메모리 공간을 사용하지만 참조 타입의 경우 Heap이라는 별도의 메모리 공간을 사용한다.
- 이 경우 Call Stack은 개체 및 배열 값이 아닌 Heap 메모리 참조 ID를 값으로 저장한다.
