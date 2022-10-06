import React from "react";
import RetailryLogo from "../assets/RetailryLogo.svg";
import { Link } from "react-router-dom";
function PricingHeader() {
  return (
    <>
      <section id="pricingHeader">
        <div className="grayBackground fontRoboto p-3 fs-6">
          <div className="mx-3">
            <nav className="navbar px-lg-4 mx-lg-5">
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

              <div className="justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link className="nav-item nav-link active" to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="50"
                      fill="#008379"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}

export default PricingHeader;
