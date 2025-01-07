import './App.css'
import {useState} from 'react';
import Form from './Components/Form'

function App() {

  const [pro,setPro] = useState(true)

  return (
    <>

    <div>
      <header>
        <button onClick={()=>{setPro(true)}}>Form</button>
        <button onClick={()=>{setPro(false)}}>Product</button>
      </header>
    </div>

    
   <div><Form dev = {pro}/></div>
   </>
  )
}

export default App
