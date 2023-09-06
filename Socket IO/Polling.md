## Polling

- Rest API도 WebSocket과 같이 실시간 통신이 가능하게 해주는 방식
- 클라이언트가 일정한 간격으로 서버에 요청을 보내서 결과를 전달받는 방식이다.

```js
const POLL_TIME = 1000;

setInterval(() => {
  fetch("https://text.com/location");
}, POLL_TIME);
```

- 이 방법은 구현이 쉽다는 장점이 있지만 서버의 상태가 변하지 않았을 때도 계속 요청을 보내서 받아와 하기에 필요 없는 요청이 많아지며, 또한 요청 간격을 정하기도 쉽지 않다.
- 폴링의 주기가 짧으면 서버의 성능에 부담
- 주기가 길면 실시간성이 좋지 않음
- 서버에서 바뀐 데이터가 없어도 계속 요청을 해야하고 결과를 줘야함

### Long Polling

- Polling의 단점으로 인해 새롭게 고안해 낸 것이 Long Polling이다.
- Long Polling도 Polling처럼 계속 요청을 보내지만 차이점은 일반 폴링은 주기적으로 요청을 보낸다면 롱폴링은 요청을 보내면 서버가 대기하고 있다가 이벤트가 발생했거나 타임아웃이 발생할 때 까지 기다린 후에 응답을 주게된다.
- 이렇게 클라이언트는 응답을받자마자 다시 요청을 보내게 된다.
- 서버의 상태 변화가 많이 없다면 폴링 방식보다 서버의 부담이 줄어들게 된다.
- 이러한 특징으로 롱 폴링은 실시간 메시지 전달이 중요하지만, 서버의 상태 변화가 자주 발생하지 않는 서비스에 적합하다.

<img width="642" alt="스크린샷 2023-09-06 오전 10 27 09" src="https://github.com/ehdgusdl9177/NodeJs/assets/75515697/37797df7-64f2-464c-9d49-e25bcc41a991">

### Streaming

- 클라이언트에서 서버에 요청을 보내고 끊기지 않는 연결 상태에서 계속 데이터를 수신한다.
- 양 방향 소통보다는 서버에서 계속 요청을 받는 것에 더 유용하다.

<img width="764" alt="스크린샷 2023-09-06 오전 10 27 26" src="https://github.com/ehdgusdl9177/NodeJs/assets/75515697/38c957ab-8ef8-4ed4-9dbc-3d5e0d6ff188">

- Polling, Long Polling, HTTP Straming 이 세가지의 공통점은 결국 HTTP 프로토콜을 이용하며 이 HTTP 요청과 응답에 Header가 같이 전달되는데 이 Header에 많은 데이터가 들어 있어서 너무 많은 요청과 응답의 교환은 부담을 주게 된다.

<img width="767" alt="스크린샷 2023-09-06 오전 10 27 36" src="https://github.com/ehdgusdl9177/NodeJs/assets/75515697/fdf5d1dc-b836-40bc-a0c4-67102fbd6a2c">

### HTTP 통신 방법과 WebSocket의 차이점

- WebSocket은 처음에 접속 확립(Handshake)을 위해서만 HTTP 프로토콜을 이용하고 그 이후 부터는 독립적인 프로토콜 ws를 사용하게 된다.
- 또한 HTTP 요청은 응답이 온 후 연결이 끊기게 되지만 WebSocket은 핸드 쉐이크가 완료되고 임의로 연결을 끊기 전까지는 계속 연결이 되어 있다.

<img width="429" alt="스크린샷 2023-09-06 오전 10 32 53" src="https://github.com/ehdgusdl9177/NodeJs/assets/75515697/f0c03e94-4812-48c4-ad77-cb442d8a2f1b">
