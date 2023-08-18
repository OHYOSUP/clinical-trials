### 목표

- 검색창 구현 + 검색어 추천 기능 구현 + 캐싱 기능 구현

### 참고자료

- API 레파지토리
    - https://github.com/walking-sunset/assignment-api

### 구현 목표

- 아래 사이트의 검색영역을 클론하기
    
    [한국임상정보](https://clinicaltrialskorea.com/)
    

- 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/81d5016d-ca92-494c-a90c-5458ffde01c5/Untitled.png)
    
    - 검색어가 없을 시 “검색어 없음” 표출

- API 호출별로 로컬 캐싱 구현
    - 캐싱 기능을 제공하는 라이브러리 사용 금지(React-Query 등)
    - 캐싱을 어떻게 기술했는지에 대한 내용 README에 기술
    - expire time을 구현할 경우 가산점
    
- 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
    - README에 전략에 대한 설명 기술
    
- API를 호출할 때 마다 `console.info("calling api")` 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정

- 키보드만으로 추천 검색어들로 이동 가능하도록 구현
    - 사용법 README에 기술

### 개발 조건 및 환경

- 기간: 7월 16일(일) 12:00 ~ 7월 19일(수) 24:00
- 언어 : JavaScript / TypeScript
- 사용가능한 기술:
    - 전역 상태 관리 툴(필수 사용 X, 필요 시 사용)
    - 스타일 관련 라이브러리(styled-components, emotion, UI kit, tailwind, antd 등)
    - HTTP Client(axios 등)
    - 라우팅 관련 라이브러리(react-router-dom)
