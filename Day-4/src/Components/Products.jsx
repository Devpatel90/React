import { useState , useEffect } from 'react'
import styles from './Prod.module.css'

function Products() {

        const [prod,setProd] = useState(null)

        useEffect(()=>{
            fetch(`https://dummyjson.com/products`)
            .then((Res)=>Res.json())
            .then((Res)=>{
                console.log(Res.products);
                setProd(Res.products)
                console.log(prod);
                
            })
            .catch((err)=>{
            console.log(err)
            })
       },[])


  return (
    <div>
        <div className='d-flex justify-content-evenly gap-5 my-4 flex-wrap'>
        {
          prod == null
          ?
          <h1>Loading...</h1>
          :
          prod.map((el)=>{
              return(
                <>
                  <div className={styles.box}>
                    <img src={el.thumbnail} alt="" />
                    <h1 className='fw-bold mt-3 fs-5 m-auto'>{el.title}</h1>
                    <p className='m-auto mt-2'>{el.brand} ({el.category})</p>
                    <p className='fs-5 mt-2 m-auto'><span className='text-success'></span> &#8377;{el.price}</p>
                  </div>
                </>
              )
          })
        } 
        </div>
  </div>
  )
}

export default Products;
