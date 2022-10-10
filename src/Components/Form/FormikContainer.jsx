import React, { useState } from "react";
import { Formik, FastField, Form } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
import * as Yup from "yup";
import "../../styles/contactUs.scss";
import FormController from "./FormController";
import BrandingSvg from "../../Components/SvgComponents/BrandingSvg";
import MobileApp from "../../Components/SvgComponents/MobileApp";
import PrintMedia from "../../Components/SvgComponents/PrintMedia";
import DigitalMarketing from "../../Components/SvgComponents/DigitalMarketing";
import ECommerce from "../../Components/SvgComponents/ECommerce";
import { useEffect } from "react";
function ContactUsForm() {
  const [isVerified, setIsVerified] = useState(false);
  const checkBoxOptions = [
    { key: "branding", value: "Branding", component: <BrandingSvg /> },
    { key: "ecommerce", value: "Ecommerce", component: <MobileApp /> },
    { key: "printMedia", value: "Print Media", component: <PrintMedia /> },
    { key: "mobileApp", value: "Mobile App", component: <DigitalMarketing /> },
    {
      key: "digitalMarketing",
      value: "Digital Marketing",
      component: <ECommerce />,
    },
  ];
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validate = Yup.object({
    fullName: Yup.string()
      .max(30, "Must be 30 characters or less")
      .required("Full Name is required"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Phone Name is required"),
    email: Yup.string().email("Email is Invalid").required("Email is required"),
    companyName: Yup.string().required("Company Name is required"),
    aboutUs: Yup.string().required("Feedback is require"),
    checkBoxOptions: Yup.array().min(1, "At least one must be selected"),
    message: Yup.string().required("Require"),
  });
  function captchaOnChange(value) {
    console.log("Captcha value:", value);
    setIsVerified(true);
  }
  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        aboutUs: "",
        message: "",
        checkBoxOptions: [],
      }}
      validationSchema={validate}
   onSubmit={(values, {resetForm}) => {
        console.log("values", values);
        if (isVerified === true) {
        try{
          emailjs.send(  "service_jlzo82c",
          "template_6ji3zpt",
          values,
          "3yDMdm_GlFO-4PVi8")
            .then(() => {
              alert("Form Submit Successfully")
              
               resetForm({});
               
                  });
           }
           catch {
       
          }
        }
        else {
              alert("You Need to Verify First");
            }
      }}
    >
      {(formik) => (
        <section id="formikContainer">
        
          <div className="mx-2 mx-md-5 pl-4 pl-md-2">
            <div className="card contactUs-main grayBackground border-0 formikContainerMain mx-lg-5">
              <div className="card-body mr-md-0 mr-2">
                <Form>
                  <div className="row">
                    <div className="col-md-4 col-sm-12 mb-3">
                      <FormController
                        label="Full Name"
                        name="fullName"
                        type="text"
                      />
                    </div>
                    <div className="col-md-4 col-sm-12 mb-3">
                      <FormController label="Email" name="email" type="email" />
                    </div>
                    <div className="col-md-4">
                      <FormController
                        label="Phone"
                        id="phoneNum"
                        name="phone"
                        type="phone"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 col-sm-12  mb-3">
                      <FormController
                        label="Company Name"
                        name="companyName"
                        type="text"
                      />
                    </div>
                    <div className="col-md-4 col-sm-12  mb-3">
                      <FormController
                        label="How did you come to know about us?"
                        name="aboutUs"
                        type="select"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 col-sm-6">
                      <FormController
                        type="checkbox"
                        label="I'm intrested in"
                        name="checkBoxOptions"
                        options={checkBoxOptions}
                      />
                    </div>
                  </div>
                  <div className="d-flex mt-4">
                    <div className="col-md-12 mb-3 mt-md-2 mt-5 pl-0">
                      <FormController label="Body" name="message" type="text" />
                    </div>
                  </div>
                  <ReCAPTCHA
                    sitekey=" 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={captchaOnChange}
                    className="g-recaptcha"
                  />
                  <div className="d-flex justify-content-start mt-3">
                    <button
                      type="submit"
                      className="btn submit btn-success fs-5 px-5"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </section>
      )}
    </Formik>
  );
}

export default ContactUsForm;