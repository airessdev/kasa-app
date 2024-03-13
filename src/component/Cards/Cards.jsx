import './Cards.css'


const Cards = (elementCard) => {
    return (

        <div className='Cards'>
            <img src={'$elementCard.img'} alt='$elementCard.title' />
            <h3>{elementCard.title}</h3>
            <p>{elementCard.text}</p>
        </div>

    )
}

export default Cards