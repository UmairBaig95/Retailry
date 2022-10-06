import React from "react";
import { buildAndGrow, buildAndGrowImage } from "../Constant/RetailryConstant";
import Button from "./Button";
function BuildAndGrow({ props }) {
  return (
    <>
      <section id="buildAndGrowSection">
        <div className="grayBackground">
          <div className="container">
            <div className="row plr-2">
              <div className="px-md-5 py-4 px-4 my-md-5 py-md-5 col-md-6 col-sm-12">
                <h1 className="lh-base fs-1 fontPoppins fw-bolder">
                  {props.heading}
                </h1>
                <p className="fontPoppins py-md-3 lh-base">{props.content}</p>
                <Button btnText={props.button} />
              </div>
              <div className="py-5 px-5 px-md-5 col-md-6 col-sm-12">
                <img style={{ width: "100%" }} src={props.img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BuildAndGrow;
