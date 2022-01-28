import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { GameState } from "./context/GameContex";

import { ModalState } from "./context/ModalContext";

ReactDOM.render(
  <React.StrictMode>
    <ModalState>
      <GameState>
        <App />
      </GameState>
    </ModalState>
  </React.StrictMode>,
  document.getElementById("root")
);
