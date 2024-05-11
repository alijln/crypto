import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CSS from "./index.module.css";
import Products from "../context/products/Products";

function ProductDetail() {
  const { id } = useParams();
  const { products } = useContext(Products);
  const selectedCoin = products.find((item) => item.id === id);

  return (
    <>
      <div className={CSS.container}>
        <div className={CSS.imageContainer}>
          <img src={selectedCoin?.image} alt={selectedCoin?.name} className={CSS.image} />
        </div>
        <table className={CSS.table}>
          <tbody>
            <tr>
              <th>ID</th>
              <td>{selectedCoin?.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{selectedCoin?.name}</td>
            </tr>
            <tr>
              <th>Symbol</th>
              <td>{selectedCoin?.symbol}</td>
            </tr>
            <tr>
              <th>Current Price</th>
              <td>${selectedCoin?.current_price}</td>
            </tr>
            <tr>
              <th>Market Cap</th>
              <td>${selectedCoin?.market_cap}</td>
            </tr>
            <tr>
              <th>Market Cap Rank</th>
              <td>{selectedCoin?.market_cap_rank}</td>
            </tr>
            <tr>
              <th>Fully Diluted Valuation</th>
              <td>${selectedCoin?.fully_diluted_valuation}</td>
            </tr>
            <tr>
              <th>Total Volume</th>
              <td>${selectedCoin?.total_volume}</td>
            </tr>
            <tr>
              <th>High 24h</th>
              <td>${selectedCoin?.high_24h}</td>
            </tr>
            <tr>
              <th>Low 24h</th>
              <td>${selectedCoin?.low_24h}</td>
            </tr>
            <tr>
              <th>Price Change 24h</th>
              <td>${selectedCoin?.price_change_24h}</td>
            </tr>
            <tr>
              <th>Price Change Percentage 24h</th>
              <td>{selectedCoin?.price_change_percentage_24h}%</td>
            </tr>
            <tr>
              <th>Market Cap Change 24h</th>
              <td>${selectedCoin?.market_cap_change_24h}</td>
            </tr>
            <tr>
              <th>Market Cap Change Percentage 24h</th>
              <td>{selectedCoin?.market_cap_change_percentage_24h}%</td>
            </tr>
            <tr>
              <th>Circulating Supply</th>
              <td>{selectedCoin?.circulating_supply}</td>
            </tr>
            <tr>
              <th>Total Supply</th>
              <td>{selectedCoin?.total_supply}</td>
            </tr>
            <tr>
              <th>Max Supply</th>
              <td>{selectedCoin?.max_supply}</td>
            </tr>
            <tr>
              <th>All Time High</th>
              <td>${selectedCoin?.ath}</td>
            </tr>
            <tr>
              <th>All Time High Change Percentage</th>
              <td>{selectedCoin?.ath_change_percentage}%</td>
            </tr>
            <tr>
              <th>All Time High Date</th>
              <td>{new Date(selectedCoin?.ath_date).toLocaleDateString()}</td>
            </tr>
            <tr>
              <th>All Time Low</th>
              <td>${selectedCoin?.atl}</td>
            </tr>
            <tr>
              <th>All Time Low Change Percentage</th>
              <td>{selectedCoin?.atl_change_percentage}%</td>
            </tr>
            <tr>
              <th>All Time Low Date</th>
              <td>{new Date(selectedCoin?.atl_date).toLocaleDateString()}</td>
            </tr>
            <tr>
              <th>Last Updated</th>
              <td>{new Date(selectedCoin?.last_updated).toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>

      
    </>
  );
}

export default ProductDetail;
