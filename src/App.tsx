import React, { useState } from 'react';
import Display from './components/Display/Display';
import CalculatorButtons from './components/CalculatorButtons/CalculatorButtons';

function App() {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (label: string) => {
    if (label === 'AC') {
      //todo
    } else if (label === '+/-') {
      // todo
    } else if (label === '%') {
      //todo
    } else if (label === '÷') {
      // tood
    } else if (label === '×') {
      //todo
    } else if (label === '=') {
      //todo
    }
  };
  return (
    <div className="flex h-screen items-center justify-center font-serif">
      <div className="flex h-2/3 w-3/4 max-w-sm flex-col items-end justify-end rounded-lg bg-gray-800 shadow-xl">
        <Display value={displayValue} />
        <CalculatorButtons onClick={handleButtonClick} />
      </div>
    </div>
  );
}
export default App;
