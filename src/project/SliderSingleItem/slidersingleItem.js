import React from 'react'
import { sliderData } from '../Slider/sliderData'
import { useParams } from 'react-router-dom'

const SlidersingleItem = () => {
  const {id}=useParams();
const displayItem=(valueE)=>{
return(
<>
<div className="slider-single-item">
<img src={valueE.img}  alt="" className='slider-single-img' />
<div className="slider-product-detail">
<div className="slider-single-title">{valueE.title}</div>
<br/>
{valueE.desc}
<button className='btn btn-order-single'>Order Now</button>
</div>
</div>
</>

)

}

  return (
 <>
 <div>
  {displayItem(sliderData[id-1])}
 </div>

 </>
  )
}

export default SlidersingleItem