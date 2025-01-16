import React from 'react'
import "./Product.css"

function products(props) {
  return (
    <div>

      <table className="product-table">
      <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
          </tr>
      </thead>
      <tbody>
          {props.dev1.map((el) => {
              return (
                  <tr key={el.pname}>
                    <td>{el.pname}</td>
                    <td>
                        <img src={el.pimg} alt={el.pname} className="product-image" />
                    </td>
                    <td>{el.pprice}</td>
                </tr>
            );
        })}
      </tbody>
      </table>

    </div>
  )
}
export default products
