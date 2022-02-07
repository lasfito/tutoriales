import { useState } from "react";
import { Button, VisualComponent } from "./Utils";
import Bravo from "./Bravo";

const Alpha = () => {
  const [counter, setCounter] = useState(0);

  return (
    <VisualComponent title="Alpha" opacity={85}>
      <h4 className="-mt-2 mb-1  font-thin"> {counter}</h4>

      <Button onClick={() => setCounter(counter + 1)}>Haz algo</Button>

      <Bravo />
    </VisualComponent>
  );
};

export default Alpha;
