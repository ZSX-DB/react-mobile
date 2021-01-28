import logo from './logo.svg';
import './App.css';
import React from "react";
import { Cell, Checkbox } from 'zarm';

function App() {
    return (
        <div>
            <div className="test">
                <span className="test-label">label</span>
            </div>
            <Cell><Checkbox>普通</Checkbox></Cell>
            <Cell><Checkbox defaultChecked>默认选中</Checkbox></Cell>
            <Cell><Checkbox disabled>禁用</Checkbox></Cell>
            <Cell><Checkbox defaultChecked disabled>选中且禁用</Checkbox></Cell>
        </div>
    )
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    // );
}

export default App;
