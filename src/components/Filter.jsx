import { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";

export function Filter() {
  const { filterMin, filterMax, setFilterMin, setFilterMax, nome, setNome } =
    useContext(ProductContext);

  return (
    <div className="filtro">
      <h1>Filtros</h1>

      <div className="caixa-filtro">
        <label>Filtros Minimo:</label>
        <input
          value={filterMin}
          onChange={(e) => setFilterMin(e.target.value)}
          type="text"
        />

        <label>Filtros Maximo:</label>
        <input
          value={filterMax}
          onChange={(e) => setFilterMax(e.target.value)}
          type="text"
        />

        <label>Busca por nome:</label>
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
        />
      </div>
    </div>
  );
}
