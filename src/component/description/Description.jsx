import './Description.css'
import data from '../../json/logements.json'


const Description = (id) => {

    const logement = data.find(logement => logement.id === id.id);
    const [name, first] = logement.host.name.split(" ");
    console.log(logement);

    const description = logement.description;
    console.log(description);

    const titre = logement.title;
    console.log(titre);

    const image = logement.cover;
    console.log(image);

    const price = logement.price;
    console.log(price);

    const city = logement.city;
    console.log(city);

    const type = logement.type;
    console.log(type);

    const bedrooms = logement.bedrooms;
    console.log(bedrooms);

    const surface = logement.surface;
    console.log(surface);

    const tags = logement.tags;
    console.log(tags);

    const address = logement.address;
    console.log(address);

    const host = logement.host;
    console.log(host);

    const rating = logement.rating;
    console.log(rating);




    return (
        <div className="description-container">
            <div className='description'>

                <p className='description-title'>{logement.title}</p>
                <div className='hostandpicture'>
                    <div >
                        <p className='description-hostname'>{first}</p>
                        <p className='description-hostname'>{name}</p>
                    </div>
                    <img className='description-hostimage' src={logement.host.picture} alt='host image' ></img>
                </div>

            </div>


        </div>

    )




}
export default Description;