import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css' 

function App() {
  //let counter = 5;
  let [counter, setCounter] = useState(11);

  // const addValue = () => {
  //   if(counter !== 20){
  //     setCounter(counter + 1);
  //   }
  // }

    const addValue = () => {
        setCounter(counter + 1);
        setCounter(counter + 1);
        setCounter(counter + 1);
        setCounter(counter + 1);
  //React performs STATE CHANGE in batches and hence these 4 same commands are considered the same as they do the same work.
  // Thus executed only once.
    }

  //   const addValue = () => {
  //       setCounter(prevCounter => prevCounter + 1 );
  //       setCounter(prevCounter => prevCounter + 1 );
  //       setCounter(prevCounter => prevCounter + 1 );
  //       setCounter(prevCounter => prevCounter + 1 );
  // // In this way. by providing callBack func inside the setCounter method.
  // // We can get the actual value of the counter atp and then add one to it.
  //   }
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
