import React, { useEffect, useState } from 'react'
import './slider.css'
import { sliderData } from './sliderData'
import { BiPlay } from 'react-icons/bi'

import {GrFormPrevious,GrFormNext} from 'react-icons/gr'
import Category from '../Category/category'
import Product from '../Product/product'
import Newsletter from '../Newsletter/newsletter'
import Contact from '../Details/detail'
import SingleItem from '../categorySIngleItem/singleItem'
import {Routes,Route} from 'react-router-dom'
import { Link } from 'react-router-dom'



const Slider = () => {

    const [index, setIndex] = useState(0)
 const[person,setPerson]=useState(sliderData)

useEffect(()=>{
    const lastIndex=person.length-1;
if(index<0){
    setIndex(lastIndex);
}
if(index>person.length-1){
    setIndex(0)
}

},[index,[person]])


useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    },3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
    return (
        <>
<div className="main-slider">
    
  {
   person.map((people,peopleIndex) => {
    console.log(peopleIndex);
    console.log(peopleIndex);
    const{id, img, title, desc, bg }=people;

        let position ='nextSlide'
        if(peopleIndex==index){
            position='activeSlide'
        }
        if(peopleIndex==index-1||(index==0 && peopleIndex===person.length-1)){
            position='lastSlide'
        }


 return (
  <>
<article className={position} key={id}>
       <div className="image">
       <img src={img} alt="" className='person-img' />
       <div className="background">  </div>
       </div>

       <div className="text-container">
     <div className="sub-container">
                    <h1 className='title-slider'>{title}</h1>
 <p className='desc-slider'>{desc}</p>
                <Link to={`/slider/${id}`}> <button type='btn' className='btn'>Shop Now</button></Link>
 </div>
    </div>
</article>
                            </>
                        )
                    })
                }
               
 <button type='btn' className='btn-previous btn-slider' onClick={()=>setIndex(index-1)}><GrFormPrevious/></button>
<button type='btn' className='btn-next btn-slider'onClick={()=>setIndex(index+1)}><GrFormNext/></button>
            </div>

            <Category/>
            <Routes>
        
            </Routes>
<Product/>
<Newsletter/>
<Contact/>

 </>
 
    )
}

export default Slider