import { createContext, useMemo, useState } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const productList = [
    {
      name: "prod1",
      valor: 64,
      id: 1,
    },
    {
      name: "prod2",
      valor: 44,
      id: 2,
    },
    {
      name: "prod3",
      valor: 53,
      id: 3,
    },
    {
      name: "prod4",
      valor: 12,
      id: 4,
    },
    {
      name: "prod5",
      valor: 32,
      id: 5,
    },
  ];

  const [cartList, setCartList] = useState([]);
  const [sort, setSort] = useState("");

  const sortedProductList = useMemo(
    () =>
      [...productList].sort((a, b) => {
        if (sort) {
          if (sort === "asc") {
            return a.valor - b.valor;
          } else {
            return b.valor - a.valor;
          }
        } else {
          return 0;
        }
      }),
    [sort]
  );

  const addProduct = (product) => {
    const newCartList = [...cartList];
    const foundProduct = newCartList.find((item) => item.id == product.id);
    if (foundProduct) {
      foundProduct.qtd = foundProduct.qtd + 1;
      setCartList(newCartList);
    } else {
      setCartList([...cartList, { ...product, qtd: 1 }]);
    }
  };

  const removeProduct = (productId) => {
    const newCartList = [...cartList];
    const filtredCartItem = newCartList.find((item) => item.id == productId);

    if (filtredCartItem.qtd > 1) {
      filtredCartItem.qtd--;
      setCartList(newCartList);
    } else {
      setCartList(newCartList.filter((item) => item.id != productId));
    }
  };

  return (
    <ProductContext.Provider
      value={{
        sortedProductList,
        addProduct,
        sort,
        setSort,
        cartList,
        removeProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
