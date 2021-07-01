import "./SideDrawer.css";
import { Link } from "react-router-dom";

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];

  if (show) {
    sideDrawerClass.push("show");
  }

  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>


        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <a href="/#games">Games</a>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

    
      </ul>
    </div>
  );
};

export default SideDrawer;