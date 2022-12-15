import "../css/styles.css";
let Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-5 col-md-4 col-sm-5 col-xs-6">
            <h2>COMPANY</h2>
            <ul>
              <li>ABOUT US</li>
              <li>FAQ</li>
              <li>CONTACT US</li>
            </ul>
          </div>
          <div className="col-4 col-md-4 col-sm-4 col-xs-6">
            <h2>LEGAL</h2>
            <ul>
              <li>TERMS & CONDITION </li>
              <li>PRIVACY POLICY</li>
              <li>DISCLAIMER</li>
            </ul>
          </div>
          <div className="col col-md-4 col-sm-3 col-xs-12">
            <h2>SOCIAL MEDIA</h2>
            <ul className="social-network social-circle">
              <li>
                <a href="#" className="icoFacebook" title="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" className="icoTwitter" title="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="icoGoogle" title="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <center>
          <p>
            <a>Copyright © 2022 | All Rights Reserved.</a>
          </p>
        </center>
      </div>
    </footer>
  );
};
export default Footer;
