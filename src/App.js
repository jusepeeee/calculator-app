import React from 'react';
import "./App.css";
import Display from './Display';
import Keyboard from './Keyboard';
import { useState } from 'react';

function App(){
  const [value, setValue] = useState('0');
  const [memory, setMemory] = useState("");
  const [operator, setOperator] = useState("");
  const [isInputModified, setIsInputModified] = useState(false);
  const [lastOperand, setLastOperand] = useState('');

  return (
      <div className='calculator-container'>
        <p id='logo'>Calculator <span id='author'>made with &#128150; by Giuseppe Cocice</span></p>
        <Display value={value} memory={memory} operator={operator}></Display>
        <Keyboard value={value} setValue={setValue} memory={memory} setMemory={setMemory} operator={operator}
        setOperator={setOperator} isInputModified={isInputModified} setIsInputModified={setIsInputModified}
        lastOperand={lastOperand} setLastOperand={setLastOperand}>
        </Keyboard>
      </div>
  );
}

export default App;