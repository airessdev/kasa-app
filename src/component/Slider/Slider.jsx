import './Slider.css'
import { useState } from 'react'
import arowLeft from '../../asset/img/arrow-left.png'
import arowRight from '../../asset/img/arrow-right.png'
import files from '../../json/logements.json'




const Slider = () => {

    const found = files.find(file => file.id === "c67ab8a7")
        
console.log(found.pictures[0])

    

    return (
        <div className='slider'>
            <div className='slider-container'>
            
                

            </div>
            <div className='slider-arrows'>
                <img src={arowLeft} alt="" />
                <img src={arowRight} alt="" />
            </div>
            <div className='slider-dots'>
                <div className='dot-active'></div>
                <div></div>

            </div>
        </div>
    )



}
export default Slider;