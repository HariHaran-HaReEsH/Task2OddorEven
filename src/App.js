import React, { useEffect } from 'react';
import './App.css';

function App() {
  const [count,setcount]=React.useState(0);
  const [message,setmessage]=React.useState("Hiii   ");
  

  const increment=()=>{
    setcount(count+1);    
    // setmessage(count % 2=== 0 ? "I'm even" : "I'm odd");
    console.log(count);
    console.log(count % 2 === 0);
    // count % 2=== 0 ? setmessage("I'm even") : setmessage("I'm odd");

  }
  const decrement=()=>{
    setcount(count-1);
    // setmessage(count % 2=== 0 ? "I'm even" : "I'm odd");    
    // count % 2=== 0 ? setmessage("I'm even") : setmessage("I'm odd");
  }

  useEffect(()=>{
    setmessage(count>0 && count%2===0?"I'm even":count===0?"Hii ":count<0 ?"I'm negative":"I'm odd")
  },[count]);


  return (
    <div className="App">
      <h1>Count : {count}</h1>
      <button onClick={increment} >Increment</button>
      <button onClick={decrement} >Decrement</button>
      <p>{message}</p>
       
    
      {/* <p>{count % 2=== 0 ? message.setmessage("I'm even") : message.setmessage("I'm odd")}</p> */}


    </div>
  );
}

export default App;
