import React from "react";
import { featuresBarLink } from "../Constant/FeatureData";
function FeaturesNav() {
  return (
    <>
      <div
        id="featureBar"
        style={{ top: "0px", zIndex: "100" }}
        className="position-sticky greenBackground"
      >
        <nav className="nav nav-pills justify-content-center">
          {featuresBarLink.map((e, i) => {
            return (
              <a
                key={e.id}
                className="nav-item nav-link text-white"
                href={e.path}
              >
                {e.name}
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
}

export default FeaturesNav;
