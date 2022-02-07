import { useState } from "react";
import { Button, VisualComponent } from "./Utils";

const CharlieJr = () => {
  const [counter, setCounter] = useState(0);
  return (
    <VisualComponent title="Charlie Jr" opacity={100}>
      <h4 className="-mt-2 mb-1  font-thin"> {counter}</h4>

      <Button onClick={() => setCounter(counter + 1)}>Haz algo</Button>
    </VisualComponent>
  );
};

export default CharlieJr;
