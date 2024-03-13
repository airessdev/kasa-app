import './Accueil.css'
import LOGO from '../../asset/img/LOGO(1).svg'
import bannerBack from '../../asset/img/backBanner.png'
import Header from '../../component/Header/Header'
import Banner from '../../component/Banner/Banner'
import Cards from '../../component/Cards/Cards'
import CardsData from '../../json/logements.json'




const Accueil = () => {

return (
    <div className="accueil">
        <Header
            sourceLogo={LOGO}
        />
        <Banner
            backImg={bannerBack}
            text={'Chez vous ,partout et ailleurs'}
        />
        <div className='Cards-container'>
            
            {CardsData.map(CardsData=>
            <Cards
                img={CardsData.img}
                title={CardsData.title}
                text={CardsData.text}
            />
        
        )}
            
            
         </div>
         </div>

)}
    




export default Accueil;