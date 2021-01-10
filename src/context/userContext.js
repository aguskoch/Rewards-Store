// import React from "react"
// import getUser from "../actions/getUser"
// import postRedeem from "../actions/postRedeem"

// const userContext = React.createContext()

// export const UserContext = (props) => {
//     const [users, setUsers] = React.useState([])
//     React.useEffect(() => {
//         getUser().then(e => setUsers(e));
//     },[postRedeem]);

//     return (
//         <userContext.Provider value={{users, setUsers}}>
//             {props.children}
//         </userContext.Provider>
//     )
// }
