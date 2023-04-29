import React, { useEffect, useRef, useState } from "react";
import style from './Product.module.css';
import axios from "axios";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { addProductToBasket } from "../../store/reducers/basketReducer";


const Product = (props) => {

    let {productId} = useParams();

    const [product, setProducts] = useState([]);
    const [productCount, setProductCount] = useState(1);
    const [productSize, setProductSize] = useState('S');
    
    const count = useRef(productCount)

    useEffect( () => {
        const promise = axios.get(`http://localhost:5000/api/product/`+ productId)
        promise.then((res) => {
            setProducts(res.data)
    })}, [productId]);

    const onAddProductClick = (product, productCount, setProductSize) => {
        props.addProductToBasket(product, productCount, setProductSize)
    };

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
                            checked={productSize === 'S' && 'checked'}
                            onClick={() => setProductSize('S')}
                            className={`${style.sizeRadioButton} ${style.sSize}`} />
                        <label htmlFor="sSize"></label>
                        <input type="radio" name="size" id="mSize"
                            checked={productSize === 'M' && 'checked'}
                            onClick={() => setProductSize('M')} 
                            className={`${style.sizeRadioButton} ${style.mSize}`}/>
                        <label htmlFor="mSize"></label>
                        <input type="radio" name="size" id="lSize"
                            checked={productSize === 'L' && 'checked'}
                            onClick={() => setProductSize('L')} 
                            className={`${style.sizeRadioButton} ${style.lSize}`}/>
                        <label htmlFor="lSize"></label>
                        <input type="radio" name="size" id="xlSize" 
                            checked={productSize === 'XL' && 'checked'}
                            onClick={() => setProductSize('XL')}
                            className={`${style.sizeRadioButton} ${style.xlSize}`}/>
                        <label htmlFor="xlSize"></label>
                        <div className={style.addProductToBasketButtonContainer}>
                            <input type="number" className={style.productCount} ref={count} value={productCount} onChange={ () => setProductCount(count.current.value)} />
                            <button className={style.formButton} 
                                onClick={() => onAddProductClick(product, productCount, productSize)}>
                                Добавить в корзину
                            </button>
                        </div>
                </div>
            </section>
        </main>
    );
};


export default connect(null, {addProductToBasket})(Product);