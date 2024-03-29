## MVC(Model, Comtroller, View)

- 소스코드가 점점 길어지고 복잡해지먄 관리도 힘들어 지기 때문에 소스코드를 패턴에 맞게 작성하면 좋다.

### MVC Pattern

- MVC(모델 - 뷰 - 컨트롤러)는 관련 프로그램 로직을 상호 연결된 3개의 요소로 나누는 사용자 인터페이스를 개발하는 데 일반적으로 사용되는 소프트웨어 아키텍처 패턴이다.
- MVC(모델 - 뷰 - 컨트롤러)는 사용자 인터페이스, 데이터 및 논리제어를 구현하는데 널리 사용되는 소프트웨어 디자인 패턴이다.
- 소프트웨어의 비즈니스 로직과 화면을 구분하는데 중점을 두고 있다.

<img width="201" alt="스크린샷 2023-08-21 오후 3 34 15" src="https://github.com/ehdgusdl9177/NodeJs/assets/75515697/e5611f57-db00-456b-abbb-59c0a50613bc">

- Model: 데이터와 비즈니스 로직을 관리한다.
- View: 레이아웃과 화면을 처리한다.
- Controller: 명령을 모델과 뷰 부분으로 라우팅한다.

<img width="672" alt="스크린샷 2023-08-21 오후 3 34 27" src="https://github.com/ehdgusdl9177/NodeJs/assets/75515697/e9c1cb56-131a-49a4-a056-b5cf9a96420a">

### Model

- 모델은 앱이 포함해야 할 데이터가 무엇인지를 정의한다.
- 데이터의 상태가 변경되면 모델 일반적으로 뷰에게 알리며 가끔 컨트롤러에게 알리기도 한다.
- 주로 모델은 어떤 종류의 데이터베이스에 포함되어있었을 것이다.(MySQL과 같은 전통적인 서버 사이드 데이터베이스, 또는 IndexedDB 같은 클라이언트 사이드 솔루션)

### View

- 뷰는 앱의 데이터를 보여주는 방식을 정의한다.
- 뷰는 항목이 사용자에게 보여지는 방식을 정의하며, 표시할 데이터를 모델로부터 받는다.

### Controller

- 컨트롤러는 앱의 사용자로부터의 입력에 대한 응답으로 모델 또는 뷰를 업데이트하는 로직을 포함한다.
- 예를 들어보면, 쇼핑 리스트는 항목을 추가하거나 제거할 수 있게 해주는 입력 폼과 버튼을 갖는다. 이러한 액션들은 모델이 업데이트되는 것이므로 입력이 컨트롤러에게 전송되고, 모델을 적당하게 처리한 다음 업데이트된 데이터를 뷰로 전송한다.

- 단순히 데이터를 다른 형태로 나타내기 위해 뷰를 업데이트하고 싶을 수도 있다.(예를 들면, 항목을 알파벳 순서로 정렬한다거나, 가격이 낮은 순서 또는 높은 순서로 정렬) 이런 경우에 컨트롤러는 모델을 업데이트할 필요없이 바로 처리할 수 있다.
