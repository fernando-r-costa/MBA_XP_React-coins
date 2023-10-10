import { useState } from "react";

export default function Filtro(props: any) {
  const [coinName, setCoinName] = useState("");

  const onFilter = (e: { target: { value: any } }) => {
    const newCoinName = e.target.value;
    setCoinName(newCoinName);
    props.filter(newCoinName);
  };

  return (
    <form className="m-6">
      <input
        type="search"
        placeholder="Filtre por nome"
        className="bg-transparent w-full border-solid border-2 border-black rounded p-2"
        value={coinName}
        onChange={onFilter}
        data-testid="input-filho"
      ></input>
    </form>
  );
}
