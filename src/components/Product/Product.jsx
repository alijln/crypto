import { useContext, useState } from "react";
import HeartSVG from "../SVGComponents/HeartSVG";
import CSS from "./product.module.css";
import FavoritesContext from "../context/FavoritesContext";
import { useNavigate } from "react-router-dom";

function Product({ data }) {
  const navigateTo = useNavigate();
  const { favorites, addItem, removeItem } = useContext(FavoritesContext);

  const isFavorite = favorites.find((item) => item.id === data.id);

  function handleClick() {
    if (isFavorite) {
      removeItem(data);
    } else {
      addItem(data);
    }
  }

  const handleproductDetailClick = (productId) => {
    console.log(productId);

    navigateTo(`/product/${productId}`);
  };

  return (
    <>
      <div
        onClick={() => handleproductDetailClick(data.id)}
        className={[CSS.product,CSS.coin].join(' ')}
      >
        <div className={CSS.image}>
          <img src={data.image} alt="" />
        </div>
        <div className={CSS.about}>
          <h3 className={CSS.title}>{data.title}</h3>
          <p className={CSS.desc}>Coin: {data.id}</p>
          <div className={CSS.actions}>
            <p style={{ margin: "3px 0px" }} className={CSS.price}>
              price ${data.current_price}
            </p>
            <div style={{ display: "flex", margin: "3px 0px" }}>
              <p style={{ margin: "0px 5px 0px 0px" }}>Higer</p>
              <p className={CSS.high24h}>${data.high_24h}</p>
            </div>
            <div style={{ display: "flex", margin: "3px 0px" }}>
              <p style={{ margin: "0px 5px 0px 0px" }}>lower</p>
              <p className={CSS.low24h}>${data.low_24h}</p>
            </div>
            {/* <HeartSVG
              onClick={handleClick}
              fill={isFavorite ? "red" : "currentColor"}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
