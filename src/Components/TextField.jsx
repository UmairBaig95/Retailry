import React, { useState, useRef, useEffect } from "react";
import { useField, ErrorMessage } from "formik";
import "../styles/TextField.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import BrandingSvg from "../Components/SvgComponents/BrandingSvg";
import MobileApp from "./SvgComponents/MobileApp";
import PrintMedia from "./SvgComponents/PrintMedia";
import DigitalMarketing from "./SvgComponents/DigitalMarketing";
import ECommerce from "./SvgComponents/ECommerce";
function TextField({ label, title, ...props }) {
  const [field, meta, helpers] = useField(props);

  const { value } = meta;
  const { setValue } = helpers;
  const [selectIntrest, setSelectIntrest] = useState({
    branding: true,
    eCommerce: true,
    mobileApp: true,
    printMedia: true,
    digitalMarketing: true,
  });
  const [aboutUs, setAboutUs] = useState();
  const [check, setCheck] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (check && ref.current && !ref.current.contains(e.target)) {
        setCheck(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [check]);
  const toggleChecked = () => {
    // setValue(aboutUs,false)
    setCheck((prevCheck) => {
      return !prevCheck;
    });
  };

  return (
    <>
      <div ref={ref} className="form-outline mb-4">
        <label className="form-label pl-0" htmlFor={field.name}>
          {label}
        </label>
        {field.name === "phone" ? (
          <>
            <PhoneInput
              // initialValueFormat="national"
              country={"pk"}
              id={field.name}
              // value={phone}
              {...field}
              {...props}
              value={field.value}
              onChange={field.onChange(field.name)}
              className={`form-control form-control-lg ${
                meta.touched && meta.error && "is-invalid"
              }`}
              isValid={(value) => {
                if (value.length < "2" || value.length >= "13") {
                  return "Invalid Number";
                } else if (value === "") {
                  return "Please Enter Phone Number";
                } else {
                  return true;
                }
              }}
            />
          </>
        ) : field.name === "aboutUs" ? (
          <div className="dropdown-custom">
            <input
              onClick={() => toggleChecked()}
              value={aboutUs}
              onChange={() => setValue(value, false)}
              className="btn btn-secondary dropdown-toggle"
              id={field.name}
              type="text"

              // id="dropdownMenuButton"
            />
            <span>
              {" "}
              {check ? (
                <i className="fa fa-search aboutUs-icon"></i>
              ) : (
                <i className="fa fa-angle-down aboutUs-icon"></i>
              )}
            </span>

            {check ? (
              <div className="dropdown-menu show dropDropMenuCoustomClass">
                <a
                  onClick={() => {
                    setValue("Facebook", false);
                    setAboutUs("Facebook");
                    setCheck(false);
                  }}
                  className="dropdown-item"
                  href="#"
                >
                  Facebook
                </a>
                <a
                  onClick={() => {
                    setValue("LinkedIn", false);
                    setAboutUs("LinkedIn");
                    setCheck(false);
                  }}
                  className="dropdown-item"
                  href="#"
                >
                  LinkedIn
                </a>
                <a
                  onClick={() => {
                    setValue("Instagram", false);
                    setAboutUs("Instagram");
                    setCheck(false);
                  }}
                  className="dropdown-item"
                  href="#"
                >
                  Instagram
                </a>
                <a
                  onClick={() => {
                    setValue("Friend", false);
                    setAboutUs("Friend");
                    setCheck(false);
                  }}
                  className="dropdown-item"
                  href="#"
                >
                  Friend
                </a>
                <a
                  onClick={() => {
                    setValue("Others", false);
                    setAboutUs("Others");
                    setCheck(false);
                  }}
                  className="dropdown-item"
                  href="#"
                >
                  Others
                </a>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : field.name === "branding" ? (
          <>
            <input
              id="branding"
              autoComplete="off"
              {...field}
              {...props}
              className="branding"
            />
            <label
              onClick={() => {
                setSelectIntrest((prevState) => ({
                  branding: !prevState.branding,
                }));
              }}
              htmlFor="branding"
            >
              <BrandingSvg fill={selectIntrest.branding ? "black" : "white"} />
            </label>
            <h6 className="title-service">{title}</h6>
          </>
        ) : field.name === "eCommerce" ? (
          <>
            <input
              id="ecommerce"
              autoComplete="off"
              {...field}
              {...props}
              className="branding"
            />
            <label
              className="mx-3"
              onClick={() => {
                setSelectIntrest((prevState) => ({
                  eCommerce: !prevState.eCommerce,
                }));
              }}
              htmlFor="ecommerce"
            >
              <ECommerce fill={selectIntrest.eCommerce ? "black" : "white"} />
            </label>
            <h6 className="title-service">{title}</h6>
          </>
        ) : field.name === "printMedia" ? (
          <>
            <input
              id="printMedia"
              autoComplete="off"
              {...field}
              {...props}
              className="branding"
              type="checkbox"
            />
            <label
              className="mx-2"
              onClick={() => {
                setSelectIntrest((prevState) => ({
                  printMedia: !prevState.printMedia,
                }));
              }}
              htmlFor="printMedia"
            >
              <PrintMedia fill={selectIntrest.printMedia ? "black" : "white"} />
            </label>
            <h6 className="title-service">{title}</h6>
          </>
        ) : field.name === "mobileApp" ? (
          <>
            <input
              id="mobileApp"
              autoComplete="off"
              {...field}
              {...props}
              className="branding"
            />
            <label
              className="mx-2"
              onClick={() => {
                setSelectIntrest((prevState) => ({
                  mobileApp: !prevState.mobileApp,
                }));
              }}
              htmlFor="mobileApp"
            >
              <MobileApp fill={selectIntrest.mobileApp ? "black" : "white"} />
            </label>
            <h6 className="title-service">{title}</h6>
          </>
        ) : field.name === "digitalMarketing" ? (
          <>
            <input
              id="digitalMarketing"
              autoComplete="off"
              {...field}
              {...props}
              className="branding"
            />
            <label
              className="mx-4"
              onClick={() => {
                setSelectIntrest((prevState) => ({
                  digitalMarketing: !prevState.digitalMarketing,
                }));
              }}
              htmlFor="digitalMarketing"
            >
              <DigitalMarketing
                fill={selectIntrest.digitalMarketing ? "black" : "white"}
              />
            </label>
            <h6 className="title-service">{title}</h6>
          </>
        ) : (
          <input
            autoComplete="off"
            {...field}
            {...props}
            id={field.name}
            className={`form-control form-control-lg ${
              meta.touched && meta.error && "is-invalid"
            }`}
          />
        )}

        <ErrorMessage
          component="div"
          name={field.name}
          className="error text-danger py-2"
        />
      </div>
    </>
  );
}

export default TextField;
