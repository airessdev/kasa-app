import './Accueil.css'
import LOGO from '../../asset/img/LOGO(1).svg'
import bannerBack from '../../asset/img/backBanner.png'
import Header from '../../component/Header/Header'
import Banner from '../../component/Banner/Banner'




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

        </div>


    )
}

export default Accueil;