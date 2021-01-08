import React, {useState} from "react"
import coin from "../assets/coin.svg"


function Cards(props) {
    
    const [hovered, isHovered] = useState(false)


    return (
        <div 
            className="card" 
            style={{ width: "18rem" }}
            onMouseOver={() => isHovered(true)}
            onMouseLeave={() => isHovered(false)}>
            <img src={props.img.url} className="card-img-top" className={hovered ? "img-hovered" : null} alt={props.name}/>
            <div className="card-body">
                <h6 class="card-subtitle mb-2 text-muted">{props.category}</h6>
                <h6 class="card-title">{props.name}</h6>
            </div>
            {hovered ? 
            <div class="card-hovered"> 
                <div class="buttons-card-hovered"> 
                    <div className="card-cost"> {props.cost} </div> 
                    <img src={coin}/>
                    <button type="button" class="btn btn-dark">Redeem now</button>
                </div>
                
            </div>: null}

        </div> 
    )
   
}

export default Cards