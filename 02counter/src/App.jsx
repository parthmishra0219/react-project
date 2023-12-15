import { useState } from 'react'
import './App.css'

function App() {

   let [counter, setCounter] = useState(15)

  
  // let counter = 15

  const addvalue = ()=>{
    console.log("Clicked" , counter);
    // counter = counter + 1;

    setCounter(counter + 1 );
   
  }

  const removeValue = ()=>{
     if(counter > 0){
      setCounter(counter - 1 );
     }
    

  }
  

  return (
    <>
    <h1> Counter Project</h1>
    <h2>Counter value : {counter}</h2>
    <div className="button-container">
    <button onClick={addvalue}
    >Add value </button>
    <button onClick={removeValue}>Remove value </button>
    </div>
    {/* <p>footer: {counter}</p> */}
    </>
  )
}

export default App
