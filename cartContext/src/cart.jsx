import React, { useContext } from "react";
import { CartDataContext } from "../DataStore/Data";

const Cart = () => {
    const { price, setPrice, allProducts, setAllProducts } = useContext(CartDataContext);

    return (
        <>
            {allProducts.map((product, index) => (
                <div key={index}>
                    <h1>{product.name}</h1>
                    
                </div>
            ))}
            <h2>Bill:{price}</h2>
        </>
    );
};

export default Cart;
