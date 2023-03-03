import React from 'react';

interface DisplayProps {
  value: string;
}

function Display(props: DisplayProps) {

  return (
    <div className="flex items-center justify-end m-2 px-4 py-2 text-6xl font-medium text-white max-[375px]:text-3xl">
      <h1> 
       {props.value}
     </h1>
    </div>
  );
}

export default Display;
