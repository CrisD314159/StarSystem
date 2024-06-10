import './footer.css'
function Footer (){
    return (
        <footer className="footerMain">
            <div className="footerImageContainer">
              <img src="/img1.png" alt="Star System" className="footerImage" />
            </div>
            <div className="footerTextContainer">
              <p>© 2024 Star System</p>
            </div>
        </footer>
    )
}
export default Footer;