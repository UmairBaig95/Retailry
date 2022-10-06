import React, { useContext } from "react";
import RetailryFooter from "../../assets/images/RetailryFooter.svg";
import { footerLink, footerSocialLink } from "../../Constant/RetailryConstant";
import "../../styles/Footer.scss";
import { Link } from 'react-router-dom'
import { Context } from "../../Context/Context";
function Footer() {
  const showTemplateData = useContext(Context);
  const { activeTemplate, setactiveTemplate } = showTemplateData;
  return (
    <>
      <div className="grayBackground py-5">
        <div className="container py-5">
          <div className="text-center">
            <img
              src={RetailryFooter}
              width="150"
              height="115"
              className="d-inline-block align-top"
              alt=""
            />
          </div>
          <div className="d-flex justify-content-center">
            {footerLink.map((link, index) => {
              return (
                <a
                  className="mx-lg-4 link px-lg-1 my-5 px-1 text-decoration-none text-black fontRoboto"
                  key={link.id}
                  href={window.location.href == "http://127.0.0.1:5173/features" ? '/' : link.path}
                  onClick={() => setactiveTemplate(link.id)}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
          <div className="d-flex justify-content-center">
            {footerSocialLink.map((link, index) => {
              return (
                <a
                  className="mx-lg-3 px-1 text-decoration-none text-black fontRoboto"
                  key={index}
                  href={link.path}
                  target="_blank"
                >
                  <img
                    src={link.img}
                    width="36"
                    height="36"
                    className="d-inline-block align-top"
                    alt=""
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
