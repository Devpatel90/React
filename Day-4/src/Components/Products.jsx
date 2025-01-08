import { useState , useEffect } from 'react'

function Products() {


    function app(){
        const [pro,setProd] = useState(null)

        useEffect(()=>{
            fetch(`https://dummyjson.com/products`)
            .then((Res)=>Res.json())
            .then((Res)=>{
                console.log(Res.products);
                setProd(Res.products)
            })
            .catch((err)=>{
            console.log(err)
            })
       },[])
    }
  return (
 <>
 <h1>Product List</h1>
    {
        data.map((el)=>{
             return <div>
                   <img src={el.thumbnail} alt={el.title} />
                   <p>{el.title}</p>
             </div>
        })
      }
 </>
  )
}

export default Products
