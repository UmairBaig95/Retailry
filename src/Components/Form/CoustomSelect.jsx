import React, { Fragment, useState } from "react";
import Select from "react-select";
import { useField, ErrorMessage } from "formik";
import "../../styles/TextField.scss";

const options = [
  { value: "Facebook", label: "Facebook" },
  { value: "Instagram", label: "Instagram" },
  { value: "LinkedIn", label: "LinkedIn" },
  { value: "Friends", label: "Friends" },
  { value: "Others", label: "Others" },
];

function CoustomSelect({ data }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [field, state, { setValue, setTouched }] = useField(data);
  const onChange = ({ value }) => {
    setValue(value);
  };
  return (
    <>
      <div className="form-outline mb-4">
        <label className="form-label pl-0" htmlFor={field.name}>
          {data.label}
        </label>

        <Select
          id="socialMediaSelect"
          
          {...data}
          onChange={onChange}
          options={options}
        />
        <ErrorMessage
          component="div"
          name={field.name}
          className="error text-danger py-2"
        />
      </div>
    </>
  );
}

export default CoustomSelect;
