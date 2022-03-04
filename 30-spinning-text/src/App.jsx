import React from "react";
import SpinningText from "./SpinningText";
import GotMilk from "./gotMilk.png";

function App() {
  return (
    <SpinningText text="Hola, denle suscribirse al canal">
      <img src={GotMilk} alt="Got Milk" />
    </SpinningText>
  );
}

export default App;
