import React from 'react';
import "./Keyboard.css";

function Keyboard({value, setValue, memory, setMemory, operator, setOperator, isInputModified,
    setIsInputModified, lastOperand, setLastOperand}){
    
    function getInput(e){
        setValue(prev => {
            if(prev === '0')
            {
                return e.target.value;
            }
            else if(isInputModified === false){
                return e.target.value;
            }
            return prev + e.target.value;
        })
        setIsInputModified(true);
    }

    function calculate(e){
        if(!isInputModified && operator !== ""){
            setOperator(e.target.value);
            return;
        }

        setMemory(prev => {
            if(prev === "")
            {
                return value;
            }
            else
            {
                let result = 0;
                switch(operator)
                {
                    case '+':
                        result = Number(prev) + Number(value);
                        break;
                    case '-':
                        result = Number(prev) - Number(value);
                        break;
                    case '/':
                        result = Number(prev) / Number(value);
                        break;
                    case '*':
                        result = Number(prev) * Number(value);
                        break;
                    default:
                        break;
                }
                const resultFormatted = parseFloat(result.toFixed(8));
                setValue(resultFormatted.toString());
                return resultFormatted.toString();
            }
        })
        setOperator(e.target.value);
        setIsInputModified(false);
        setLastOperand(value);
    }

    function cleanAll(){
        setValue('0');
        setMemory("");
        setOperator("");
        setIsInputModified(false);
        setLastOperand("");
    }

    function cleanInput(){
        setValue('0');
        setIsInputModified(false);
    }

    function equalOperator(){
        setValue(prev => {
            let operand = isInputModified ? prev : lastOperand;
            if(memory !== '' && operator !== ''){
                let result = 0;
                switch(operator){
                    case '+':
                        result = Number(memory) + Number(operand);
                        break;
                    case '-':
                        result = Number(memory) - Number(operand);
                        break;
                    case '/':
                        result = Number(memory) / Number(operand);
                        break;
                    case '*':
                        result = Number(memory) * Number(operand);
                        break;   
                    default:
                        break;
                }
                const resultFormatted = parseFloat(result.toFixed(8));
                setMemory(resultFormatted.toString());
                setLastOperand(operand)
                return resultFormatted.toString();
            }
            return prev;
        })
        setIsInputModified(false);
    }

    function factorial(n){
        return (n <= 1) ? 1 : n * factorial(n-1);
    }

    function getFactorial(){
        setValue(prev => {
            let result = parseFloat(factorial(prev).toFixed(8));
            setLastOperand(result);
            return result.toString();
        })
    }

    function getPowerTwo(){
        setValue(prev => {
            let result = parseFloat((prev * prev).toFixed(8));
            setLastOperand(result);
            return (result).toString();
        })
    }

    function getSquareRoot(){
        setValue(prev => {
            let result =  parseFloat(Math.sqrt(prev).toFixed(8));
            setLastOperand(result);
            return result.toString();
        })
    }

    function getPercentage(){
        if(memory === "" || operator === ""){
            return;
        }
        setMemory(prev => {
            let result = 0;
            const base = Number(prev);
            const percentage = Number(value) / 100;
            switch(operator){
                case '+':
                    result = base + (percentage * base);
                    break;
                case '-':
                    result = base - (percentage * base);
                    break;
                case '/':
                    result = base / percentage;
                    break;
                case '*':
                    result = base * percentage;
                    break;
                default:
                    break;
            }
            const resultFormatted = parseFloat(result.toFixed(8));
            setValue((percentage * base).toString());
            setLastOperand(percentage * base);
            return resultFormatted.toString();
        })
        setIsInputModified(false);
    }

    function setFloatingPoint(){
        setValue(prev => {
            if(prev.includes('.')){
                return prev;
            }
            return prev + '.';
        })
        setIsInputModified(true);
    }

    return(
        <div className='keyboard-container'>

            <button onClick={getSquareRoot}>{'\u221A'}</button>
            <button onClick={getPowerTwo}>{'x\u00B2'}</button>
            <button value="!" onClick={getFactorial}>!</button>
            <button onClick={cleanInput} className='delete-btn'>CE</button>
            
            <button value="7" onClick={(e) => getInput(e)}>7</button>
            <button value="8" onClick={(e) => getInput(e)}>8</button>
            <button value="9" onClick={(e) => getInput(e)}>9</button>
            <button onClick={getPercentage}>%</button>

            <button value="4" onClick={(e) => getInput(e)}>4</button>
            <button value="5" onClick={(e) => getInput(e)}>5</button>
            <button value="6" onClick={(e) => getInput(e)}>6</button>
            <button value="+" onClick={(e) => calculate(e)}>+</button>

            <button value="1" onClick={(e) => getInput(e)}>1</button>
            <button value="2" onClick={(e) => getInput(e)}>2</button>
            <button value="3" onClick={(e) => getInput(e)}>3</button>
            <button value="-" onClick={(e) => calculate(e)}>-</button>

            <button onClick={setFloatingPoint}>.</button>
            <button value="0" onClick={(e) => getInput(e)}>0</button>
            <button value="/" onClick={(e) => calculate(e)}>/</button>
            <button value="*" onClick={(e) => calculate(e)}>&times;</button>

            <button className="span delete-btn" onClick={cleanAll}>RESET</button>
            <button className="span result-btn" value="=" onClick={equalOperator}>=</button>
        </div>
    );
}

export default Keyboard;