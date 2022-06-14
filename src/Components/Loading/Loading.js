import React from "react";
import donut from "../../assets/donut2.gif";
import "./Loading.css";

export default function () {
  return (
    <div className="loading">
      <img
        src={donut}
        alt="Donut gif by Adrian & Gidi (Behance)"
        loading="eager"
      />
    </div>
  );
}
