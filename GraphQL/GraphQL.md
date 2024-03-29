## GraphQL

- GraphQL은 API용 쿼리 언어 이다.
- GraphQL은 API의 데이터에 대한 이해하기 쉬운 설명을 제공하고, 클라이언트가 필요한 것을 정확하게 요청할 수 있는 능력을 제공한다.

<img width="748" alt="스크린샷 2023-09-04 오후 6 45 16" src="https://github.com/ehdgusdl9177/NodeJs/assets/75515697/c6e10477-da88-4699-859d-d4714837fba2">
<img width="771" alt="스크린샷 2023-09-04 오후 6 45 29" src="https://github.com/ehdgusdl9177/NodeJs/assets/75515697/8fdee7ef-9b0b-47a2-b7fd-cff916e93eb9">

### GrpahQL의 장점

- 프론트엔드 개발자는 백엔드 개발자가 REST API 개발을 마칠 때까지 기다리지 않아도 된다.
  - 주로 개발 과정은 백엔드 개발자가 REST API 개발을 마치고 그 후에 프론트엔드 개발자가 그 API에 호출해서 받아온 데이터를 이용해서 화면에 데이터를 보여준다. 하지만 GraphQL을 사용하면 프론트엔드 개발자와 백엔드 개발자가 전체 개발 프로세스를 병렬로 작업할 수 있다.
- Overfetching과 Underfetching을 막아준다.
- REST를 이용할 때 필요한 데이터를 만들기 위해서 여러 번 요청을 보내야 할 때 GraphQL은 한 번의 요청으로 데이터를 가져올 수 있다.

- Schema를 작성하기 때문에 데이터가 어떻게 이루어져 있는지 알 수 있다.
- Type을 작성하기 때문에 요청과 응답에 Valid한 데이터가 오고 갈 수 있다.

<img width="742" alt="스크린샷 2023-09-04 오후 6 49 50" src="https://github.com/ehdgusdl9177/NodeJs/assets/75515697/da927f6a-ed32-4947-a79d-0c99f0a0192b">

### GrpahQL의 단점

- 프론트엔드 개발자가 GraphQL 쓰는 법을 따로 배워야한다.
- 백엔드에 Schema 및 Type을 정해줘야 한다.(작은 앱에도 이렇게 하려면 번거로울 수 있다.)
- REST API보다 데이터를 캐싱하는게 까다롭다.
  - REST에서 구현하는 것보다 GraphQL로 단순화된 캐시를 구현하는 것이 더 복잡하다. REST API에서는 URL을 사용하여 리소스에 액세스하므로 리소스 URL이 식별자로 있으므로 리소스 수준에서 캐시할 수 있다. 반면 GraphQL에서는 동일한 엔터티에서 작동하더라도 각 쿼리가 다를수 있기 때문에 매우 복잡하다. 그러나 GraphQL 위에 구축된 대부분의 라이브러리는 효울적인 캐싱 메커니즘을 제공한다.
