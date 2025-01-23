import React from 'react'
import {Routes ,Route} from "react-router"
import Home from '../Pages/Home'
import About from '../Pages/About'
import Product from "../Pages/Product"
import Form from "../Pages/Form"

function MainRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Form' element={<Form/>}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/Product' element={<Product/>}></Route>
        </Routes>
      
    </div>
  )
}


export default MainRoutes
