import React from 'react';

interface ButtonProps {
  label: string;
  onClick: (label: string) => void;
}

 type ButtonStylesProps = { [key: string]: string };



function Button(props: ButtonProps) {
  const { label } = props;

  const handleClick = () => props.onClick(props.label);


 
  const buttonStyles: ButtonStylesProps  = {
    'AC': ' w-1/4 bg-dark-gray p-5 max-[370px]:text-lg text-3xl text-white outline outline-black outline-1',
    '+/-' : 'w-1/4 bg-dark-gray p-5 max-[370px]:text-lg text-3xl text-white outline outline-black outline-1',
    '%' : ' w-1/4 bg-dark-gray p-5 max-[370px]:text-lg text-3xl text-white outline outline-black outline-1',
    '÷' : ' w-1/4 bg-orange p-5 max-[370px]:text-lg text-3xl text-white outline  outline-black outline-1',
    '×' : ' w-1/4 bg-orange p-5 max-[370px]:text-lg text-3xl text-white outline outline-black outline-1',
    '-' : ' w-1/4 bg-orange p-5 max-[370px]:text-lg text-3xl text-white outline outline-black outline-1',
    '+' : ' w-1/4 bg-orange p-5 max-[370px]:text-lg text-3xl text-white outline outline-black outline-1',
    '=': ' w-1/4 bg-orange p-5 max-[370px]:text-lg text-3xl text-white outline outline-black outline-1 rounded-br-md',
    '7' : ' w-1/4 bg-gray p-5 max-[370px]:text-lg text-3xl text-white outline outline-black outline-1',
    '8' : ' w-1/4 bg-gray p-5 max-[370px]:text-lg text-3xl text-white outline outline-black outline-1',
    '9' : ' w-1/4 bg-gray p-5 max-[370px]:text-lg text-3xl text-white outline outline-black outline-1',
    '4' : ' w-1/4 bg-gray p-5 max-[370px]:text-lg text-3xl text-white outline outline-black outline-1',
    '5' : ' w-1/4 bg-gray p-5 max-[370px]:text-lg text-3xl text-white outline outline-black outline-1',
    '6' : ' w-1/4 bg-gray p-5 max-[370px]:text-lg text-3xl text-white outline outline-black outline-1',
    '1' : ' w-1/4 bg-gray p-5 max-[370px]:text-lg text-3xl text-white outline outline-black outline-1',
    '2' : ' w-1/4 bg-gray p-5 max-[370px]:text-lg text-3xl text-white outline outline-black outline-1',
    '3' : ' w-1/4 bg-gray p-5 max-[370px]:text-lg text-3xl text-white outline outline-black outline-1',
    '0': ' flex-1 w-1/4 rounded-bl-md bg-gray p-5 max-[370px]:text-lg text-3xl text-white outline outline-black outline-1',
    '.' : 'w-1/4 bg-gray p-5 max-[370px]:text-lg text-3xl text-white outline outline-black outline-1',
    

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
