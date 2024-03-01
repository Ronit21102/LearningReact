import { createContext, useState } from "react";

export const CartDataContext = createContext(null);

export const CartContextProvider = ({ children }) => {
    const [price, setPrice] = useState(0);
    const [allProducts, setAllProducts] = useState([]);

    return (
        <CartDataContext.Provider value={{ price, setPrice, allProducts, setAllProducts }}>
            {children}
        </CartDataContext.Provider>
    );
};
