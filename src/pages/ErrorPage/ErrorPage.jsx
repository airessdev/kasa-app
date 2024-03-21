import "./ErrorPage.css"
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import LOGO from '../../asset/img/LOGO(1).svg'

const ErrorPage = () => {

    return (

        <div className="ErrorPage">
            <Header logo={LOGO} />
            <div className="ErrorPage-container">
                <h1>404</h1>
                <h2>Page not found</h2>
            </div>
            <Footer />
        </div>
    )

}
export default ErrorPage;



