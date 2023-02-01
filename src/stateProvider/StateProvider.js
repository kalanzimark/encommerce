import React, { createContext, useState } from "react";
import productsData from "../data";

const ProductContext = createContext();

const ContextProvider = ({ children }) => {
    const [products, setProducts] = useState(productsData);
    const [isFavourite, setIsFavourite] = useState(false);
    return (
        <ProductContext.Provider
            value={{ products, isFavourite, setIsFavourite }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export { ProductContext, ContextProvider };
