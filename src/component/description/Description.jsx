import './Description.css'
import data from '../../json/logements.json'


const Description = (id) => {

    const logement = data.find(logement => logement.id === id.id);
    const [name, first] = logement.host.name.split(" ");
    
    
    




    return (
        <div className="description-container">
            <div className='description'>
            <div className='description-left'>

                <p className='description-title'>{logement.title}</p>
                <p className='description-city'>{logement.location}</p>
            </div>
            <div className='descritption-right'>
                <div className='hostandpicture'>
                    <div >
                        <p className='description-hostname'>{first}</p>
                        <p className='description-hostname'>{name}</p>
                    </div>
                    <img className='description-hostimage' src={logement.host.picture} alt='host image' ></img>
                </div>
            </div>

            </div>
            

        </div>

    )




}
export default Description;