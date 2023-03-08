import React, { useState } from 'react';
import Display from '../Display/Display';
import CalculatorButtons from '../CalculatorButtons/CalculatorButtons';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('');
  const [operator, setOperator] = useState('');
  const [previousValue, setPreviousValue] = useState('');

  const evaluate = (operand1: string, op: string, operand2: string) => {
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);

    switch (op) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        return 0;
    }
  };


 
  

  const handleButtonClick = (label: string) => {
    switch (label) {
      case 'AC':
        setDisplayValue('');
        setOperator('');
        setPreviousValue('');
        break;
      case '+/-':
        setDisplayValue(prevValue => (parseFloat(prevValue) * -1).toString());
        break;
      case '%':
        setDisplayValue(prevValue => (parseFloat(prevValue) / 100).toString());
        break;
      case '÷':
        setDisplayValue('');
        setOperator('/');
        setPreviousValue(displayValue);
        break;
      case '×':
        setOperator('*');
        setPreviousValue(displayValue);
        setDisplayValue('');
        break;
      case '-':
        setOperator('-');
        setPreviousValue(displayValue);
        setDisplayValue('');
        break;
      case '+':
        setOperator('+');
        setPreviousValue(displayValue);
        setDisplayValue('');
        break;
      case '=':
        if (operator && displayValue !== '') {
          const result = evaluate(previousValue, operator, displayValue);
          setDisplayValue(result.toString());
          setOperator('');
          setPreviousValue('');
        }
        break;
      case '.':
        if (!displayValue.includes('.')) {
          setDisplayValue(prevValue => prevValue + '.');
        }
        break; 
      default:
        setDisplayValue(prevValue => {
          if (prevValue === '0') {
            return label;
          } else {
            return prevValue + label;
          }
        });
        break;
    }

    
  };

  return (
    <div className="flex h-screen items-center justify-center font-serif">
      <div className="flex h-2/3 w-3/4 max-w-sm  max-[375px]:h-3/6 flex-col items-end justify-end rounded-lg bg-black shadow-xl overflow-hidden">
        <Display value={displayValue} />
        <CalculatorButtons onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default Calculator;