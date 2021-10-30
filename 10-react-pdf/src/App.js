import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import React from "react";
import DocuPDF from "./DocuPDF";
import Button from "react-bootstrap/Button";
import VistaWeb from "./VistaWeb";

function App() {
  const [poema, setPoema] = React.useState("");
  const [verWeb, setVerWeb] = React.useState(false);
  const [verPDF, setVerPDF] = React.useState(false);
  function fetchPoema() {
    fetch("https://www.poemist.com/api/v1/randompoems")
      .then((response) => response.json())
      .then((data) => {
        setPoema(data[0]);
        console.log(data[0]);
      });
  }

  React.useEffect(() => {
    fetchPoema();
  }, []);

  const Menu = () => (
    <nav
      style={{
        display: "flex",
        borderBottom: "1px solid black",
        paddingBottom: "5px",
        justifyContent: "space-around",
      }}
    >
      <Button
        variant="dark"
        onClick={() => {
          setVerWeb(!verWeb);
          setVerPDF(false);
        }}
      >
        {verWeb ? "Ocultar Web" : "Ver Web"}
      </Button>
      <Button
        variant="dark"
        onClick={() => {
          setVerPDF(!verPDF);
          setVerWeb(false);
        }}
      >
        {verPDF ? "Ocultar PDF" : "Ver PDF"}
      </Button>
      <PDFDownloadLink
        document={<DocuPDF poema={poema} />}
        fileName="poema.pdf"
      >
        <Button variant="info">Descargar PDF</Button>
      </PDFDownloadLink>
    </nav>
  );

  return (
    <div style={{ minHeight: "100vh" }}>
      <Menu />
      {poema ? (
        <>
          {verWeb ? <VistaWeb poema={poema} /> : null}
          {verPDF ? (
            <PDFViewer style={{ width: "100%", height: "90vh" }}>
              <DocuPDF poema={poema} />
            </PDFViewer>
          ) : null}
        </>
      ) : null}
    </div>
  );
}

export default App;
