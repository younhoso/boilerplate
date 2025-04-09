# createFix front boilerplate

createFix front boilerplate 코드 입니다.

## Getting Started

### • 필수 환경

[Node.js v22.14.0](https://gbcgc.atlassian.net/l/cp/5qXF2ERJ) 설치 방법은 공식 문서를 참고하세요.

[Yarn v1.22.21](https://gbcgc.atlassian.net/wiki/spaces/SCRUM/pages/12615715/NODE+NVM+-#Node.js%EB%A5%BC-%EC%84%A4%EC%B9%98%ED%95%9C-%ED%9B%84-yarn%EC%9D%84-%EC%84%A4%EC%B9%98) 설치 방법은 여기에서 확인하세요.

### • package.json 있는 의존성 라이브러리 설치

```bash
yarn install

or

yarn
```

### • 개발 서버 실행

로컬 개발 서버를 실행하려면 아래 명령어를 사용하세요.

```bash
yarn dev
```

### • 빌드 실행

프로덕션용으로 프로젝트를 빌드하려면 다음 명령어를 실행하세요.

```bash
yarn build
```

### • 빌드된 프로젝트 실행

빌드된 프로젝트를 실행하려면 아래 명령어를 사용하세요.

```bash
yarn start
```

### • 스토리북 실행

Storybook UI 컴포넌트를 개발단계에서 실행하려면 아래 명령어를 사용하세요.

```bash
yarn storybook
```

## ⚒️개발 스택 및 라이브러리

![](https://img.shields.io/badge/typescript-3578e5?style=for-the-badge&logo=typescript&logoColor=white)
![](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white)
![](https://img.shields.io/badge/REACT-087ea4?style=for-the-badge&logo=REACT&logoColor=white)
![](https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
![](https://img.shields.io/badge/styledComponents-db7093?style=for-the-badge&logo=styled-components&logoColor=white)
![](https://img.shields.io/badge/AXIOS-671ddf?style=for-the-badge&logo=AXIOS&logoColor=white)\
![](https://img.shields.io/badge/reactquery-ff4154?style=for-the-badge&logo=reactquery&logoColor=white)

## husky

> commit/push 전에 코드 검증\
> pre-commit: commit 전에 eslint, prettier 실행\
> pre-push: push 전에 jest 테스트 실행

### • husky 설치

husky 초기화 (husky.sh 파일 생성)

```bash
npx husky install
```

pre-commit 훅 다시 추가

```bash
npx husky add .husky/pre-commit "npx lint-staged"
```

git commit 테스트

```bash
git add .
git commit -m "husky test"
```

이제 commit 전에 lint & prettier가 자동으로 실행 됩니다! 🚀🔥
