import {headers} from "./constantHeaders"

async function getUser() {
    const URL_GETUSER = "https://coding-challenge-api.aerolab.co/user/me"

    try {
        const response = await fetch(URL_GETUSER, { method: "GET", headers })
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Error", error)
    }
}

export default getUser