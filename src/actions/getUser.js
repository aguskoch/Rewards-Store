import {headers} from "./constants"
import{URL_GETUSER} from "./constants"


async function GetUser() {
    
    // const [userLoaded, userIsLoading ] = React.useState(true)

    try {
        const response = await fetch(URL_GETUSER, { method: "GET", headers })
        const data = await response.json()
        // userIsLoading (false)
        return data
    } catch (error) {
        console.log("Error", error)
    }
}

export default GetUser