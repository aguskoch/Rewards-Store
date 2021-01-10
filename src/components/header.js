import React from "react"
import getUser from "../actions/getUser"
import AddCoins from "../components/addCoins"


function Header() {

    //usar un context que tome el usuario entonces cada vez que cambie el estado va a renderear
    const [modal, setModal ] = React.useState (false)
    
    const [users, setUsers] = React.useState([])
    React.useEffect(() => {
        getUser().then(e => setUsers(e));
    },[users]);

    return (
        <section className="header">
            <h6> {users.name} </h6>
            <button onClick = {() => setModal(true)} > {users.points} </button>
            {modal ? 
            <AddCoins/> : null}
            <div className="container-header">
                <h6 className="title-header"> Electronics </h6>
            </div>
        </section>
    )
}

export default Header