import React from 'react';
import logo from './logo.svg';
import './App.css';
// 导入子组件MyTest
import MyTest from './MyTest';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <MyTest/>
            </header>
        </div>
    );
}

export default App;
