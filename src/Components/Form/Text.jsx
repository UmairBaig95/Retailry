import React from "react";
import { useField, ErrorMessage } from "formik";
import "../../styles/TextField.scss";
function Text({ data }) {
  const [field, meta] = useField(data);
  return (
    <>
      <section id={field.name}>
        <div className="form-outline forms-text-field forms-fs-ff mb-4">
          <label className="form-label pl-0" htmlFor={field.name}>
            {data.label}
          </label>
          <input
            autoComplete="off"
            {...field}
            {...data}
            id={field.name}
            className={`form-control text-field form-control-lg ${
              meta.touched && meta.error && "is-invalid"
            }`}
          />
          <ErrorMessage
            component="div"
            name={field.name}
            className="error text-danger py-2"
          />
        </div>
      </section>
    </>
  );
}

export default Text;
