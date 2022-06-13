import React from "react";
import "./Modal.css";

// "woo-hoo" Modal:
export default function Modal() {
  return (
    <div className="modal">
      <div className="modal-content">
        <div>
          <img
            src="img/HOMER-BUBBLE.png"
            alt="Homer saying: whoo hoo!"
            loading="auto"
          />
        </div>
      </div>
    </div>
  );
}
