import './Accueil.css'
import LOGO from '../../asset/img/LOGO(1).svg'
import bannerBack from '../../asset/img/backBanner.png'
import Header from '../../component/Header/Header'
import Banner from '../../component/Banner/Banner'
import Cards from '../../component/Cards/Cards'
import CardsData from '../../json/logements.json'
import Footer from '../../component/Footer/Footer'






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
        <div className="cards-container">
          {CardsData.map((elementCard) => (
            <Cards key={elementCard.id} elementCards={elementCard} />
          ))}
        </div>
        <div>
        <Footer />
            
        </div>
            
        
        
    
            
         
         </div>
         )}


    




export default Accueil;