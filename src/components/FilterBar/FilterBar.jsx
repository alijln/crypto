import { useState } from 'react'
import useFetch from '../../hooks/useFetch/useFetch'
import CategoryBtn from '../CategoryBtn/CategoryBtn'
import CSS from './filterBar.module.css'

function FilterBar(){
    const categories = useFetch('https://fakestoreapi.com/products/categories')
    const [currentCat , setCurrentCat] = useState("All")
    return(
        <>
        <div className={CSS.filterBar}>
            <CategoryBtn category={"All"} currentCat={currentCat} setCurrentCat={setCurrentCat}/>
            {categories.map(category =>{
                return <CategoryBtn key={category} category={category} currentCat={currentCat} setCurrentCat={setCurrentCat}/>
            })}
        </div>
        </>
    )
}

export default FilterBar