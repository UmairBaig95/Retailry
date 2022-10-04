import React from "react";
import Checkbox from "./Checkbox";
import Phone from "./Phone";
import CoustomSelect from "./CoustomSelect";
import Text from "./Text";
import Email from "./Email";

function FormController({ type, ...props }) {

  switch (type) {
    case "text":
      return <Text data={props} />;
    case "phone":
      return <Phone data={props}/>;
    case "email":
      return <Email data={props} />;
    case "select":
      return <CoustomSelect data={props} />;
      case "checkbox":
      return <Checkbox data={props} />
    default:
      return null;
  }
}

export default FormController;
