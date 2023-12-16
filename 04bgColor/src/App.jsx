import { useState } from 'react'


function App() {
const [color , setColor]  = useState("olive")

  return (
   
     <div className="w-full h-screen duration-200"
     style={{backgroundColor : color}}
     >

<h1 

className=" h-screen flex items-center justify-center font-bold text-4xl" > Choose your Color</h1>


      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
     



        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl">
          
          <button 
          onClick={()=> setColor("red")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-bold"  
          style={{backgroundColor : "red"}}>Red</button>

          <button 
          onClick={()=> setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-bold"  
          style={{backgroundColor : "blue"}}>Blue</button>

          <button
          onClick={()=> setColor("green")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-bold"  
          style={{backgroundColor : "green"}}>Green</button>

          <button 
          onClick={()=> setColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-bold"  
          style={{backgroundColor : "pink"}}>Pink</button>

          <button 
          onClick={()=> setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg font-bold"  
          style={{backgroundColor : "yellow"}}>Yellow</button>

          <button 
          onClick={()=> setColor("grey")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-bold"  
          style={{backgroundColor : "grey"}}>Grey</button>

          <button  
          onClick={()=> setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-bold"  
          style={{backgroundColor : "orange"}}>Orange</button>

          <button  
          onClick={()=> setColor("lavender")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg font-bold"  
          style={{backgroundColor : "lavender"}}>Lavender</button>

          <button
          onClick={()=> setColor("beige")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg font-bold"  
          style={{backgroundColor : "beige"}}>Beige</button>

          {/* <button className="outline-none px-4 py-1 rounded-full text-yellow shadow-lg"  
          style={{backgroundColor : "cyan"}}>Cyan</button> */}
          </div> 
      </div>
     </div>
    
  )
}

export default App
