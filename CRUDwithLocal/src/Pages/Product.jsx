import React, { useEffect, useState } from 'react'

function Product() {
    const [state,setState] = useState(JSON.parse(localStorage.getItem("data")) || [])
    const handleDelete = (i)=>{
        let a = state.filter((el)=>{
             return el.id != i
        })
        setState(a)
    }
    useEffect(()=>{
      localStorage.setItem("data",JSON.stringify(state))
    },[state])
  return (

    <div className="container mt-5">
      <h2 className="text-center mb-4">Product List</h2>
      <div className="row">
        {state.map((el) => {
          return (
            <div className="col-md-4 mb-4" key={el.id}>
              <div className="card shadow">
                <img src={el.img} className="card-img-top" alt={el.title} style={{ height: "350px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title">{el.title}</h5>
                  <p className="card-text">Price: ${el.price}</p>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(el.id)}> Delete </button>
                    <button className="btn btn-warning btn-sm">Edit</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>






    // <div>
    //     {
    //         state.map((el)=>{
    //             return <>
    //                    <img src={el.img} /><br />
    //                    <p>{el.title} - {el.price}</p>
    //                    <button onClick={()=>handleDelete(el.id)}>Delete</button>
    //                    <button>Edit</button><br />
    //             </>
    //         })
    //     }
    // </div>
  )
}

export default Product
