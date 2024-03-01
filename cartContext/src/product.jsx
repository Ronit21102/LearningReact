import React, { useContext } from "react";
import { CartDataContext } from "../DataStore/Data";

const Products = ({ name, proPrice }) => {
    const { price, setPrice, allProducts, setAllProducts } = useContext(CartDataContext);

    const addToCart = () => {
        setPrice(prevPrice => prevPrice + proPrice);

        setAllProducts(prevProducts => [...prevProducts, { name, price: proPrice }]);
    };

    return (
        <>
            <h1>{name}</h1>
            <p>Rs {proPrice}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </>
    );
};

export default Products;
