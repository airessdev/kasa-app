import "./logement.css"
import Header from "../../component/Header/Header"
import LOGO from '../../asset/img/LOGO(1).svg'
import Slider from "../../component/Slider/Slider"
import { useParams } from "react-router-dom"
import data from "../../json/logements.json"
import Description from "../../component/description/Description"
import Badges from "../../component/Badges/Badges"
import Stars from "../../component/Stars/Stars"


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
            <div className="description-wrap">
                <Description
                    id={idElement}
                />
                <div className="badges-stars">
                    <Badges
                        id={idElement}
                    />
                    <Stars
                        id={idElement}
                    />
                </div>
            </div>
        </div>
    )
}

export default Logement;