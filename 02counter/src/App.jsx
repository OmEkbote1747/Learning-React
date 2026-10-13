import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css' 

function App() {
  //let counter = 5;
  let [counter, setCounter] = useState(11);

  const addValue = () => {
    if(counter !== 20){
      setCounter(counter + 1);
    }
  }

  const decreaseValue = () => {
    if(counter !== 0){
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>React Project</h1>
      <h2>Counter</h2>
      <button onClick={addValue}>Increament {counter}</button>
      <br/>
      <button onClick={decreaseValue}>Decrement {counter}</button>
      <p><b>Counter Value:</b> {counter}</p>
    </>
  )
}

export default App
