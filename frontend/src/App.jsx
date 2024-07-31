import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [message, setmessage] = useState({})
  useEffect(()=>{
    messageFetch();
  },[]);
  async function messageFetch(){
    const response=await fetch("/api/message");
    const message=await response.json();
    console.log(message)
    setmessage(message);
  }
  
  return (
    // <>
      <p>{message?.message}</p>
    // </>
  )
}

export default App
