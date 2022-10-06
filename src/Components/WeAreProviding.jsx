import React from "react";
import { weAreProviding } from "../Constant/RetailryConstant";
import "../styles/WeAreProviding.scss";

function WeAreProviding() {
  return (
    <>
      <div className="grayBackground py-5 py-md-5">
        <div className="container">
          <div className="py-md-5">
            <h1 className="text-center mx-lg-5 px-lg-5 lh-base fs-2 fontPoppins fw-bolder">
              {weAreProviding[0].heading}
            </h1>
            <p className="text-center fontPoppins paragraphFont lh-base">
              {weAreProviding[0].content}
            </p>
          </div>
          <div className="row plr-2">
            <div className=" px-md-5 weAreProviding">
              {weAreProviding[0].card.map((link, index) => {
                return (
                  <div
                    key={index}
                    className="card weAreProviding-card grayBackground"
                  >
                    <div className="row g-0">
                      <div className="col-md-2">
                        <img
                          src={link.img}
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-10 plr">
                        <div className="card-body weAreProviding-card-body">
                          <h6 className="card-title fontPoppins fw-bolder">
                            {link.title1}
                          </h6>
                          <h6 className="card-title fontPoppins fw-bolder">
                            {link.title2}
                          </h6>
                          <p className="card-text fontPoppins lh-base">
                            {link.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeAreProviding;
