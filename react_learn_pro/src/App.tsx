import React from 'react';
import logo from './logo.svg';
import './App.css';
/**
 * @desc:创建react项目
 * 一、CRA脚手架
 * npx create-react-app react-ts-learn --template typescript
 * npm init react-app 项目名
 *
 * 二、使用vite方式创建react项目
 * npm create vite@latest -- --template react-ts
 *
 * todo：https://juejin.cn/post/7230434242375073849
 *
 *
 *
 *
 * */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
