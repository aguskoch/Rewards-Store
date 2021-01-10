import {headers} from "./constants"
import {URL_POSTCOINS} from "./constants"

async function postMoreCoins(amount) {
    

    try {
        console.log(amount)
        const response = await fetch(URL_POSTCOINS, { method: "POST", headers, body: JSON.stringify({"amount": amount}) })
        console.log(response, amount)
        const data = await response.json()
        console.log(data, amount)
        return data
    } catch (error) {
        console.log("Error", error)
    }

}

export default postMoreCoins