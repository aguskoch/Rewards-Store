import {headers} from "./constants"

async function getProducts() {
    const URL_GETPRODUCTS = "https://coding-challenge-api.aerolab.co/products"

    try {
        const response = await fetch(URL_GETPRODUCTS, { method: "GET", headers })
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Error", error)
    }
}

export default getProducts