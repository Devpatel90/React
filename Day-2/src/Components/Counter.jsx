import { useState } from "react"
import Counter2 from "./Counter2"
import sty from  "./Counter.module.css"

function Counter(){
    let [state,setState] = useState(0)

    const handleDec = () => {
        (state<=0) ? alert("Zero is minimum") : setState(state-1)
    }

    const handleInc = () => {
        setState(state+1)
    }
    return (
        <div className={sty.counter1}>
            <button className={sty.counter2} onClick={handleDec}>-</button>
            <h1 className={sty.counter3}>{state}</h1>
            <Counter2 dev={state} /> 
            
            <button className={sty.counter2} onClick={handleInc}>+</button>
        </div>
    )
}

export default Counter