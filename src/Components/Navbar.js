import './Navbar.css';
import { Link } from "react-router-dom";
import ContactBtn from "./ContactBtn";
import MenuBtn from "./MenuBtn";

const Navbar = ({ click }) => {

    return (
        <div className="navbar-container">
           <a class="logo" href="/"><img src="img/sologameicon.png" alt="logo" width="70" height="70"/></a>
            <nav>
                <ul class="nav__links">
         <li>
          <Link to="/" className="nav_home">Home</Link>
        </li>

        <li>
          <a href="/#games" className="nav_home">Games</a>
        </li>

        <li>
          <Link to="/about" className="nav_home">About</Link>
        </li>
        
                </ul>
            </nav>
            <p class="cta" ><a href="https://play.google.com/store/apps/dev?id=7866894378418542456" target="_blank" ClassName="contact-us"><ContactBtn/></a></p>
            <p class="menu cta" onClick={click}><MenuBtn/></p>
  
        </div>
    )
}

export default Navbar