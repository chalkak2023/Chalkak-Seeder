# Chalkak-Seeder
찰칵의 테스트를 위해 seeding하는 프로젝트

# 프로세스
1. Bankend 프로젝트에서 .env 파일을 이 프로젝트로 복사해온다.
2. npm 패키지를 설치한다.
npm i
3. (선택) 기존 데이터베이스 다 버리고, 새로 데이터를 채워넣고 싶으면,
npm run schema:drop
npm run schema:sync
4. 시드를 집어넣는다.
npm run seed:run

# 명령어
- 3 생략(기존 데이터 보존)
npm run start
- 3 포함(기존 데이터 버림)
npm run start:drop