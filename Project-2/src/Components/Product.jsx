import React, { useState } from "react";
import ProductList from "./Prolist";
import ProductForm from "./Form";
import sty from "./Pro.module.css";

function Product() {
  const [state, setState] = useState(true);

  const [arr, setArr] = useState([]);

  const [formData, setFormData] = useState({
    url: "",
    title: "",
    price: "",
  });

  const [valid, setValid] = useState({
    url: true,
    title: true,
    price: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (value == "" && name == "url") {
      setValid({ ...valid, [name]: false });
    }

    const titleRegex = /^[0-9A-Za-z ]+$/;

    if (titleRegex.test(value) == false && name == "title") {
      setValid({ ...valid, [name]: false });
    }

    const priceRegex = /^[0-9]+$/;

    if (priceRegex.test(value) == false && name == "price") {
      setValid({ ...valid, [name]: false });
    }
  };

  const handleFocus = (e) => {
    const { name } = e.target;

    setValid({ ...valid, [name]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setArr([...arr, formData]);

    
  };
  console.log(arr);
  
  return (
    <>
      <header className={sty.headers}>
        <div className="d-flex justify-content-center align-items-center gap-5">
          <button
            className="btn btn-black fs-5 border-0 text-black"
            onClick={() => {
              setState(true);
            }}
          >
            Product Form
          </button>
          <button
            className="btn btn-black fs-5 border-0 text-black"
            onClick={() => {
              setState(false);
            }}
          >
            Product List
          </button>
        </div>
      </header>

      {state ? (
        <ProductForm handleChange={handleChange} valid={valid} handleBlur={handleBlur} handleSubmit={handleSubmit} handleFocus={handleFocus} />
      ) : (
        <ProductList arr={arr} />
      )}
    </>
  );
}

export default Product;