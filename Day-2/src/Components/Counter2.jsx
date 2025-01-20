import React from 'react'
import sty from  "./Counter.module.css"


function Counter2(props) {
  return (
    <div>
      <h1 className={sty.counter3}>
        {props.dev}
      </h1>
    </div>
  )
}

export default Counter2
