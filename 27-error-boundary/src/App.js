import { Layout } from "./Utils";
import Alpha from "./Alpha";
import SalvaVidas from "./SalvaVidas";

export default function App() {
  return (
    <Layout>
      <SalvaVidas>
        <Alpha />
      </SalvaVidas>
    </Layout>
  );
}
