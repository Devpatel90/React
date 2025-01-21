import React from 'react'
import { useEffect, useState } from "react"

function Dog() {

    const [dog,setDog] = useState(null);

    useEffect(()=>{
      fetchDog()
    },[])

    function fetchDog()
    {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            setDog(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  

  return (
    <div className='d-flex justify-content-center flex-column align-items-center gap-5'>
        {
            dog == null 
            ? 
            "Loading"
            :
            <img src={dog.message} className='w-75 h-75' alt='' />
        }
        <button onClick={fetchDog}>Refresh</button>
    </div>
  )
}

export default Dog
