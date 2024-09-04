import { useState } from 'react'

import './App.css'

import Button from './Components/Button'


function App() {
  
  // let  [firstName,setFirstName] = useState('Mahipal')
  // function handle() {
  //   setFirstName("Garv bhai !")
  // }


  return (
    <div>
        {/* <p>{firstName}</p>
        <button onClick={handle}>Click me!</button> */}
        {/* <form action="">
          <label htmlFor="userName">Username</label>
          <input type="text" name="userName" id="userName" />  
        </form> */}
        <TestButton sample="yo"/>
        <Button text="click"/>
    </div>
  )
}

export default App
