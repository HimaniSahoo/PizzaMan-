import MyImage from "../images/pizzaman.png";
import "../css/styles.css";
import { Link } from "react-router-dom";
let Top = () => {
  return (
    <nav
      style={{ height: "56px" }}
      className="navbar navbar-expand-lg bg-light"
      id="navbar_top"
     
    >
      <div className="container-fluid container">
        <a href="/">
          <img alt="Logo" width="80" height="56" src={MyImage} style={{marginTop:'-5px'}}/>
        </a>
        {/* This link is used to go in admin section
            through routing  */}
        <Link className="btn checkout" to={"/admin"}>
          Admin
        </Link>
      </div>
    </nav>
  );
};
export default Top;
