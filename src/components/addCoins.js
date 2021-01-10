import React from "react"
import coin from "../assets/coin.svg"
import postMoreCoins from "../actions/postMorePoints"
import { THOUSAND, FIVETHOUSAND, SEVENTHOUSAND} from "../actions/constants"

function AddCoins() {
    return (
        <div>
            <h4> Add more coins </h4>
            <button onClick= {() => postMoreCoins(THOUSAND)}>
                <img src={coin} alt={THOUSAND} />
                {THOUSAND}
            </button>
            <button onClick= {() => postMoreCoins(FIVETHOUSAND)}>
                <img src={coin} alt={FIVETHOUSAND} />
                {FIVETHOUSAND}
            </button>
            <button onClick= {() => postMoreCoins(SEVENTHOUSAND)}>
                <img src={coin} alt={SEVENTHOUSAND}  />
                {SEVENTHOUSAND}
            </button>
        </div>


    )
}

export default AddCoins