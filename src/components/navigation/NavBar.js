import { Link } from "react-router-dom";

import "../../styles/NavBar.css";
import logo from "../../images/retrodb.png";

function NavBar() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <nav>
        <Link>Home</Link>
        <Link to="/transfer" className="link">
          Transfer
        </Link>
        <Link to="/taken" className="link">
          Create
        </Link>
        <Link to="/barcodes" className="link">
          Barcodes
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;
