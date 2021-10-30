import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";

const DocuPDF = ({ poema }) => {
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  return (
    <Document>
      <Page
        size="A4"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            padding: 10,
          }}
        >
          <Text style={{ color: "#3388af", fontSize: "42px" }}>
            {poema ? poema.title : "..."}
          </Text>
          <Text>Por {poema ? poema.poet.name : "..."}</Text>
          <Image
            src="https://picsum.photos/600/400"
            alt="random image"
            style={{ maxWidth: "600px", maxHeight: "400" }}
          />
          <Text
            style={{
              color: "gray",
              fontStyle: "italic",
              fontSize: "10px",
            }}
          >
            {lorem}
          </Text>

          <Text style={{ textAlign: "justify", marginTop: "22px" }}>
            {poema ? poema.content : null}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default DocuPDF;
