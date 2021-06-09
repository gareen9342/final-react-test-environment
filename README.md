# final-react-test-environment

개발환경 세팅 기록      
현재 버전은 tailwind ver     
_개발환경 세팅을 하나씩 커밋 단위로 기록을 남기기 위함_     

> to run this project     
> _(root에서) npm run dev_

## 파일구조

- pages  
  _페이지 단위당 구성 요소_

- components  
  _header, footer 이런 식으로 정말로 분리되어서 쓸 수 있는 컴포넌트들_

- util  
  _자주 쓰는 유틸함수_

- hooks  
  _React hooks_

- service  
  _API server와 연동_

## dependencies

### react

```json
  "react": "^17.0.2",
  "react-dom": "^17.0.2",
  "react-router-dom": "^5.2.0"
```

### 웹팩

```json
  "webpack": "^5.38.1",
  "webpack-cli": "^4.7.2",
  "webpack-dev-server": "^3.11.2"
  "react-refresh": "^0.10.0",
  ========== webpack
  "@babel/core": "^7.14.3"
  "@babel/preset-env": "^7.14.4",
  "@babel/preset-react": "^7.13.13",
  ========== Babel
  "babel-loader": "^8.2.2",
  "html-loader": "^2.1.2",
  "html-webpack-plugin": "^5.3.1",
  "css-loader": "^5.2.6",
  "style-loader": "^2.0.0",
  ========== loaders
```

### css

```json
  "autoprefixer": "^10.2.6",
  "tailwindcss": "^2.1.4",
  "postcss": "^8.3.0",
  "postcss-loader": "^5.3.0",
  "mini-css-extract-plugin": "^1.6.0",
```
