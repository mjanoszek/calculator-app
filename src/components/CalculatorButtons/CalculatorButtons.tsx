import React from 'react';
import Button from '../Button/Button';

interface CalculatorButtonsProps {
  onClick: (label: string) => void;
}

function CalculatorButtons(props: CalculatorButtonsProps) {
  const handleClick = (label: string) => {
    props.onClick(label);
  };

  return (
    <div className="max-w-96 flex flex-wrap items-center justify-center ">
      <Button label="AC" onClick={handleClick} />
      <Button label="+/-" onClick={handleClick} />
      <Button label="%" onClick={handleClick} />
      <Button label="÷" onClick={handleClick} />
      <Button label="7" onClick={handleClick} />
      <Button label="8" onClick={handleClick} />
      <Button label="9" onClick={handleClick} />
      <Button label="×" onClick={handleClick} />
      <Button label="4" onClick={handleClick} />
      <Button label="5" onClick={handleClick} />
      <Button label="6" onClick={handleClick} />
      <Button label="-" onClick={handleClick} />
      <Button label="1" onClick={handleClick} />
      <Button label="2" onClick={handleClick} />
      <Button label="3" onClick={handleClick} />
      <Button label="+" onClick={handleClick} />
      <Button label="0" onClick={handleClick} />
      <Button label="." onClick={handleClick} />
      <Button label="=" onClick={handleClick} />
    </div>
  );
}

export default CalculatorButtons;
