import React from "react";
import { eCommerceService } from "../Constant/RetailryConstant";
import "../styles/ECommerceService.scss";
function ECommerceService() {
  return (
    <>
      <section id="eCommerceServiceSection">
        <div className="white-bg">
          <div className="container eCommerce-main py-5 py-md-5 my-md-5">
            <div className="eCommerce-main-title">
              <h1 className="text-center mx-md-5 px-md-5 lh-base fs-2 fontPoppins fw-bolder">
                {eCommerceService[0].heading}
              </h1>
            </div>
            <div className="container eCommerce-image-cards">
              <div className="row plr-2">
                <div className="px-md-3 col-md-6 col-sm-12 eCommerce-image">
                  <img
                    style={{ width: "75%" }}
                    src={eCommerceService[0].img}
                    alt=""
                  />
                </div>
                <div className="eCommerce-services col-md-6 col-sm-12">
                  {eCommerceService[0].card.map((link, index) => {
                    return (
                      <div key={index} className="card">
                        <div className="row g-0">
                          <div className="col-md-2">
                            <img
                              src={link.img}
                              className="img-fluid rounded-start"
                              alt="..."
                            />
                          </div>
                          <div className="col-md-10">
                            <div className="card-body">
                              <h5 className="card-title lh-base fs-5 fontPoppins fw-bolder">
                                {link.title}
                              </h5>
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
        </div>
      </section>
    </>
  );
}

export default ECommerceService;
