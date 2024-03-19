import "./logement.css"
import Header from "../../component/Header/Header"
import LOGO from '../../asset/img/LOGO(1).svg'
import Slider from "../../component/Slider/Slider"
import { useParams } from "react-router-dom"
import data from "../../json/logements.json"
import Description from "../../component/description/Description"


const Logement = () => {
    const idElement = useParams().id
    return (
        <div className="Logement">
            <Header
                sourceLogo={LOGO}
            />
            <Slider
                id={idElement}

            />
            <Description 
                id={idElement}
            />
        </div>
    )
}

export default Logement;