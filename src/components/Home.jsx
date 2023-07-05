import { useContext, useEffect, useMemo, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";

export function Home() {
  const { addProduct, sort, setSort, filteredProductList } =
    useContext(ProductContext);

  return (
    <div className="home">
      <div className="navbar">
        <h1>Quantidade de produtos </h1>
        <div>
          <p>Ordenação</p>
          <select
            onChange={(event) => setSort(event.target.value)}
            value={sort}
            name="option"
            id=""
          >
            <option value="">Selecione</option>
            <option value="asc">Preço Crescente</option>
            <option value="desc">Preço Decrescente</option>
            <option value="nome-asc">Nome Crescente</option>
            <option value="nome-desc">Nome Decrescente</option>
          </select>
        </div>
      </div>

      <div className="list">
        {filteredProductList.map((product) => {
          const { name, valor } = product;
          return (
            <div className="productcard">
              <div>
                <div className="namecart">{name}</div>
                <div className="valorcart">{valor}</div>
              </div>
              <button onClick={() => addProduct(product)}>+</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
