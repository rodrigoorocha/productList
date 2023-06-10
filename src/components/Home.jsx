import { useContext, useEffect, useMemo, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";

export function Home() {
  const { sortedProductList, addProduct, sort, setSort } =
    useContext(ProductContext);

  return (
    <div className="home">
      <div className="navbar">
        <h1>Quantidade de produtos </h1>
        <div>
          <p>Ordenação</p>
          <select
            onChange={(event) => setSort(event.target.value)}
            valu
            e={sort}
            name="option"
            id=""
          >
            <option value="">Selecione</option>
            <option value="asc">Crescente</option>
            <option value="desc">Decrescente</option>
          </select>
        </div>
      </div>

      <div className="list">
        {sortedProductList.map((product) => {
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
