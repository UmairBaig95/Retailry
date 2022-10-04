import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "../../styles/contactUs.scss";
import FormController from "./FormController";
import "../../styles/TextField.scss";
import BrandingSvg from "../../Components/SvgComponents/BrandingSvg";
import MobileApp from "../../Components/SvgComponents/MobileApp";
import PrintMedia from "../../Components/SvgComponents/PrintMedia";
import DigitalMarketing from "../../Components/SvgComponents/DigitalMarketing";
import ECommerce from "../../Components/SvgComponents/ECommerce";
function ContactUsForm() {
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
    checkBoxOptions: Yup.array().required("At Least Select One!"),
    message: Yup.string().required("Require"),
  });
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
      onSubmit={(values, { setSubmitting }) => {
        console.log("values", values);
      }}
    >
      {(formik) => (
        <div>
          <div className="mx-2 mx-md-5 pl-4 pl-md-2">
            <div className="card contactUs-main mx-lg-5">
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
                  <div className="d-flex">
                    <div className="col-md-12 mb-3 mt-md-2 mt-5 pt-md-0 pt-4 pl-0">
                      <FormController label="Body" name="message" type="text" />
                    </div>
                  </div>

                  <div className="d-flex justify-content-start">
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
        </div>
      )}
    </Formik>
  );
}

export default ContactUsForm;
