import React from 'react'
import './singleItem.css'
import data  from './Data'
import { useParams } from 'react-router-dom'
const SingleItem = () => {
    const{id}=useParams();
const display=(value)=>{

return(
  <>
  <div className='single_item-detail'>

<img src={value.img} alt='image' className='person-Img'/>

<div className="order-detail">
  
<div  className='single-title'>{value.title}</div>
<button className='btn btn-order-single'>Order Now</button>
</div>
</div>


  
  </>
)


}

  return (
   <>
<div>
{display(data[id-1])}
</div>
   
   
   </>
  )
}

export default SingleItem