import Head from "next/head";
import ControlePagina from "./ControlePagina";
import Filtro from "./Filtro";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState("");
  console.log("🚀 ~ file: index.tsx:8 ~ Home ~ filter:", filter);

  return (
    <div>
      <Head>
        <title>Cryptocoins</title>
      </Head>
      <div className="flex m-6 justify-between">
        <ControlePagina>Página Anterior</ControlePagina>
        <ControlePagina>Próxima Página</ControlePagina>
      </div>
      <div>
        <Filtro filter={(filter: any) => setFilter(filter)} />
        <p data-testid="text-parent">{filter}</p>
      </div>
    </div>
  );
}
