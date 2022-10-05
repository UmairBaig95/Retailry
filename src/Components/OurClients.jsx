import React from "react";
// import { ourClients } from "../Constant/RetailryConstant";
import "../styles/OurClients.scss";
import Button from "./Button";

function OurClients({ourClients}) {

  return (
    <>
    <div  className="white-bg">
      <div className="container our-client-main px-3 px-md-5">
        <div className="row px-md-4">
          <div className="our-clients col-md-6 col-sm-12">
            <h1 className="lh-base fs-5 fs-md-2  fontPoppins fw-bold">
              {ourClients.title}
            </h1>
            <p className="fontPoppins paragraphFont py-2 py-md-2 lh-base">
              {ourClients.content}
            </p>
          {ourClients.clients ? (<div className="our-Client-Logo py-3 py-md-3">
              {ourClients.clients.map((e, i) => {
                return (
                  <div
                    className="shadow-lg bg-white rounded"
                    key={i}
                  >
                    <img src={e.img} alt="" />
                  </div>
                );
              })}
            </div>): (<Button btnText={ourClients.button}/>)}
            
          </div>
          <div className="col-md-6 col-sm-12 px-5 px-md-5">
            <img className="our-client-image" src={ourClients.img} alt="" />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default OurClients;
