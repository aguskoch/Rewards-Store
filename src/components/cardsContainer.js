import React from "react"
import Cards from "./cards"
import getProducts from "../actions/getProducts"
import usePagination from "../customHook/usePagination"
import { LIMIT } from "../actions/constants"
import arrowLeft from "../assets/arrow-left.svg"
import arrowRight from "../assets/arrow-right.svg"
import { userContext } from '../context/userContext';
import ProductsHistory from "./productsHistory"

const CardsContainer = () => {

    const [products, setProducts] = React.useState([])
    const [sortData, setSortData] = React.useState("recent")
    const [option, setOption] = React.useState("")
    const { history } = React.useContext(userContext)

    
    React.useEffect(() => {
        getProducts().then(e => setProducts(e));
    }, []);

    const renderSwitch = () => {
        switch(sortData){
            case "lowPrice": 
                return products.sort((a,b) => parseFloat(a.cost) - parseFloat(b.cost)).map((data,id) => <Cards key={id} {...data} />)
            case "highPrice":
                return products.sort((a,b) => parseFloat(b.cost) - parseFloat(a.cost)).map((data,id) => <Cards key={id} {...data} />)
            default: 
                return products.sort((a,b) => (a._id < b._id ? -1 : 1)).map((data,id) => <Cards key={id} {...data} />)
        } 

    }

    const {currentArray, next, prev, currentPage, maxPage } = usePagination(renderSwitch(),LIMIT)

    return (
        <div style={{display: history ? "none" : "block"}} className="container">
            <div className="sort-options"> 
                <h5> Sort by: </h5>
                <button className={option === "recent"? "sort-option-btn active" : "sort-option-btn"} onClick={() => {setSortData("recent"); setOption("recent")}}> Most Recent </button>
                <button className={option === "low" ? "sort-option-btn active" : "sort-option-btn"} onClick={() => {setSortData("lowPrice"); setOption("low")}}> Price: Low to High </button>
                <button className={option === "high" ? "sort-option-btn active" : "sort-option-btn"} onClick={() => {setSortData("highPrice"); setOption("high")}}> Price: High to Low </button>
            </div>
            <div className="container-cards">
                {currentArray}
            </div>
            <div style={{display: history ? "block" : "none"}}>
                <ProductsHistory />
            </div>
            <div className="arrows">
                <h8 className="btn-p"> Page {currentPage} / {maxPage} </h8>
                <button className="arrow-btn" disabled={currentPage <= 1} onClick={() => prev()}> 
                    <img src={arrowLeft} alt="prev" />
                </button>
                <button className="arrow-btn" disabled={currentPage >= maxPage} onClick={() => next()}> 
                    <img src={arrowRight} alt="next" /> 
                </button>
            </div>
        
            

        </div>

    )


}

export default CardsContainer
