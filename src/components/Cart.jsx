import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

export function Cart() {
  const { cartList, removeProduct } = useContext(ProductContext);

  // const totalValue = () => {
  //   let value = 0;
  //   for (let i = 0; i < cartList.length; i++) {
  //     const product = cartList[i];
  //     value = value + product.valor * product.qtd;
  //   }
  //   return value;
  // };

  const totalValue = cartList.reduce(
    (acc, currentItem) => acc + currentItem.valor * currentItem.qtd,
    0
  );

  return (
    <div className="cart">
      <h2>Carrinho</h2>

      {cartList.map(({ name, qtd, id }) => (
        <div className="produto">
          <span>{qtd}X</span>
          <p>{name}</p>
          <button onClick={() => removeProduct(id)}>remover</button>
        </div>
      ))}

      <div>
        <p>Valor total R${totalValue}</p>
      </div>
    </div>
  );
}
