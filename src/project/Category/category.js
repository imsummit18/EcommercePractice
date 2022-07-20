import React from 'react'
import './category.css'
import { Link } from 'react-router-dom'
import { categories } from './categoryData'

const Category = () => {
  return (
   <div className="category">

<div className="category-item">

    {
        categories.map((value)=>{
            return(
                <>
                
<div className="category-container">

<img src={value.img} alt="" className='category-person'/>
<div className="text-center">

<div className="category-title">{value.title}</div>
<Link to={`/category/${value.id}`}><button className='btn-shop'>Shop Now</button></Link>
</div>

</div>


                </>
            )

        })
    }
</div>



   </div>
  )
}

export default Category