import "./Banner.css";

const Banner = ({ backImg, text }) => {
    const style = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.2)), url(${backImg})`,
    };
    return (
        <div className="Banner" style={style}>
            <h1>{text}</h1>
        </div>
    );
};

export default Banner;