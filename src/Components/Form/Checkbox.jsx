import React from "react";
import {FastField, ErrorMessage } from "formik";
function Checkbox({ data }) {
  const { label, name, options, ...rest } = data
  return (
    <>
      <label className="form-outline">{label}</label>
      <div className="coustom-checkbox position-relative mb-5">
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
        <ErrorMessage
          component="div"
          name={name}
          className="error text-danger py-2"
        />
      </div>
    </>
  );
}

export default Checkbox;
