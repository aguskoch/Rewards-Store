import {headers} from "./constants"

async function postMoreCoins(amount) {
    const URL_POSTCOINS = "https://coding-challenge-api.aerolab.co/user/points"

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