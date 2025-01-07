import { useState } from "react"
import Products from "./Products";

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
        <div>
            <h1>Form</h1>
            <form action="">
                <label htmlFor="">Product Name</label><br />
                <input type="text" placeholder="Enter Product Name" name="" id="" onChange={(el)=>{setName(el.target.value)}} /><br /><br />
                <label htmlFor="">Image</label><br />
                <input type="text" name="" placeholder="Enter Image URL" id="" onChange={(el)=>{setImg(el.target.value)}} /><br /><br />
                <label htmlFor="">Product Price</label><br />
                <input type="text" name="" placeholder="Enter Product Price" id="" onChange={(el)=>{setPrice(el.target.value)}} /><br /><br />
                <input type="button" onClick={handleAdd} name="" value="Add Product" id="" />
            </form>
        </div>
        :
        <Products dev1 = {pdata}/>
    }
        </>
    )
}

export default Form