import {headers} from "./constantHeaders"
import getUser from "./getUser"

async function postRedeem(productId) {
    const URL_POSTREDEEM = "https://coding-challenge-api.aerolab.co/redeem"

    try {
        const response = await fetch(URL_POSTREDEEM, { method: "POST", headers, body: JSON.stringify({"productId": productId}) })
        const data = await response.json()
        console.log(data, productId, getUser())
        return data
    } catch (error) {
        console.log("Error", error)
    }
}

export default postRedeem