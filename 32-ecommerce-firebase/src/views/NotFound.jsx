import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components";

function NotFound() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold my-5">Not Found</h1>
      <Link to="/" className="text-xl">
        {" "}
        No encontramos lo que buscabas,
        <span className="underline text-azul">
          ¿ por qué no regresas al inicio?
        </span>
      </Link>
    </Layout>
  );
}

export default NotFound;
