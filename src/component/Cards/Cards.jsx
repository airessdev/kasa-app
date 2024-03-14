
import { Link } from "react-router-dom";
import "./Cards.css";

const Cards = ({ elementCards }) => {
    return (
        <article key={elementCards.id} className="card">
            <Link to={`/logement/${elementCards.id}`} className="card-link">
                <div className="img-container">
                    <img src={elementCards.cover} alt={elementCards.title} />
                </div>
                <div className="card-title">
                    <h2>{elementCards.title}</h2>
                </div>
            </Link>
        </article>
    );
};

export default Cards;