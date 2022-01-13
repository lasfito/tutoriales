import { useState, memo } from "react";
import { Layout, Button, VisualComponent } from "./componentes";

const Alpha = () => {
  const Contador = () => {
    const [counter, setCounter] = useState(0);
    return (
      <>
        <h4 className="-mt-2 mb-1  font-thin"> {counter}</h4>

        <Button onClick={() => setCounter(counter + 1)}>
          Actualizar Estado
        </Button>
      </>
    );
  };
  return (
    <VisualComponent title="Alpha" metodo="abstracción">
      <Contador />
      <Bravo />
    </VisualComponent>
  );
};

const Bravo = () => {
  const [counter, setCounter] = useState(0);
  return (
    <VisualComponent title="Bravo">
      <h4 className="-mt-2 mb-1  font-thin"> {counter}</h4>

      <Button onClick={() => setCounter(counter + 1)}>Actualizar Estado</Button>
      <div className="grid grid-rows-2 md:grid-cols-2 md:gap-4 md:grid-rows-1">
        <Charlie />
        <Fetch hijo={<Fetch2 />} />
      </div>
    </VisualComponent>
  );
};

const Charlie = memo(() => {
  const [counter, setCounter] = useState(0);

  return (
    <VisualComponent title="Charlie" metodo="memo">
      <h4 className="-mt-2 mb-1  font-thin"> {counter}</h4>

      <Button onClick={() => setCounter(counter + 1)}>Actualizar Estado</Button>
      <CharlieJr />
    </VisualComponent>
  );
});
const CharlieJr = () => {
  const [counter, setCounter] = useState(0);
  return (
    <VisualComponent title="CharlieJr">
      <h4 className="-mt-2 mb-1  font-thin"> {counter}</h4>

      <Button onClick={() => setCounter(counter + 1)}>Actualizar Estado</Button>
    </VisualComponent>
  );
};

const Fetch = (props) => {
  const [counter, setCounter] = useState(0);

  return (
    <VisualComponent title="Fetch" metodo="props">
      <h4 className="-mt-2 mb-1  font-thin"> {counter}</h4>

      <Button onClick={() => setCounter(counter + 1)}>Fetch Api</Button>
      {props.hijo}
    </VisualComponent>
  );
};
const Fetch2 = () => {
  const [counter, setCounter] = useState(0);

  return (
    <VisualComponent title="Fetch 2">
      <h4 className="-mt-2 mb-1  font-thin"> {counter}</h4>

      <Button onClick={() => setCounter(counter + 1)}>Fetch Api</Button>
    </VisualComponent>
  );
};

export default function App() {
  return (
    <Layout>
      <Alpha />
    </Layout>
  );
}
