# mevn-boiler-plate

MongoDB, Express, Vuejs, Nodejs로 구성된 보일러 플레이트

## 기능명세

### server

* MongoDB user 스키마 생성
* 회원가입 api 구현
* 로그인 api 구현
* 로그아웃 api 구현
* Authenticate api 구현

### client

* 회원가입 client 제공
* 로그인 client 제공
* 로그아웃 client 제공
* Authenticate middleware 구현
* client validation 제공

## 사용법

1. server/config/dev에 dev.js를 생성하여 `mongoURI` 키로 데이터베이스 토큰 값 입력
2. root 디렉토리에서 `npm i` 커맨드로 server 하위 모듈 설치
3. client 디렉토리에서 `npm i` 커맨드로 client 하위 모듈 설치
4. 다음 커맨드로 server, client 동시 실행 `npm run dev`

