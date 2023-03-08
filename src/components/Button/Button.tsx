import React from 'react';

interface ButtonProps {
  label: string;
  onClick: (label: string) => void;
}

 type ButtonStylesProps = { [key: string]: string };



function Button(props: ButtonProps) {
  const { label } = props;

  const handleClick = () => props.onClick(props.label);


  const baseStyle = 'w-1/4 p-4 text-2xl md:p-5 md:text-3xl  lg:p-6 lg:text-3xl text-white outline outline-black outline-1';

 
  const buttonStyles: ButtonStylesProps  = {
    'AC':  `${baseStyle} bg-dark-gray`,
    '+/-': `${baseStyle} bg-dark-gray`,
    '%' :  `${baseStyle} bg-dark-gray`,
    '÷' :  `${baseStyle} bg-orange`,
    '×' :  `${baseStyle} bg-orange`,
    '-' :  `${baseStyle} bg-orange`,
    '+' :  `${baseStyle} bg-orange`,
    '=' :  `${baseStyle} bg-orange rounded-br-md`,
    '7' :  `${baseStyle} bg-dark-gray`,
    '8' :  `${baseStyle} bg-dark-gray`,
    '9' :  `${baseStyle} bg-dark-gray`,
    '4' :  `${baseStyle} bg-dark-gray`,
    '5' :  `${baseStyle} bg-dark-gray`,
    '6' :  `${baseStyle} bg-dark-gray`,
    '1' :  `${baseStyle} bg-dark-gray`,
    '2' :  `${baseStyle} bg-dark-gray`,
    '3' :  `${baseStyle} bg-dark-gray`,
    '0' :  `${baseStyle} bg-dark-gray flex-1 w-1/4 rounded-bl-md`,
    '.' :  `${baseStyle} bg-dark-gray`,
  };

  return (
    <button
      className={buttonStyles[label]}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}

export default Button;
