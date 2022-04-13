# Portfolio Page

🎈 [Visit my page!](https://fromnowwon.herokuapp.com/) 🎈 


## Tree
```
Portfolio
├── client (클라이언트)
│   ├── public (정적 자원 관리)
│   │   ├── favicon-1.ico
│   │   ├── favicon-2.ico
│   │   ├── favicon.ico
│   │   ├── images (이미지 관리)
│   │   └── index.html
│   ├── src
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   ├── App.scss (컴포넌트 스타일)
│   │   ├── common.scss (공통 스타일)
│   │   ├── index.scss (글로벌 스타일)
│   │   ├── setupProxy.js (http-proxy-middleware 설정)
│   │   ├── _action (redux-action)
│   │   │   ├── types.tsx (action types)
│   │   │   ├── mode_actions.tsx (페이지 모드 반환 함수)
│   │   │   └── user_actions.tsx (로그인/로그아웃/회원가입에 따른 사용자 권한 반환 함수)
│   │   ├── _reducers (redux-reducer)
│   │   │   ├── index.tsx (전체 리듀서 관리)
│   │   │   ├── mode_reducer.tsx (페이지 모드에 따라 상태 변경)
│   │   │   └── user_reducer.tsx (사용자 권한에 따라 상태 변경)
│   │   ├── components (컴포넌트 관리)
│   │   │   ├── Config.js (컴포넌트에서 재사용되는 코드 관리)
│   │   │   └── views
│   │   │       ├── Footer (푸터)
│   │   │       │   └── Footer.tsx
│   │   │       ├── NavBar (내비게이션바)
│   │   │       │   └── NavBar.tsx
│   │   │       ├── commons (재사용 컴포넌트)
│   │   │       │   ├── Loader.tsx (데이터 렌더링 되기 전에 보여지는 Load Spinner)
│   │   │       │   ├── ScrollToTop.tsx (페이지 상단 이동 버튼)
│   │   │       │   └── Typing.tsx (각 페이지 타이틀 인터렉션)
│   │   │       └── pages (각 페이지 컴포넌트 관리)
│   │   │           ├── AboutPage (소개 페이지)
│   │   │           │   ├── AboutPage.tsx
│   │   │           ├── ContactPage (문의 페이지)
│   │   │           │   └── ContactPage.tsx
│   │   │           ├── LabPage (프로젝트 페이지)
│   │   │           │   └── LabPage.tsx
│   │   │           ├── LandingPage (랜딩페이지)
│   │   │           │   ├── LandingPage.tsx
│   │   │           │   └── Sections
│   │   │           │       ├── AboutSection.tsx
│   │   │           │       ├── LabSection.tsx
│   │   │           │       └── Typing.tsx
│   │   │           ├── LoginPage (로그인 페이지)
│   │   │           │   └── LoginPage.tsx
│   │   │           ├── NotFound (404 페이지)
│   │   │           │   └── NotFound.tsx
│   │   │           └── RegisterPage (회원가입 페이지)
│   │   │               └── RegisterPage.tsx
│   │   ├── data (데이터 관리)
│   │   │   └── labList.js (프로젝트 정보)
│   │   └── hoc 
│   │       └── auth.tsx (사용자 권한 체크 함수)
│   └── tsconfig.json
├── Procfile (for Heroku)
├── package-lock.json
├── package.json
└── server (백엔드)
    ├── config
    │   ├── key.js (개발 환경 분기 설정)
    │   ├── dev.js (Devlopment 환경에서 필요한 모듈 관리)
    │   └── prod.js (Production 환경에서 필요한 모듈 관리)
    ├── index.js (서버 세팅)
    ├── mailer.js (Contact form 모듈)
    ├── middleware
    │   └── auth.js (사용자 권한 확인 미들웨어)
    └── models
        └── User.js (사용자 스키마)
```