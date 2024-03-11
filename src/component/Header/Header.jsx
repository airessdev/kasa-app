import { NavLink } from "react-router-dom";



import './Header.css'

const Header = ({ sourceLogo }) => {

    return (
        <div className="header">
            <img src={sourceLogo} alt="logo" />
            <nav>
                <NavLink className="lien" to="/">Accueil</NavLink>
                <NavLink className="lien" to="/Apropos">A propos</NavLink>


            </nav>
        </div>
    )




}
export default Header;