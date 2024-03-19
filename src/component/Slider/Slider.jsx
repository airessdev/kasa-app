import './Slider.css'
import { useState } from 'react'
import arowLeft from '../../asset/img/arrow-left.png'
import arowRight from '../../asset/img/arrow-right.png'
import data from "../../json/logements.json"
const Slider = (id) => {



    const found = data.find(el => el.id === id.id)
    const [index, setIndex] = useState(0)
    const length = found.pictures.length;
    const nextSlide = () => {
        setIndex(index === length - 1 ? 0 : index + 1)
    }
    const prevSlide = () => {
        setIndex(index === 0 ? length - 1 : index - 1)
    }




    return (
        <div className='slider'>
            <div className='slider-container'>

                <img className="slider-img" src={found.pictures[index]} alt="" />
                <div className="slide-controls">
                    <img className="arow" src={arowLeft} onClick={prevSlide} alt="" />
                    <img className="arow" src={arowRight} onClick={nextSlide} alt="" />
                </div>
                <p className='counter'>{index + 1} / {length}</p>








            </div>
        </div>
    )



}
export default Slider;