import React from "react";
import {FastField, ErrorMessage } from "formik";
function Checkbox({ data }) {
  const { label, name, options, ...rest } = data
  return (
    <>
      <label className="form-outline">{label}</label>
      <div className="form-outline ">
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
    </>
  );
}

export default Checkbox;
