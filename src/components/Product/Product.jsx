import React, { useEffect, useState } from "react";
import style from './Product.module.css';
import axios from "axios";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { addProductToBasket } from "../../store/reducers/basketReducer";


const Product = (props) => {

    let {productId} = useParams();

    const [product, setProducts] = useState([])

    useEffect( () => {
        const promise = axios.get(`http://localhost:5000/api/product/`+ productId)
        promise.then((res) => {
            setProducts(res.data)
    })}, [productId])

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
                            <button className={style.formButton} onClick={ () => props.addProductToBasket(product)}>Добавить в корзину</button>
                        </div>
                </div>
            </section>
        </main>
    );
};


const mapStateToProps = (state) => {
    return {}
}


export default connect(mapStateToProps, {addProductToBasket})(Product);