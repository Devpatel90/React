import React from 'react'

function products(props) {
  return (
    <div>
      <table className="table-bordered">
        <thead>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
        </thead>
        <tbody>
            {
                props.dev1.map((el)=>{
                    return(
                        <>
                        <tr>
                            <td>{el.pname}</td>
                            <td><img src={el.pimg} alt={el.pname} style={{width:"500px"}}/></td>
                            <td>{el.pprice}</td>
                        </tr>
                        </>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}
export default products
