import React from "react";
import "../styles/FeaturesSectionCards.scss";
export default function DigitalStore({ data }) {
  const { Name, Detail, Image, id, ...rest } = data;
  return (
    <section id={id} className="digitalStore ">
      <div className=" py-5 py-md-5">
        <div className="container digitalStore-container">
          <div className="row digitalStore-heading  mx-3 mx-md-5 py-md-5 px-md-4">
            <h1 className="lh-base p-2 p-md-2  px-md-3 fontPoppins text-white greenBackground fw-bolder">
              {Name}
            </h1>
          </div>
          <div className="row ml-1 ml-md-4 pb-md-5 pl-md-4">
            <div className="col-md-4 d-none d-md-block">
              <img style={{ width: "80%" }} src={Image} alt="" />
            </div>
            <div className="weAreProviding-cards digitalStore-cards   col-md-8 weAreProviding">
              {Detail.map((link, index) => {
                return (
                  <div key={index} className="card pr-3  grayBackground">
                    <div className="row g-0">
                      <div className="col-md-12">
                        <div className="card-body  digitalStore-cards-body ">
                          <h6 className="card-title fs-6 fontPoppins fw-bolder">
                            {" "}
                            <span className="pr-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="115 1057.95 10 10"
                              >
                                <path
                                  d="M115 1062.9a5 5 0 1 1 0 .1z"
                                  fill="#ffb34d"
                                  fill-rule="evenodd"
                                  data-name="Ellipse 3"
                                />
                              </svg>
                            </span>
                            {link.Heading}
                          </h6>
                          <p className="card-text fontPoppins lh-base">
                            {link.HeadDescription}
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
    </section>
  );
}
