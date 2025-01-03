import { useState } from "react"
import Counter2 from "./Counter2"

function Counter(){
    let [state,setState] = useState(0)

    const handleDec = () => {
        (state<=0) ? alert("Zero is minimum") : setState(state-1)
    }

    const handleInc = () => {
        setState(state+1)
    }
    return (
        <div>
            <button onClick={handleDec}>-</button>
            <h2>{state}</h2>
            <button onClick={handleInc}>+</button>
        </div>
    )
}

export default Counter