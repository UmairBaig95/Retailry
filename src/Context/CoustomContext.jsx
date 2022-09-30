import React, { useState } from "react";
import { Context } from "./Context";
 
//TODO Need to update
function CoustomContext(props) {
  const [activeTemplate, setactiveTemplate] = useState(1);
  
  return (
    <>
      <Context.Provider value={{ activeTemplate, setactiveTemplate }}>
        {props.children}
      </Context.Provider>
    </>
  );
}

export default CoustomContext;
