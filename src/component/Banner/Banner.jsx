import "./Banner.css";

const Banner = ({ backImg, text }) => {
    const myStyle = {
        backgroundImage: `url(${backImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    };
    return (
        <div className="Banner" style={myStyle}>
            <h1>{text}</h1>
        </div>
    );
};

export default Banner;