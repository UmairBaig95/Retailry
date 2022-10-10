import React from 'react'
import { useField } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../../styles/TextField.scss";
function Phone({data}) {
    const [field, meta] = useField(data);
  return (
    <>

      <div id="phone-input" className="mb-4 forms-fs-ff forms-text-field">
        <label className="form-label pl-0" htmlFor={field.name}>
          {data.label}
        </label>
        <PhoneInput
              country={"pk"}
              id={field.name}
              {...field}
              value={field.value}
              name={field.name}
              onChange={field.onChange(field.name)}
              className={`phone-input  text-field ${
               meta.error? "invalid" : ""
              }`}
              inputProps={{
                name:'phone'
               
              }}
            />
            <p className="error text-danger py-2">{meta.error}</p>
      </div>

           
    </>
  )
}

export default Phone
