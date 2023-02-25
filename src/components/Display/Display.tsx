import React from 'react';

interface DisplayProps {
  value: string;
}

function Display(props: DisplayProps) {
  const { value } = props;

  const calculatorButtons: string[] = ['AC', '+/-', '%', '÷', '×', '+', '-'];

  return (
    <div className="flex h-20 items-center justify-end  px-4 py-2 text-3xl font-medium text-white">
      <h1>
        {' '}
        {!calculatorButtons.includes(props.value) &&
          props.value.replace(/[^\d.]/g, '')}
      </h1>
    </div>
  );
}

export default Display;
