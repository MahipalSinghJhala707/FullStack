import React from 'react';
import { useState } from 'react';

function TestButton({sample}) {
//   Hook (optional)
  const [text, setState] = useState(sample);

  // Logic (optional)
  const handleClick = () => {
    setState("you clicked")
    console.log("button got clicked");
    
  };

  // Return JSX
  return (
    <div >
      <p >{text}</p>
      <button onClick={handleClick} className = 'bg-blue-500 py-2 px-6 rounded-md m-2'>Click Me</button>
    </div>
  );
}

export default TestButton;