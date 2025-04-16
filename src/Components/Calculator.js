import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './Calculator.scss';

const Calculator = () => { 
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    const btnText = e.target.value;
    setValue(prevValue => prevValue + btnText)
  };

  const evaluateAll = () => {
    setValue(evaluate(value).toString());
  }

  const clearAll = () => {
    setValue("");
  }

  const deleteOne = () => {
    setValue(value.slice(0,-1))
  } 

  return (
    <div className='calculator'>
      <div className='title'>
        <input type='text' value={value} />
      </div>
      <div className='btn'>
        <button value='%' onClick={handleClick}>%</button>
        <button onClick={clearAll}>C</button>
        <button onClick={deleteOne}>DEL</button>
        <button onClick={handleClick}>/</button>

        <button value='9'  onClick={handleClick}>9</button>
        <button value='8'  onClick={handleClick}>8</button>
        <button value='7'  onClick={handleClick}>7</button>
        <button value='+' onClick={handleClick}>+</button>

        <button value='6'  onClick={handleClick}>6</button>
        <button value='5'  onClick={handleClick}>5</button>
        <button value='4'  onClick={handleClick}>4</button>
        <button value='-'  onClick={handleClick}>-</button>

        <button value='3' onClick={handleClick}>3</button>
        <button value='2' onClick={handleClick}>2</button>
        <button value='1' onClick={handleClick}>1</button>
        <button value='*'  onClick={handleClick}>*</button>

        <button value='00'  onClick={handleClick}>00</button>
        <button value='0'  onClick={handleClick}>0</button>
        <button value='.'  onClick={handleClick}>.</button>
        <button value='='  className='evaluate' onClick={evaluateAll}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
