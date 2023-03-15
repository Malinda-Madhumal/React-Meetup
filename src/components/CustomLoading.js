import React from "react";
import "./CustomLoading.css";

function CustomLoading() {
  return (
    <div className="loading-container">
      <div className="loading-animation">
        <div className="loading-bars">
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
        </div>
      </div>
    </div>
  );
}

export default CustomLoading;
