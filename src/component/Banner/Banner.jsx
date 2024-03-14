import "./Banner.css";
import background from "../../asset/img/backBanner.png"

const Banner = () => {
    const myStyle = {

        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundBlendMode: "darken",

    };
    return (
        <div className="banner" style={myStyle}>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    );
};

export default Banner;