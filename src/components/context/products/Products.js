import { createContext } from "react";


const Products = createContext({
    products: [],
    filteredProducts: [],
    setFilteredProducts: () => { }
})

export default Products