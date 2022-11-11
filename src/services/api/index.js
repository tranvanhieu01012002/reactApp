import axios from "axios"
import {PRODUCT_KEY} from "@env"

const getProducts = async () =>{
    return await axios.get(`${PRODUCT_KEY}/products`)
}

export {getProducts};