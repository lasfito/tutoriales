import { useState } from "react";
import { Button, VisualComponent } from "./Utils";

const DeltaJr = () => {
  const [counter, setCounter] = useState(0);
  if (counter === 3) throw new Error("Código 43");

  return (
    <div className=" bg-red-700 rounded  ">
      <VisualComponent title="Delta Jr ☠️" opacity={100}>
        <h4 className="-mt-2 mb-1  font-thin"> {counter}</h4>

        <Button onClick={() => setCounter(counter + 1)}>Haz algo</Button>
      </VisualComponent>
    </div>
  );
};

export default DeltaJr;
