import React from "react";
import { buildAndGrow, buildAndGrowImage } from "../Constant/RetailryConstant";
import Button from "./Button";
function BuildAndGrow() {
  return (
    <>
      <div className="grayBackground">
        <div className="container">
          <div className="row plr-2">
            <div className="px-md-5 py-4 px-4 my-md-5 py-md-5 col-md-6 col-sm-12">
              <h1 className="lh-base fs-1 fontPoppins fw-bolder">
                {buildAndGrow.heading}
              </h1>
              <p className="fontPoppins py-md-3 lh-base">
                {buildAndGrow.content}
              </p>
              <Button btnText={"View Plan"} />
            </div>
            <div className="py-5 px-5 px-md-5 col-md-6 col-sm-12">
              <img
                style={{ width: "100%" }}
                src={buildAndGrowImage.img}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuildAndGrow;
