import { useContext } from "react";
import Board from "./components/board";
import Modal from "./components/modal";
import Start from "./components/start";
import { GameContext } from "./context/GameContex";

function App() {
  const { screen } = useContext(GameContext);
  return (
    <div className="App">
      <div className="container">
        {screen === "start" ? <Start /> : <Board />}
      </div>
      <Modal />
    </div>
  );
}

export default App;
