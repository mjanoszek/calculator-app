import React from 'react';

interface ButtonProps {
  label: string;
  onClick: (label: string) => void;
}

function Button(props: ButtonProps) {
  const { label, onClick } = props;
  const handleClick = () => {
    props.onClick(props.label);
  };

  return (
    <button
      className={
        label == '0'
          ? 'outline-red-60 w-1/4 flex-1 rounded-bl-md bg-gray-700 p-5 text-3xl text-white outline outline-1'
          : label == '='
            ? 'outline-red-60 w-1/4 rounded-br-md bg-gray-700 p-5 text-3xl text-white outline outline-1'
            : 'outline-red-60 w-1/4 bg-gray-700 p-5 text-3xl text-white outline outline-1'
      }
      onClick={handleClick}
    >
      {label}
    </button>
  );
}

export default Button;
