import React, { useState } from 'react'
import './product.css'

import {AiOutlineShoppingCart,AiOutlineSearch,AiOutlineHeart} from 'react-icons/ai'
import popularProducts  from './productData.js'

const Product = () => {


    const[product,setProductts]=useState(popularProducts)
  
      return (
 <>
<div className="product">

{
    product.map(({id,img})=>{
return(
  
  <div className="image-container" key={id}>
     <img src={img}  className='product-img'/>
    <div className="background-product"></div>

   <div className="btns">


<div className="button"><a href="" > <AiOutlineShoppingCart className='cart'/></a></div>
<div className="button"><a href=""> <AiOutlineSearch className='product-search'/></a></div>
<div className="button"><a href=""><AiOutlineHeart className='like'/></a></div>



  
   </div>
  </div>

)
    })
}
</div>



 </>
    )
}

export default Product