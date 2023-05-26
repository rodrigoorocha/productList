import { useState } from "react"

export function Home() {

    const productList = [{
        name: "prod1",
        valor: 5.50,
        id: 1
    }, {
        name: "prod2",
        valor: 5.650,
        id: 2
    },
    {
        name: "prod3",
        valor: 532234.50,
        id: 3
    },
    {
        name: "prod4",
        valor: 5.40,
        id: 4
    },
    {
        name: "prod5",
        valor: 353,
        id: 5
    },]

    const [cartList, setCartList] = useState([])
    console.log(cartList);
    const addProduct = (product) => {
        const newCartList = [...cartList]
        const foundProduct = newCartList.find((item) => item.id == product.id)
        if (foundProduct) {
            foundProduct.qtd = foundProduct.qtd + 1
            setCartList(newCartList)
        }
        else {
            setCartList([...cartList, { ...product, qtd: 1 }])
        }


    }

    return (

        <div className="home">
            <div className="navbar">
                <h1>Quantidade de produtos </h1>
                <div><p>Ordenação</p> <select name="option" id=""></select></div>
            </div>

            <div className="list">
                {productList.map((product) => {
                    const { name, valor } = product
                    return (
                        <div className="productcard">

                            <div>
                                <div className="namecart">{name}</div>
                                <div className="valorcart">{valor}</div>
                            </div>
                            <button onClick={() => addProduct(product)}>+</button>

                        </div>
                    )
                })}

            </div>
        </div>
    )
}

