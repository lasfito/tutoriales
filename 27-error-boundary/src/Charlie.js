import { useState } from "react";
import { Button, VisualComponent } from "./Utils";
import CharlieJr from "./CharlieJr";

const Charlie = () => {
  const [counter, setCounter] = useState(0);

  return (
    <VisualComponent title="Charlie" opacity={95}>
      <h4 className="-mt-2 mb-1  font-thin"> {counter}</h4>

      <Button onClick={() => setCounter(counter + 1)}>Haz algo</Button>
      <CharlieJr />
    </VisualComponent>
  );
};

export default Charlie;
