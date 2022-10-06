import React from "react";
import {FastField, ErrorMessage } from "formik";
import "../../styles/Checkbox.scss"
function Checkbox({ data }) {
  const { label, name, options, ...rest } = data
  return (
    <>
    <section id="checkBox">
      <label className="forms-fs-ff ">{label}</label>
      <div className="form-outline  forms-fs-ff  ">
      <div className="coustom-checkbox position-relative mb-4">
        <FastField name={name}>
          {({ field }) => {
            return options.map((option, i) => {
              return (
                <React.Fragment key={option.key}>
                  <input
                    className="branding"
                    type="checkbox"
                    id={option.key}
                    {...field}
                    value={option.value}
                    key={i}
                    checked={field.value.includes(option.value)}
                  />

                  <label htmlFor={option.key}>{option.component}</label>
                </React.Fragment>
              );
            });
          }}
        </FastField>
        
      </div>
      <ErrorMessage
          component="div"
          name={name}
          className="error text-danger"
        />
        </div>
        </section>
    </>
  );
}

export default Checkbox;
