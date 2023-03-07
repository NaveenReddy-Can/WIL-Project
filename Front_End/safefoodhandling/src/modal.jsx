import React from "react";
import "./Modal.css";

function Modal(props) {
  return (
    <div className="modal-overlay" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {props.children}
        <button className="modal-close" onClick={props.onClose}>
          x
        </button>
      </div>
    </div>
  );
}

export default Modal;
