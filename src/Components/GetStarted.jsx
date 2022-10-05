import React, { useContext, useEffect, useState } from "react";
import { getStarted, Categories } from "../Constant/RetailryConstant";
import {Context } from '../Context/Context'
import "../styles/GetStarted.scss";

function GetStarted() {
  const showTemplateData = useContext(Context)
  const {activeTemplate,setactiveTemplate} =showTemplateData;
  const [data,setData] = useState([]);


  useEffect(()=>{
    const requiredTemplate= Categories.find((category)=>{
      return category.id===activeTemplate
    })
    setData(requiredTemplate.Detail)
    // console.log(requiredTemplate);

  },[activeTemplate])
  return (
    <>
      <div id="getStartedSection" className="greenBackground py-5 py-md-5">
        <div className="container px-3 px-md-5">
          <div className="py-md-5">
            <h1 className="text-center mx-lg-5 px-lg-5 lh-base fs-2 fontPoppins fw-bolder">
              {getStarted.title}
            </h1>
            <p className="text-center text-white  fontPoppins paragraphFont lh-base">
              {getStarted.content}
            </p>
          </div>
          <div className="row ">
            <div
              id="main"
              className="d-flex template-btn justify-content-center"
            >
              {Categories.map((e, i) => {
                return (
                  <div key={i}>
                    <button
                      type="button"
                      id={e.id}
                      onClick={()=> setactiveTemplate(e.id)}
                      className={`Coustom-btn px-2 px-md-4 mx-md-1 fontPoppins position-relative paragraphFont text-white ${activeTemplate===e.id? 'active-item':null}`}
                    >
                      <svg
                        id="templateSvg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="7"
                        viewBox="208.5 2710.993 6.676 5.007"
                      >
                        <path
                          d="M211.838 2710.993c1.669 0 3.338 5.007 3.338 5.007H208.5s1.669-5.007 3.338-5.007Z"
                          fill="#ffb34d"
                          fillRule="evenodd"
                          dataname="Path 85"
                        />
                      </svg>
                      {e.Name}
                    </button>
                  </div>
                );
              })}
            </div>
            <hr className="line-template mt-1" />
          </div>
          <div className="row px-md-4 pb-md-5  template-cards position-relative">
            <div className="justify-content-start d-flex">
              {data.map((e, i) => {
                return (
                  <div key={i} className="card card-property col-12 greenBackground">
                    <img src={e.Image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title card-title lh-base fs-6 fontPoppins fw-bolder">
                        {e.Heading}
                      </h5>
                      <p className="card-text fontPoppins lh-bas">
                        {e.SubHeading}
                      </p>
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

export default GetStarted;
