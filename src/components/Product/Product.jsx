import React, { useEffect, useState } from "react";
import style from './Product.module.css';
import axios from "axios";
import { useParams } from "react-router-dom";


const Product = () => {

    let {productId} = useParams();

    const [product, setProducts] = useState([])

    useEffect( () => {
        const promise = axios.get(`http://localhost:5000/api/product/`+ productId)
        promise.then((res) => {
            setProducts(res.data)
    })}, [])

    return (
        <main className={style.main}>
            <h1 className={style.header}>{product.name}</h1>
            <div className={style.path}>Главная — {product.name}</div>
            <section className={style.productInfoContainer}>
                <img src={'../static/' + product.img} alt={product.img} className={style.productImg} />
                <div>
                    <span className={style.productPrice}>
                        ${product.price}
                    </span>
                    <form>
                        <h3 className={style.chooseSize}>Выберите размер</h3>
                        <input type="radio" name="size" id="sSize" 
                            className={`${style.sizeRadioButton} ${style.sSize}`} />
                        <label htmlFor="sSize"></label>
                        <input type="radio" name="size" id="mSize" 
                            className={`${style.sizeRadioButton} ${style.mSize}`}/>
                        <label htmlFor="mSize"></label>
                        <input type="radio" name="size" id="lSize" 
                            className={`${style.sizeRadioButton} ${style.lSize}`}/>
                        <label htmlFor="lSize"></label>
                        <input type="radio" name="size" id="xlSize" 
                            className={`${style.sizeRadioButton} ${style.xlSize}`}/>
                        <label htmlFor="xlSize"></label>
                        <div className={style.addProductToBasketButtonContainer}>
                            <input type="number" className={style.productCount}/>
                            <button className={style.formButton}>Добавить в корзину</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
};


export default Product;