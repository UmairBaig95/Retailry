import React from 'react'
import { useField, ErrorMessage } from "formik";
import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/style.css";
import "../../styles/TextField.scss";
function Phone({data}) {
    const [field, meta] = useField(data);
  return (
    <>
      <div className="mb-4" id='ikm'>
        <label className="form-label pl-0" htmlFor={field.name}>
          {data.label}
        </label>
        <PhoneInput
              country={"pk"}
              id={field.name}
              {...field}
              value={field.value}
              onChange={field.onChange(field.name)}
              className={`phone-input ${
               meta.error? "invalid" : ""
              }`}
            />
            <p className="error text-danger py-2">{meta.error}</p>
            </div>
           
    </>
  )
}

export default Phone
