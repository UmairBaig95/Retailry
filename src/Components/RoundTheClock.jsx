import React from "react";
import "../styles/FeaturesSectionCards.scss";
export default function DigitalStore({ data }) {
  const { Name, Detail, Description, Image, id, ...rest } = data;
  return (
    <section id={id} className="digitalStore">
      <div className=" py-5 py-md-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 text-center mx-md-5 py-md-5 px-md-4">
              <h3 className="lh-base d-inline-block p-2 p-md-2 px-md-3  fontPoppins text-white greenBackground fw-bolder">
                {Name}
              </h3>
              <p className="fontPoppins px-md-5 mx-2 mx-md-5 my-4 my-md-3 d-block lh-base">
                {Description}
              </p>
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="row ml-1 ml-md-4 mb-md-5 pl-md-4">
            <div className="row weAreProviding">
              {Detail.map((link, index) => {
                return (
                  <div
                    key={index}
                    className="card grayBackground col-md-4 col-sm-12 pr-0 position-relative"
                  >
                    <div className="row g-0">
                      <div className="card-body p-0">
                        <h6 className="card-title fs-6 fontPoppins fw-bolder">
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
                        <p className="card-text pb-5 pb-md-0 fontPoppins lh-base">
                          {link.HeadDescription}
                        </p>
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
