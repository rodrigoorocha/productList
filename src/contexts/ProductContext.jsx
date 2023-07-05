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

  //                  filter
  const [filterMin, setFilterMin] = useState();
  const [filterMax, setFilterMax] = useState(null);
  const [nome, setNome] = useState("");

  const sortedProductList = useMemo(
    () =>
      [...productList].sort((item1, item2) => {
        if (sort) {
          if (sort === "asc") {
            return item1.valor - item2.valor;
          } else if (sort == "desc") {
            return item2.valor - item1.valor;
          } else if (sort === "nome-asc") {
            return item1.name > item2.name ? 1 : -1;
          } else {
            return item1.name > item2.name ? -1 : 1;
          }
        } else {
          return 0;
        }
      }),
    [sort]
  );

  const filteredProductList = useMemo(() => {
    return sortedProductList
      .filter((product) => product.valor >= filterMin || !filterMin)
      .filter((product) => product.valor <= filterMax || !filterMax)
      .filter((product) => product.name.includes(nome));
  }, [sortedProductList, filterMin, filterMax, nome]);

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
        nome,
        setNome,
        filterMin,
        filterMax,
        setFilterMin,
        setFilterMax,
        filteredProductList,
        productList,
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
