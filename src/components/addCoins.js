import React from "react"
import coin from "../assets/coin.svg"
import postMoreCoins from "../actions/postMorePoints"
import { THOUSAND, FIVETHOUSAND, SEVENTHOUSAND } from "../actions/constants"


function AddCoins(props) {

    const [ messageSuccessCoins, setMessageSuccessCoins] = React.useState("")

    const handleClickCoins = (number) =>{
        postMoreCoins(THOUSAND).then(response => setMessageSuccessCoins(response.message))
    }


    return (
        <div className="modal-screen">
            <section className="addCoins">
                <div className={messageSuccessCoins === "Points Updated" ? "successEnabled" : "successDisabled"}> 
                    <h1> Success </h1>
                    <button onClick={() => setMessageSuccessCoins("")}> X </button>
                </div>
                <h4 className="title-addCoins"> Add more coins </h4>
                <button className="button-addCoins one" onClick={() => handleClickCoins(THOUSAND)}>
                    <img src={coin} alt={THOUSAND} />
                    {THOUSAND}
                </button>
                <button className="button-addCoins two" onClick={() => handleClickCoins(FIVETHOUSAND)}>
                    <img src={coin} alt={FIVETHOUSAND} />
                    {FIVETHOUSAND}
                </button>
                <button className="button-addCoins three" onClick={() => handleClickCoins(SEVENTHOUSAND)}>
                    <img src={coin} alt={SEVENTHOUSAND} />
                    {SEVENTHOUSAND}
                </button>
                <button className="closeAddCoins" onClick={() => props.setModal(false)}> X </button>
            </section>
        </div>
        

    )
}

export default AddCoins