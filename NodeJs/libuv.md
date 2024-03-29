## libuv(유니콘 벨로시랩터 라이브러리)

- 이벤트 루프를 기반으로 하는 비동기 I/O 에 대한 지원을 제공하는 다중 플랫폼 C 라이브러리이다.
- 주로 Node.js에서 사용하도록 개발되었지만 Julia, Luvit, Pyuv 등과 같은 다른 도구에서도 사용된다.
- Node.js는 이 라이브러리를 사용하여 지원되는 모든 플랫폼에서 통합 인터페이스로 I/O 작업을 추상화한다.
- 즉, libuv를 쓰면 각 플랫폼(window, linux)의 가장 빠른 비동기 I/O 인터페이스로 통일된 코드로 돌릴 수 있는 장점이 있다.

- 이 라이브러리는 파일 시스템, DNS, 네트워크, 파이프, 신호처리, 폴링 및 스트리밍을 처리하는 메커니즘을 제공한다.

- I/O는 Input과 Output의 약자로 입력과 출력, 간단히 줄여서 입출력이라고 한다.
- 입출력은 컴퓨터 내부 또는 외부의 장치와 프로그램 간의 데이터를 주고받는 것을 말한다

- 원래 unix랑 window와 파일을 컨트롤하는 방법이 다르지만 이런 식으로 libuv에서 서로 compatibal하게 해주므로 노드를 사용하는 사람은 따로 신경쓰지 않고 unix, window에서 같은 방법으로 사용할 수 있다.
