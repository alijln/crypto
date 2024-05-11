import { useContext, useState } from "react";
import Product from "../Product/Product";
import CSS from "./productsContainer.module.css";
import Products from "../context/products/Products";
import Pagination from "../Pagination";

function ProductsContainer() {
  const { filteredProducts } = useContext(Products);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredProducts.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <div className={CSS.productsContainer}>
        {currentPosts.map((item) => {
          return <Product key={item.id} data={item} />;
        })}
      </div>

      <Pagination
        totalPosts={filteredProducts.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage} 
        currentPage={currentPage}
      />
    </>
  );
}

export default ProductsContainer;
