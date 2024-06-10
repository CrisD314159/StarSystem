import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import './notFound.css'

function NotFound(){
    return (
    <div>
        <Header/>
        <div className="notFoundImage" style={{backgroundImage:`url('https://res.cloudinary.com/dw43hgf5p/image/upload/v1717964277/skvxxid78t8bzz25mtcr.png')`}}>
            <div className="notFoundFilter">
                <h1 className="notFoundTitle">404 Page not found</h1>
            </div>
        </div>
        <Footer/>

    </div>

    )
    
}

export default NotFound;