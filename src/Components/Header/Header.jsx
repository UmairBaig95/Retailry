import React, {useState} from "react";
import RetailryLogo from "../../assets/RetailryLogo.svg";
import { Link } from "react-router-dom";
import { navbarLink } from "../../Constant/RetailryConstant";
function Header() {
  const [url, setUrl] = useState('')
console.log(window.location.href);
  return (
    <>
      <div className="grayBackground fontRoboto p-3 fs-6">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light px-lg-4 mx-lg-5">
            <div>
              <Link className="navbar-brand" type="button" to="/">
                <img
                  src={RetailryLogo}
                  width="40"
                  height="50"
                  className="d-inline-block align-top"
                  alt=""
                />
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <Link className="nav-item nav-link active mx-3" to="/features">
                  Features
                </Link>
              </div>
              <div className="navbar-nav">
                <a
                  className="nav-item nav-link active mx-3"
                  href="/#getStartedSection"
                >
                  Templates
                </a>
              </div>
              <div className="navbar-nav">
                <Link className="nav-item nav-link active mx-3" to="/pricing">
                  Pricing
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
