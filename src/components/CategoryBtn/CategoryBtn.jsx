import { useContext, useState } from 'react';
import useFetch from '../../hooks/useFetch/useFetch';
import Products from '../context/products/Products';
import CSS from './categoryBtn.module.css'

function CategoryBtn({ category, currentCat, setCurrentCat }) {
    let data;
    if (category == "All") {
        // data = useFetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        data = useFetch('https://api.coingecko.com/api/v3/coins/markets?x_cg_demo_api_key=CG-robwMvpMcHp1js83yXAtU5hT&vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    }

    // else {
    //     data = useFetch(`https://fakestoreapi.com/products/category/${category}`)
    // }
    const { setFilteredProducts } = useContext(Products)

    function filter() {
        setFilteredProducts(data)
        setCurrentCat(category)
    }

    return (
        <p className={(currentCat == category) ? `${CSS.activeBtn} ${CSS.filterBtn}` : `${CSS.filterBtn}`} onClick={filter}>{category}</p>
    )
}

export default CategoryBtn;