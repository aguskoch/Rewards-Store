import React from "react"
import AddCoins from "../components/addCoins"
import { userContext } from '../context/userContext';
import coin from "../assets/coin.svg"
import historyBtn from "../assets/arrow-counterclockwise.svg"
import mainScreen from "../assets/house-door.svg"


function Header() {

    const [modal, setModal] = React.useState(false)
    const { users, points, history, setHistory } = React.useContext(userContext)

    return (
        <section className="header">
            <div className="userNameInfo">
                <h6 className="userName"> {users.name} </h6>
                <button className="button-headerCoins" onClick = {() => setModal(true)} > 
                    {points}
                    <img src={coin} alt="coin"/>
                </button>
                <button className="switch-btn" onClick={() => setHistory(true)} style={{display: history ? "none" : "block"}}> 
                    <img src={historyBtn} alt="history"/>
                </button>
                <button className="switch-btn" onClick={() => setHistory(false)} style={{display: history ? "block" : "none"}}> 
                    <img src={mainScreen} alt="mainScreen"/>
                </button>
                
            </div>
            
            {modal ? 
            <AddCoins setModal={setModal}/> : null}
            <div className="container-header">
                <h6 className="title-header" style={{display: history ? "none" : "block"}}> Electronics </h6>
                <h6 className="title-header" style={{display: history ? "block" : "none"}}> History </h6>
            </div>
        </section>
    )
}

export default Header