import React from "react";

const VistaWeb = ({ poema }) => {
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "#3388af", fontSize: "42px" }}>
        {poema ? poema.title : "..."}
      </h1>
      <p>Por {poema ? poema.poet.name : "..."}</p>
      <img
        src="https://picsum.photos/600/400"
        alt="random image"
        style={{ maxWidth: "600px", maxHeight: "400" }}
      />
      <p
        style={{
          color: "gray",
          fontStyle: "italic",
          fontSize: "10px",
        }}
      >
        {lorem}
      </p>
      <br />
      <p style={{ maxWidth: "50ch" }}>{poema ? poema.content : null}</p>
    </div>
  );
};

export default VistaWeb;
