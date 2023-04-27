## Loops
- 자바스크립트에서 루프(Loop)를 사용하면 코드 블록을 여러 번 실행할 수 있게 해준다.

### 루프의 종류
- for: 코드 블록을 여러번 반복
- for/in: 객체의 속성을 따라 반복
- while: 지정된 조건이 true인 동안 코드 블록을 반복
- do/while: do/while 루프는 while 루프의 변형이다. 이 루프는 조건이 true 인지 검사하기 전에, 코드 블록을 한 번 실행한다. 그러고 나서 조건이 true인 동안 루프를 반복한다.

### for
- 코드 블록을 여러 번 반복한다.
- for(statement1; statement2; statement3) {}
    - state1: 루프가 시작되기 전에 실행
    - state2: 루프 실행을 위한 조건
    - state3: 루프 실행된 후마다 실행

```js
for(let i = 0; i < 10; i++) {
    if(i === 3) {
        console.log('It is 3');
        continue;
    }
    if(i === 5) {
        console.log)('It is 5');
        break;
    }
    console.log('Number ' + i);
}
```

### for/in
- 객체의 속성(property)을 따라 반복한다.
```js
const user = {
    name: 'Han',
    province: '경기도',
    city: '성남시'
}

for(let x in user) {
    console.log(`${x} : ${user[x]}`);
}
```

### while
- 지정된 조건이 true 인 동안 코드 블록을 반복
```js
let i = 0;

while(i < 10) {
    console.log('Number  ' + i);
    i++;
}
```

### do/while
- do/while 루프는 while 루프의 변형이다.
- 이 루프는 조건이 true인지 검사하기 전에, 코드 블록을 한 번 실행한다. 그러고 나서 조건이 true 인 동안 루프를 반복한다.
```js
let i = 0;
do {
    console.log('Number ' + i);
    i++;
}

while(i < 10);

-----------------------------------
let i = 100;
do {
    console.log('Number ' + i);
    i++
}

while(i < 10);
```

### 배열을 Loop로 이용해서 컨트롤 해주기
```js
// LOOP THROUGH ARRAY
const locations = ['서울', '부산', '경기도', '대구'];

// FOR
for(let i = 0; i < locations.length; i++) {
    console.log(locations[i]);
}

// FOREACH
locations.forEach(function (location, index, array) {
    console.log(`${index} : ${location}`);
    console.log(array);
});

// MAP
location.map(function (location) {
    console.log(loaction);
})
```

### for vs foreach
- For 루프는 원래 사용되었던 접근 방식이지만 forEach는 배열 요소를 반복하는 새로운 접근 방식이다.
- For 루프는 필요한 경우 break문을 사용하여 for문을 중단할 수 있지만 forEach에서는 이와 같은 작업을 수행할 수 없다.
- For 루프는 await와 함께 작동되지만 forEach는 await와 완벽하게 작동하지 않는다.
- For 루프를 사용한 성능은 ForEach 루프보다 빠르다.
![image](https://user-images.githubusercontent.com/75515697/234778133-bbc01fcc-bf8a-47a2-9355-3f1472c41e23.png)
