import React, { useContext } from "react";
import Win from "./Win";
import Restart from "./Restart";
import { ModalContext } from "../../context/ModalContext";

const Modal = () => {
  const { show, modaleModel } = useContext(ModalContext);

  return (
    <div className={`modal ${!show && "closed"}`}>
      <div className="modal__content">
        <div className="container">
          {modaleModel === "winner" && <Win />}
          {modaleModel === "start" && <Restart />}
        </div>
      </div>
    </div>
  );
};

export default Modal;
