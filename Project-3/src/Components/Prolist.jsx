import React from 'react';
import sty from './Pro.module.css';

function ProductList({ arr }) {
  return (
    <div className={sty.product1}>
      <h1 className={sty.product2}>Product List</h1>
      <div className={sty.product3}>
        {arr.map((el, index) => (
          <div key={index} className={sty.product4}>
            <img src={el.url} alt={el.title} />
            <h1 className={sty.product5}>{el.title}</h1>
            <p className={sty.product6}>
              <span className="price-label">MRP</span> &#8377;{el.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
