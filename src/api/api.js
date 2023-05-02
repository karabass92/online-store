import axios from "axios";


/**
 * TODO: Учитывая, что нет глобального интерсептора ошибок, то, на мой взгляд, стоит описать логику catch для запросов,
 * чтобы можно было отслеживать состояния запросов, и использовать их для отображения разных сцениариев.
 */

const instance = axios.create (
    /** TODO: такие ссылки тоже выносятся в файлики с константами */
    {baseURL: 'http://localhost:5000/api/'}
);


export const productAPI = {
    getOneProduct(productId) {
        /** TODO: такие ссылки тоже выносятся в файлики с константами, сделать файл где будут все урл эндпоинтов
         * валяться и тут импортить. Ну и ко всем ссылкам дальше относится
         * */
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