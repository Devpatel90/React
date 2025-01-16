import { useState } from "react"
import Products from "./Products";
import "./Form.css"

function Form(props)
{
    let res = props.dev;
    const [pname,setName] = useState("");
    const [pimg,setImg] = useState("");
    const [pprice,setPrice] = useState("");

    const [pdata,setPdata] = useState([])

    const handleAdd = ()=>{
        let obj = {
            pname,
            pimg,
            pprice
        }

        setPdata([...pdata,obj])

        
        res = false;
    }

    console.log(pdata);
    
    return (
        <>
    {res == true ?
    
    <div className="form-container">
        <h1>Product Form</h1>
        <form>
            <div className="form-group">
                <label>Product Name</label>
                <input type="text" id="productName" placeholder="Enter Product Name" onChange={(el)=>{setName(el.target.value)}} />
            </div>

            <div className="form-group">
                <label>Image URL</label>
                <input type="text" id="productImage" placeholder="Enter Image URL" onChange={(el)=>{setImg(el.target.value)}} />
            </div>

            <div className="form-group">
                <label>Product Price</label>
                <input type="text" id="productPrice" placeholder="Enter Product Price" onChange={(el)=>{setPrice(el.target.value)}} />
            </div>

            <button type="button" onClick={handleAdd}>Add Product</button>
        </form>
    </div>

        :
        <Products dev1 = {pdata}/>
    }
        </>
    )
}

export default Form