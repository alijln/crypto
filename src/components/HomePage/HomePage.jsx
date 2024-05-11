import { useEffect, useReducer, useState } from "react";
import FilterBar from "../FilterBar/FilterBar";
import Header from "../Header/Header";
import ProductsContainer from "../ProductsContainer/ProductsContainer";
import SearchBar from "../SearchBar/SearchBar";
import ToolBar from "../ToolBar/ToolBar";
import CSS from "./homePage.module.css";
import Products from "../context/products/Products";
import useFetch from "../../hooks/useFetch/useFetch";
import FavoritesContext from "../context/FavoritesContext";
import FavoriteReducer from "../../reducers/FavoriteReducer";
import FavoriteProvider from "../Providers/FavoriteProvider";
import Pagination from "../Pagination";
import ProductDetail from "../ProductDetail";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  // const data = useFetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
  const data = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?x_cg_demo_api_key=CG-robwMvpMcHp1js83yXAtU5hT&vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );

  useEffect(() => {
    if (data) {
      setProducts(data);
      setFilteredProducts(data);
    }
  }, [data]);

  return (
    <>
      <Products.Provider
        value={{
          products,
          filteredProducts,
          setFilteredProducts,
        }}
      >
        <FavoriteProvider>
          <Header />
          {/* <div className={CSS.heading}>            
          </div> */}

          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <SearchBar />
                    {/* <FilterBar /> */}
                    <ProductsContainer />
                    <ToolBar />
                  </>
                }
              />
              <Route
                path="/product/:id"
                element={[<ProductDetail />, <ToolBar />]}
              />
            </Routes>
          </BrowserRouter>
        </FavoriteProvider>
      </Products.Provider>
    </>
  );
}

export default HomePage;
