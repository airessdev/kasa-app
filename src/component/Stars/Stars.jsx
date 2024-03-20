import "./Stars.css"
import data from "../../json/logements.json"
import starsfull from "../../asset/img/stars-full.svg"
import starsempty from "../../asset/img/stars-empty.svg"



const Stars = (id) => {

    const rating = data.find(element => element.id === id.id)
    



    return (
        <div className="stars">
            {rating.rating > 0 ? <img src={starsfull} alt="stars-full" /> : <img src={starsempty} alt="stars-empty" />}
            {rating.rating > 1 ? <img src={starsfull} alt="stars-full" /> : <img src={starsempty} alt="stars-empty" />}
            {rating.rating > 2 ? <img src={starsfull} alt="stars-full" /> : <img src={starsempty} alt="stars-empty" />}
            {rating.rating > 3 ? <img src={starsfull} alt="stars-full" /> : <img src={starsempty} alt="stars-empty" />}
            {rating.rating > 4 ? <img src={starsfull} alt="stars-full" /> : <img src={starsempty} alt="stars-empty" />}

           

        </div>)

}
export default Stars


