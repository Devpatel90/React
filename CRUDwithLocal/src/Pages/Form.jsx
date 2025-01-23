import React, { useState ,useEffect } from 'react'
import {v4} from "uuid"

function Form() {
    const [state,setState] = useState({
        title : "",
        img : "",
        price : "",
        id : v4()
    })

    const [arr,setArr] = useState(JSON.parse(localStorage.getItem("data")) || [])

    const handleChange = (e)=>{
        const {name,value} = e.target
        setState({...state,[name] : value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        setArr([...arr,state])
        setState({
            title : "",
            img : "",
            price : "",
            id : v4()
        })
        
    }
    useEffect(()=>{
        localStorage.setItem("data", JSON.stringify(arr))
    },[arr])


  return (
    
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" id="title" className="form-control" name="title" value={state.title} placeholder="Enter product title" onChange={handleChange} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="img" className="form-label">Image URL</label>
            <input type="text" id="img" className="form-control" name="img" value={state.img} placeholder="Enter image URL" onChange={handleChange} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input type="text" id="price" className="form-control" name="price" value={state.price} placeholder="Enter price" onChange={handleChange} required/>
          </div>
          <button type="submit" className="btn btn-secondary w-100">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form
