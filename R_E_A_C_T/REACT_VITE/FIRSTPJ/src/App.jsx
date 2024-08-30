import { useState } from 'react'

import './App.css'

function App() {
  
  let  [firstName,setFirstName] = useState('Mahipal')
  function handle() {
    setFirstName("Garv bhai !")
  }


  return (
    <div>
        <p>{firstName}</p>
        <button onClick={handle}>Click me!</button>
    </div>
  )
}

export default App
