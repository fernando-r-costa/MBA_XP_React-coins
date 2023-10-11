import Head from "next/head";
import ControlePagina from "./ControlePagina";
import Filtro from "./Filtro";
import { useEffect, useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState("");
  const [data, setData] = useState<string>("");
  console.log("🚀 ~ file: index.tsx:9 ~ Home ~ data:", data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.coingecko.com/api/v3/exchanges?per_page=100");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

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
        <p data-testid="text-parent" hidden>
          {filter}
        </p>
      </div>
    </div>
  );
}
