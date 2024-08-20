import { NavLink } from "react-router-dom";
import './header.css';
function Header() {
  return (
    <header className="mainHeader">
      <div className="imageContainer">
        <NavLink to={"/"}>
          <img src="/img2.png" alt="Star System" />
        </NavLink>
      </div>
      <nav className="navContainer">
        <ul className="navList">
          <li className="navListItem"><NavLink to={"/"}>Home</NavLink></li>
          <li className="navListItem"><a href="https://crisdev-pi.vercel.app">Creator's Page</a></li>
        </ul>
      </nav>
    </header>
  );
  
}

export default Header;