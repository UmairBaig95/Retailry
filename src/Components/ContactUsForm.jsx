import React from "react";
import { Formik, Form } from "formik";
import TextFields from "./TextField";
import * as Yup from "yup";
import "../styles/ContactUs.scss";
import "react-phone-input-2/lib/style.css";

function ContactUsForm() {

  const validate = Yup.object({
    fullName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Name is required"),
    email: Yup.string().email("Email is Invalid").required("Email is required"),
    companyName: Yup.string().required("Company Name is required"),
    aboutUs: Yup.string().required("Feedback is require")
  });
  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        aboutUs: "",
        branding: "",
        eCommerce: "",
        mobileApp: "",
        printMedia: "",
        digitalMarketing: "",
        message: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div>
          <div className="mx-5 pl-2">
            <div className="card contactUs-main mx-lg-5">
              <div className="card-body">
                <Form>
                  <div className="row">
                    <div className="col-md-4 pr-4 mb-3">
                      <TextFields
                        label="Full Name"
                        name="fullName"
                        type="text"
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <TextFields label="Email" name="email" type="email" />
                    </div>
                    <div className="col-md-4 mb-3">
                      <TextFields
                        label="Phone"
                        id="phoneNum"
                        name="phone"
                        type="phone"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <TextFields
                        label="Company Name"
                        name="companyName"
                        type="text"
                      />
                    </div>
                    <div className="col-md-4 mb-3 pl-0">
                      <TextFields
                        label="How did you come to know about us?"
                        name="aboutUs"
                        id="aboutUs"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="d-flex ">
                    <div className="mb-3 pl-0">
                      <TextFields
                        label="I'm intrested in"
                        title="Branding"
                        name="branding"
                        type="checkbox"
                      />
                    </div>
                    <div className="mb-3 mt-2 pl-0">
                      <TextFields
                        label=""
                        title="E-Commerce"
                        name="eCommerce"
                        type="checkbox"
                      />
                    </div>
                    <div className="mb-3 mt-2 mx-4 pl-0">
                      <TextFields
                        label=""
                        title="Mobile App"
                        name="mobileApp"
                        type="checkbox"
                      />
                    </div>
                    <div className="mb-3 mt-2 mx-4 pl-0">
                      <TextFields
                        label=""
                        title="Print Media"
                        name="printMedia"
                        type="checkbox"
                      />
                    </div>
                    <div className="mb-3 mt-2 mx-3  pl-0">
                      <TextFields
                        label=""
                        title="Digital Marketing"
                        name="digitalMarketing"
                        type="checkbox"
                      />
                    </div>
                  </div>

                  <div className="d-flex">
                    <div className="col-md-12 mb-3 pl-0">
                      <TextFields label="Body" name="message" type="text" />
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
