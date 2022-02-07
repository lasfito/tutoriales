import { useState } from "react";
import DeltaJr from "./DeltaJr";
import { Button, VisualComponent } from "./Utils";

const Delta = (props) => {
  const [counter, setCounter] = useState(0);

  return (
    <VisualComponent title="Delta" opacity={95}>
      <h4 className="-mt-2 mb-1  font-thin"> {counter}</h4>

      <Button onClick={() => setCounter(counter + 1)}>Haz algo</Button>

      <DeltaJr />
    </VisualComponent>
  );
};

export default Delta;
