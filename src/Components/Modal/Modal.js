import React from "react";
import "./Modal.css";
import homerWooHoo from "../../assets/homer-woo-hoo.png";

// "woo-hoo" Modal:
export default function Modal() {
  return (
    <div className="modal">
      <div className="modal-content">
        <div>
          <img
            src={homerWooHoo}
            alt="Homer saying: whoo hoo!"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}
