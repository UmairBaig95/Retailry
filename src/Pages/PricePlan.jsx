import React from "react";
import RetailryLogo from "../assets/RetailryLogo.svg";
import { Link } from "react-router-dom";
import PricingHeader from "../Components/PricingHeader";
import ContactUsForm from "../Components/ContactUsForm";
function PricePlan() {
  return (
    <>
      <PricingHeader/>
      <ContactUsForm/>
    </>
  );
}

export default PricePlan;
