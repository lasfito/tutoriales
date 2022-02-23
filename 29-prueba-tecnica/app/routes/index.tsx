import { useState } from "react";
import { VistaGrid, VistaTable } from "~/components/";
import { homeStyles } from "~/styles";
import { Table, Grid } from "~/assets";

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: homeStyles,
    },
  ];
};

export default function Index() {
  const [isGridView, setIsGridView] = useState(false);
  return (
    <main>
      <div className="container">
        <div className="flex-row mb-3 mt-1">
          <div>
            <h1 className="h1">Best Movies.com</h1>
            <p>Saludos</p>
          </div>
          {isGridView ? (
            <img
              src={Table}
              alt="table-icon"
              className="home-icon"
              onClick={() => setIsGridView(!isGridView)}
            />
          ) : (
            <img
              src={Grid}
              alt="grid-icon"
              className="home-icon"
              onClick={() => setIsGridView(!isGridView)}
            />
          )}
        </div>
        {isGridView ? <VistaGrid /> : <VistaTable />}
      </div>
    </main>
  );
}
