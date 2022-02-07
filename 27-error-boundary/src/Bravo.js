import { useState } from "react";
import { Button, VisualComponent } from "./Utils";
import Charlie from "./Charlie";
import Delta from "./Delta";

const Bravo = () => {
  const [counter, setCounter] = useState(0);

  return (
    <VisualComponent title="Bravo" opacity={90}>
      <h4 className="-mt-2 mb-1  font-thin"> {counter}</h4>

      <Button onClick={() => setCounter(counter + 1)}>Haz algo</Button>

      <div className="grid grid-rows-2 md:grid-cols-2 md:gap-4 md:grid-rows-1">
        <Charlie />

        <Delta />
      </div>
    </VisualComponent>
  );
};

export default Bravo;
