import React, { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard";
import getActiveProducts from "../functions/getActiveProducts";
import ItemSection from "../components/ItemSection";

import { Layout } from "../components/";

function Home() {
  const [productos, setProductos] = useState(null);

  useEffect(() => {
    async function getProducts() {
      const products = await getActiveProducts();
      setProductos(products);
      console.log("productosHome", products);
    }

    getProducts();
  }, []);

  return (
    <Layout>
      <ItemSection title="Lo más vendido" productos={productos} />
      <ItemSection title="Nuevas Entradas" productos={productos} />
    </Layout>
  );
}

export default Home;
