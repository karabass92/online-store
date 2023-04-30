import axios from "axios";


const instance = axios.create (
    {baseURL: 'http://localhost:5000/api/'}
);


export const productAPI = {
    getOneProduct(productId) {
        return instance.get(`product/${productId}`)
            .then(response => response.data)
    }
};


export const shopAPI = {
    getAllProducts() {
        return instance.get(`product`)
            .then(response => response.data.rows)
    }
};


export const mainPageAPI = {
    getNewCollection() {
        return instance.get(`product`)
            .then(response => response.data.rows.slice(-3))
    }
};