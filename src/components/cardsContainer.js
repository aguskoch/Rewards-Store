import React from "react"
import Cards from "./cards"
import getProducts from "../actions/getProducts"
import usePagination from "../customHook/usePagination"
import { LIMIT } from "../actions/constants"

const CardsContainer = () => {

    const [products, setProducts] = React.useState([])
    const [sortData, setSortData] = React.useState("recent")
    
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
        <div>
            <button onClick={() => setSortData("recent")}> Most Recent </button>
            <button onClick={() => setSortData("lowPrice")}> Price: Low to High </button>
            <button onClick={() => setSortData("highPrice")}> Price: High to Low </button>
            {/* <div className="container-cards">
                {products.map((data, id) => {
                    return <Cards key={id} {...data} />
                })}
            </div> */}
            <div className="container-cards">
                {currentArray}
                <div>
                    <button disabled={currentPage <= 1} onClick={() => prev()}> Prev </button>
                    <button disabled={currentPage >= maxPage} onClick={() => next()}> Next </button>
                </div>
                
            </div>
            

        </div>

    )


}

export default CardsContainer
